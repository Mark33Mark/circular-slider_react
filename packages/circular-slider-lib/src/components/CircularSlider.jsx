import { useEffect, useReducer, useRef, useState } from 'react';
import { reducer, initialState } from '../redux/reducer';
import {
    constants,
    defaults,
    getRadiansFromDataIndex,
    getRadiansFromValue,
    getValueFromRadians,
    getSvgOffset,
} from '../utilities';
import { useEventListener } from '../hooks';
import { Knob, Labels, Svg } from '../components';
import '../styles';

export const CircularSlider = rawProps => {
    const hasArc = typeof rawProps.arcStart === 'number' && typeof rawProps.arcEnd === 'number';

    // sanitize knobPosition
    let safeKnobPosition = rawProps.knobPosition ?? defaults.knobPosition;
    if (typeof safeKnobPosition === 'number') {
        safeKnobPosition = ((safeKnobPosition % 360) + 360) % 360;
    }

    const { KNOB_POSITIONING_WARNING, PROGRESS_SIZE_FALLBACK, TRACK_SIZE_FALLBACK, WIDTH_FALLBACK } = constants;

    const props = {
        ...defaults,
        ...rawProps,
        // if arcStart and arcEnd set, force 'top'. Otherwise, use the safely normalized 0-359 position.
        knobPosition: hasArc ? 'top' : safeKnobPosition,
    };

    const {
        arcEnd,
        arcStart,
        children,
        data,
        dataIndex,
        direction,
        isDragging,
        keypressStep,
        knobAnimated,
        knobColor,
        knobDraggable,
        knobHide,
        knobHideRing,
        knobPosition,
        knobRingRadius,
        knobSize,
        label,
        labelAppendCss,
        labelAppendValue,
        labelBottom,
        labelColor,
        labelFontSize,
        labelHideValue,
        labelHorizontalOffset,
        labelPrependCss,
        labelPrependValue,
        labelShow,
        labelValueFontSize,
        labelValueHorizontalOffset,
        labelValueVerticalOffset,
        labelVerticalOffset,
        limitDragRange,
        max,
        min,
        onChange,
        progressColorFrom,
        progressColorTo,
        progressGradient,
        progressLineCap,
        progressSize,
        ref,
        trackColor,
        trackDraggable,
        trackGradient,
        trackSize,
        value,
        width,
    } = { ...defaults, ...props };

    const circularSlider = useRef(null);
    const svgFullPath = useRef(null);
    const lastKeyPressTime = useRef(0);

    // track previous props to act as sync triggers
    const prevDataIndex = useRef(props.dataIndex);
    const prevValue = useRef(props.value);

    const [state, dispatch] = useReducer(reducer, props, initialState);

    // track "last resize"
    const [resizeTrigger, setResizeTrigger] = useState(0);

    // unified position dispatcher
    const updatePosition = (radians, fromDrag = false) => {
        // calculate the actual value from radians
        const newValue = getValueFromRadians(radians, state, props);

        if (newValue !== state.value) {
            dispatch({
                type: 'CALCULATE_POSITION',
                payload: { radians, value: newValue, fromDrag, props },
            });

            // trigger callback only during user drag/clicks
            if (fromDrag && props.onChange) {
                props.onChange(newValue);
            }
        }
    };

    // user interaction handlers
    const onPointerDown = event => {
        if (state.isDragging) return;
        isDragging(true);
        dispatch({ type: 'SET_DRAGGING', payload: true });
    };

    const onPointerUp = () => {
        if (!state.isDragging) return;
        isDragging(false);
        dispatch({ type: 'SET_DRAGGING', payload: false });
    };

    const onPointerMove = event => {
        if (!state.isDragging || (!knobDraggable && !trackDraggable)) return;

        event.preventDefault();

        const touch = event.type === 'touchmove' ? event.changedTouches[0] : null;
        const getOffset = ref => {
            const element = ref.current;
            /* v8 ignore next */
            if (!element) {
                return { top: 0, left: 0 };
            }
            const rect = element.getBoundingClientRect();
            const scrollLeft = window.pageXOffset ?? document.documentElement.scrollLeft ?? 0;
            const scrollTop = window.pageYOffset ?? document.documentElement.scrollTop ?? 0;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft,
            };
        };

        // calculate mouse position relative to component center
        const offset = getOffset(circularSlider);
        const pageX = touch ? touch.pageX : event.pageX;
        const pageY = touch ? touch.pageY : event.pageY;
        const mouseX = pageX - (offset.left + state.radius);
        const mouseY = pageY - (offset.top + state.radius);

        // Convert to radians
        let radians = Math.atan2(mouseY, mouseX);

        // constrain the radians to prevent multiple rounds
        if (limitDragRange) {
            const { arcStart, arcEnd, direction } = props;
            const isAntiClockwise = direction === 'anti-clockwise';

            let currentNormalised = (state.radians + state.knobOffset) % (2 * Math.PI);
            let newNormalised = (radians + state.knobOffset) % (2 * Math.PI);

            // If anti-clockwise, we flip the coordinate system so the math
            // behaves like a clockwise system relative to the movement.
            if (isAntiClockwise) {
                currentNormalised = (2 * Math.PI - currentNormalised) % (2 * Math.PI);
                newNormalised = (2 * Math.PI - newNormalised) % (2 * Math.PI);
            }

            // commenting out for the moment as I don't think this case will ever be hit
            // snap floating point wrapping errors (e.g. 6.28318...) strictly to 0
            // if (Math.abs(currentNormalised - 2 * Math.PI) < 0.001) currentNormalised = 0;

            if (newNormalised < 0) {
                newNormalised += 2 * Math.PI;
            }

            // snap floating point wrapping errors for the new angle too
            if (Math.abs(newNormalised - 2 * Math.PI) < 0.001) {
                newNormalised = 0;
            }

            if (hasArc) {
                // treat the arc gap as a dead zone
                const degrees = (newNormalised * 180) / Math.PI;
                const normArcStart = (arcStart + 360) % 360;
                const normArcEnd = (arcEnd + 360) % 360;
                const arcSpan = (normArcEnd - normArcStart + 360) % 360;

                // calculate how far into the circle the mouse is from the start
                const degreesInArc = (degrees - normArcStart + 360) % 360;

                // if distance is greater than the arc's total span, the mouse is in the gap
                if (degreesInArc > arcSpan) {
                    // determine which edge the mouse is closer to
                    const distToStart = 360 - degreesInArc;
                    const distToEnd = degreesInArc - arcSpan;

                    // clamp to the nearest valid edge
                    const clampedDegrees = distToStart < distToEnd ? normArcStart : normArcEnd;

                    // convert back to raw radians for updatePosition
                    radians = (clampedDegrees * Math.PI) / 180 - state.knobOffset;
                }
            } else {
                // calculate the absolute angular distance between current knob and mouse
                const jumpDistance = Math.abs(newNormalised - currentNormalised);

                // limiter: if the jump is larger than 180 degrees (Math.PI),
                // then user trying to drag across the start/end boundary.
                if (jumpDistance > Math.PI) {
                    // abort position update. Knob stays clamped at the limit
                    // until the user moves the mouse back to the valid side.
                    return;
                }
            }
        }

        updatePosition(radians, true);
    };

    const onKeyDown = event => {
        // simple timestamp throttle debouncer for fast keyboards
        // stops a false double key press from a single press.
        const now = Date.now();
        if (now - lastKeyPressTime.current < 50) {
            return;
        }
        lastKeyPressTime.current = now;

        const validKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Home', 'End'];

        // exit if focus not on slider or a valid key not pressed.
        if (event.target !== document.activeElement) {
            return;
        }
        if (!validKeys.includes(event.key)) {
            return;
        }

        event.preventDefault();

        const dataLength = state.data.length;

        // derive current index from the state.data array and the current label
        // if state.label has the current value, finding its index in the array is reliable
        const currentIndex = state.data.indexOf(state.label);

        if (currentIndex === -1) {
            return;
        }

        const keyProgress = keypressStep || 1;
        const isIncrement = event.key === 'ArrowUp' || event.key === 'ArrowRight';
        const direction = isIncrement ? keyProgress : -keyProgress;
        const isReset = event.key === 'Home' || event.key === 'End';

        // a small hack to force the knob and value to be at the start of the circle
        const reset = isReset && event.key === 'Home' ? 0.01 : dataLength - 1.01;

        let targetIndex;

        // calculate target and keep inside bounds if limitDragRange is 'true'
        if (limitDragRange) {
            targetIndex =
                Math.max(0, Math.min(currentIndex + direction, dataLength - 1)) >= dataLength - 1
                    ? dataLength - 1.01
                    : Math.max(0, Math.min(currentIndex + direction, dataLength - 1));
        } else {
            targetIndex =
                Math.max(0, Math.min(currentIndex + direction, dataLength - 1)) > dataLength - 1
                    ? 0
                    : currentIndex + direction < 0
                      ? dataLength - 1.01
                      : currentIndex + direction > dataLength - 1
                        ? 0.01
                        : Math.max(0, Math.min(currentIndex + direction, dataLength - 1));
        }

        const radians = isReset
            ? getRadiansFromDataIndex(reset, state, props)
            : getRadiansFromDataIndex(targetIndex, state, props);

        // Math.atan2(y, x) returns the counterclockwise angle (in radians) between the
        // positive x-axis and the point (x, y)
        const normalizedRadians = Math.atan2(Math.sin(radians), Math.cos(radians));

        updatePosition(normalizedRadians, true);
    };

    // issue a warning if knobPosition is set with arcStart and arcEnd
    useEffect(() => {
        if (hasArc && process.env.NODE_ENV !== 'production' && rawProps.knobPosition !== undefined) {
            console.warn(KNOB_POSITIONING_WARNING);
        }
    }, []);

    useEffect(() => {
        // calculate with math instead of measuring the DOM
        const effectiveStroke = Math.max(
            props.trackSize ?? TRACK_SIZE_FALLBACK,
            props.progressSize ?? PROGRESS_SIZE_FALLBACK
        );
        const baseRadius = (props.width ?? WIDTH_FALLBACK) / 2;
        const trueRadius = baseRadius - effectiveStroke / 2;
        const calculatedFullArray = 2 * Math.PI * trueRadius;

        dispatch({ type: 'INIT', payload: calculatedFullArray });

        const initialRad =
            props.value !== undefined && props.value !== null
                ? getRadiansFromValue(props.value, state, props)
                : getRadiansFromDataIndex(props.dataIndex ?? 0, state, props);

        updatePosition(initialRad, false);
    }, []);

    // sync props
    useEffect(() => {
        if (!state.mounted || state.isDragging) return;

        if (props.dataIndex !== prevDataIndex.current) {
            prevDataIndex.current = props.dataIndex;
            const rads = getRadiansFromDataIndex(props.dataIndex, state, props);
            updatePosition(rads, false);
        }

        if (props.value !== prevValue.current) {
            prevValue.current = props.value;

            const rads = getRadiansFromValue(props.value, state, props);
            updatePosition(rads, false);
        }
    }, [props.dataIndex, props.value, state.mounted, state.isDragging]);

    // ResizeObserver bumps the update trigger
    useEffect(() => {
        const observer = new ResizeObserver(() => setResizeTrigger(prev => prev + 1));
        if (circularSlider.current) observer.observe(circularSlider.current);
        return () => observer.disconnect();
    }, []);

    // listen for the trigger and update reducer
    useEffect(() => {
        // Recalculate math based on the newly updated `width` state
        const effectiveStroke = Math.max(
            props.trackSize ?? TRACK_SIZE_FALLBACK,
            props.progressSize ?? PROGRESS_SIZE_FALLBACK
        );
        const baseRadius = width / 2;
        const trueRadius = baseRadius - effectiveStroke / 2;
        const calculatedFullArray = 2 * Math.PI * trueRadius;

        dispatch({
            type: 'UPDATE_DIMENSIONS',
            payload: {
                width,
                radius: baseRadius,
                dashFullArray: calculatedFullArray,
            },
        });
    }, [resizeTrigger, width, props.trackSize, props.progressSize]);

    useEffect(() => {
        // Only sync if the component has completed its initial mount
        if (state.mounted) {
            dispatch({
                type: 'CALCULATE_POSITION',
                payload: {
                    radians: state.radians, // Keep current position
                    fromDrag: false,
                    props, // Pass fresh props (with the new progressSize)
                },
            });
        }
        // update position whenever structural or sizing props alter externally
    }, [props.progressSize, resizeTrigger, width, props.trackSize, props.selectedFruit, state.mounted]);

    useEventListener('pointerup', onPointerUp);
    useEventListener('pointermove', onPointerMove);

    const sanitizedLabel = label.replace(/[^a-zA-Z0-9-_]/g, '_');
    const sliderStyle = {
        opacity: state.mounted ? 1 : 0,
    };

    const displayValue = state.isDragging
        ? `${state.label}`
        : value !== undefined && value !== null
          ? `${value}`
          : `${state.label}`;

    return (
        <div
            aria-label={`${props.label}: ${displayValue}`}
            aria-valuemax={data.length > 0 ? data.length - 1 : max}
            aria-valuemin={data.length > 0 ? 0 : min}
            aria-valuenow={props.data && props.data.length > 0 ? dataIndex : parseFloat(displayValue)}
            aria-valuetext={`${labelPrependValue}${displayValue}${labelAppendValue}`}
            className={'W8D-CircularSlider'}
            onKeyDown={onKeyDown}
            ref={circularSlider}
            role="slider"
            style={sliderStyle}
            tabIndex={0}
            data-testid={'circular-slider'}
        >
            <Svg
                arcEnd={arcEnd}
                arcStart={arcStart}
                direction={direction}
                isDragging={state.isDragging}
                label={sanitizedLabel}
                onPointerDown={onPointerDown}
                progressColorFrom={progressColorFrom}
                progressColorTo={progressColorTo}
                progressGradient={progressGradient}
                progressLineCap={progressLineCap}
                progressSize={progressSize}
                radiansOffset={getSvgOffset(props.knobPosition)}
                strokeDasharray={state.dashFullArray}
                strokeDashoffset={state.dashFullOffset}
                svgFullPath={svgFullPath}
                trackColor={trackColor}
                trackDraggable={trackDraggable}
                trackGradient={trackGradient}
                trackSize={trackSize}
                width={width}
            />
            <Knob
                isDragging={state.isDragging}
                knobAnimated={knobAnimated}
                knobColor={knobColor}
                knobDraggable={knobDraggable}
                knobHide={knobHide}
                knobHideRing={knobHideRing}
                knobPosition={state.knob}
                knobRingRadius={knobRingRadius}
                knobSize={knobSize}
                onPointerDown={onPointerDown}
                progressSize={progressSize}
                trackSize={trackSize}
            >
                {children}
            </Knob>
            {labelShow && (
                <Labels
                    label={label}
                    labelAppendCss={labelAppendCss}
                    labelAppendValue={labelAppendValue}
                    labelBottom={labelBottom}
                    labelColor={labelColor}
                    labelFontSize={labelFontSize}
                    labelHideValue={labelHideValue}
                    labelHorizontalOffset={labelHorizontalOffset}
                    labelPrependCss={labelPrependCss}
                    labelPrependValue={labelPrependValue}
                    labelValueFontSize={labelValueFontSize}
                    labelValueHorizontalOffset={labelValueHorizontalOffset}
                    labelValueVerticalOffset={labelValueVerticalOffset}
                    labelVerticalOffset={labelVerticalOffset}
                    value={displayValue}
                />
            )}
        </div>
    );
};
