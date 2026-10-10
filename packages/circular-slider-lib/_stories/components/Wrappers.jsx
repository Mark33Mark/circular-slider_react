import { useState, useRef, useEffect } from 'react';
import { CircularSlider, Knob, Svg } from '../../src/components';
import { calculateSliderPosition } from '../../src/utilities';

export const InteractiveSvgWrapper = args => {
    const {
        width = 200,
        trackSize = 10,
        progressSize = 10,
        arcStart,
        arcEnd,
        direction = 'clockwise',
        position = 'top',
        data,
        dataIndex = 0,
        keypressStep = 1,
        min = 0,
        max = 359,
        limitDragRange = true,
        trackDraggable = true,
        progressLineCap = 'round',
    } = args;

    const wrapperRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [percentage, setPercentage] = useState(0);

    // Keep a ref of percentage so event listeners always see the latest value without stale closures
    const percentageRef = useRef(percentage);
    useEffect(() => {
        percentageRef.current = percentage;
    }, [percentage]);

    // Sync percentage when Storybook controls change dataIndex
    useEffect(() => {
        let newPercentage = 0;

        if (Array.isArray(data) && data.length > 1) {
            const maxIndex = data.length - 1;
            const clampedIndex = Math.max(0, Math.min(dataIndex, maxIndex));
            newPercentage = clampedIndex / maxIndex;
        } else {
            const range = max - min;
            if (range > 0) {
                const clampedValue = Math.max(min, Math.min(dataIndex, max));
                newPercentage = (clampedValue - min) / range;
            }
        }

        setPercentage(isNaN(newPercentage) ? 0 : newPercentage);
    }, [dataIndex, data, min, max]);

    // Geometry math
    const maxStrokeSize = Math.max(trackSize, progressSize);
    const radius = width / 2 - maxStrokeSize / 2;
    const circumference = 2 * Math.PI * radius;

    const isArcMode = typeof arcStart === 'number' && typeof arcEnd === 'number';
    const arcSpan = isArcMode ? (arcEnd - arcStart + 360) % 360 : 360;

    // Position Math
    const positionDegreesMap = { top: 0, right: 90, bottom: 180, left: 270 };
    const positionDegrees = positionDegreesMap[position] ?? 0;
    const actualRadiansOffset =
        args.radiansOffset !== undefined ? args.radiansOffset : (positionDegrees * Math.PI) / 180;

    // Progress Math
    const trackLength = (arcSpan / 360) * circumference;
    const strokeDasharray = circumference;

    // Calculate base offset for the current percentage
    const baseOffset = circumference - percentage * trackLength;

    // Counteract Svg.jsx's internal linecap offset adjustment (0.2 * trackSize)
    const lineCapAdjustment = progressLineCap && progressLineCap !== 'butt' ? 0.2 * trackSize : 0;

    // Final offset passed to Svg
    const strokeDashoffset = baseOffset - lineCapAdjustment;

    // Pointer Angle Math with limitDragRange check
    const updateProgressFromEvent = e => {
        if (!wrapperRef.current) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;

        const dx = clientX - centerX;
        const dy = clientY - centerY;

        const theta = (Math.atan2(dy, dx) * (180 / Math.PI) + 90 + 360) % 360;
        let progressDeg = 0;

        if (isArcMode) {
            const localTheta = direction === 'anti-clockwise' ? (360 - theta) % 360 : theta;
            progressDeg = (localTheta - arcStart + 360) % 360;

            if (progressDeg > arcSpan) {
                const distToStart = 360 - progressDeg;
                const distToEnd = progressDeg - arcSpan;
                progressDeg = distToStart < distToEnd ? 0 : arcSpan;
            }
        } else {
            if (direction === 'anti-clockwise') {
                progressDeg = (360 - theta + positionDegrees) % 360;
            } else {
                progressDeg = (theta - positionDegrees + 360) % 360;
            }

            if (limitDragRange) {
                const currentDeg = percentageRef.current * 360;
                const jumpDistance = Math.abs(progressDeg - currentDeg);

                // If the user tries to jump across the 0/360 seam (> 180° jump), block the move
                if (jumpDistance > 180) {
                    return;
                }
            }
        }

        setPercentage(progressDeg / arcSpan);
    };

    const handlePointerDown = e => {
        if (!trackDraggable) return;

        // Stop event bubbling so it only fires once
        e.stopPropagation();

        setIsDragging(true);
        updateProgressFromEvent(e);

        // Forward the event to args.onPointerDown so Storybook actions & tests can track it!
        if (typeof args.onPointerDown === 'function') {
            args.onPointerDown(e);
        }
    };

    useEffect(() => {
        if (!trackDraggable) return;

        const handlePointerMove = e => {
            if (isDragging) {
                e.preventDefault();
                updateProgressFromEvent(e);
            }
        };
        const handlePointerUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('pointermove', handlePointerMove, { passive: false });
            window.addEventListener('touchmove', handlePointerMove, { passive: false });
            window.addEventListener('pointerup', handlePointerUp);
            window.addEventListener('touchend', handlePointerUp);
        }

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('touchmove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
            window.removeEventListener('touchend', handlePointerUp);
        };
    }, [isDragging, arcStart, arcEnd, positionDegrees, direction, trackDraggable, limitDragRange]);

    const handleKeyDown = e => {
        const step = keypressStep / 100;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            setPercentage(prev => Math.min(prev + step, 1));
            e.preventDefault();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            setPercentage(prev => Math.max(prev - step, 0));
            e.preventDefault();
        }
    };

    return (
        <div
            ref={wrapperRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            style={{
                display: 'inline-block',
                outline: 'none',
                cursor: trackDraggable ? (isDragging ? 'grabbing' : 'grab') : 'default',
                touchAction: 'none',
            }}
        >
            <Svg
                {...args}
                radiansOffset={actualRadiansOffset}
                isDragging={isDragging}
                onPointerDown={handlePointerDown}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
            />
        </div>
    );
};

export const InteractiveKnobWrapper = args => {
    const containerRef = useRef(null);

    // extract `children` and `knobPosition` from args
    // so they aren't passed into the math utility
    const { children, knobPosition: visualCoordinates, ...restArgs } = args;

    const [isDragging, setIsDragging] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(visualCoordinates);

    useEffect(() => {
        setCurrentPosition(visualCoordinates);
    }, [visualCoordinates]);

    const width = 200;
    const height = 200;

    const handlePointerDown = () => {
        if (!args.knobDraggable) return;
        setIsDragging(true);
    };

    useEffect(() => {
        const handlePointerMove = e => {
            if (!isDragging || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + width / 2;
            const centerY = rect.top + height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const radians = Math.atan2(dy, dx);

            const mockState = {
                radius: width / 2,
                data: Array(100).fill(0),
            };

            const mockProps = {
                trackSize: 10,
                progressSize: 10,
                direction: 'clockwise',
                ...restArgs, // Safely passes all remaining args (omitting children/knobPosition)
                width,
                height,
                knobPosition: 'left',
            };

            const result = calculateSliderPosition({
                radians,
                state: mockState,
                props: mockProps,
                fromDrag: true,
            });

            if (result?.knob && !isNaN(result.knob.x)) {
                setCurrentPosition(result.knob);
            }
        };

        const handlePointerUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerUp);
            window.addEventListener('pointercancel', handlePointerUp);
        }

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
            window.removeEventListener('pointercancel', handlePointerUp);
        };
    }, [isDragging, restArgs, visualCoordinates]);

    const mappedArgs = {
        ...args,
        knobPosition: currentPosition,
        isDragging: isDragging,
        onPointerDown: handlePointerDown,
    };

    return (
        <div
            ref={containerRef}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                position: 'relative',
                border: '1px dashed #ccc',
                borderRadius: '50%',
                touchAction: 'none',
            }}
        >
            <Knob {...mappedArgs}>{children}</Knob>
        </div>
    );
};

export const SpeedometerWrapper = args => {
    // store speed in state to calculate dynamic colors & labels
    const [speed, setSpeed] = useState(args.dataIndex ?? 0);

    const dynamicColor = speed >= 170 ? '#dc2626' : speed >= 90 ? '#d67921ec' : '#0b9627';

    return (
        <CircularSlider
            {...args}
            // Pass dynamic colors driven by state, but DO NOT override dataIndex
            knobColor={dynamicColor}
            labelColor={dynamicColor}
            onChange={newValue => {
                setSpeed(newValue);
                args.onChange?.(newValue);
            }}
        />
    );
};

export const DualControlWrapper = ({ knobPreset, knobPosition: sbKnobPosition, onChange, ...rest }) => {
    const PRESET_MAP = {
        top: 90,
        right: 0,
        bottom: 270,
        left: 180,
    };

    // The single source of truth for the component
    const [currentAngle, setCurrentAngle] = useState(sbKnobPosition);

    // Keep track of previous args so we know WHICH control the user just touched
    const [prevPreset, setPrevPreset] = useState(knobPreset);
    const [prevPosition, setPrevPosition] = useState(sbKnobPosition);

    useEffect(() => {
        // SCENARIO A: user selects a radio button to change knob position
        if (knobPreset !== prevPreset) {
            setCurrentAngle(PRESET_MAP[knobPreset]);
            setPrevPreset(knobPreset);
        }
        // SCENARIO B: user moves the range slider to change knob position
        else if (sbKnobPosition !== prevPosition) {
            setCurrentAngle(sbKnobPosition);
            setPrevPosition(sbKnobPosition);
        }
    }, [knobPreset, sbKnobPosition, prevPreset, prevPosition]);

    return (
        <CircularSlider
            key={currentAngle} // Keep the SVG math synced
            {...rest}
            knobPosition={currentAngle}
            onChange={onChange}
        />
    );
};
