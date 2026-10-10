import { useRef } from 'react';
import { defaults } from '../utilities';

export const Svg = ({
        arcEnd,
        arcStart,
        direction,
        isDragging,
        label,
        onPointerDown,
        progressColorFrom,
        progressColorTo,
        progressGradient,
        progressLineCap,
        progressSize,
        radiansOffset,
        strokeDasharray,
        strokeDashoffset,
        svgFullPath,
        trackColor,
        trackDraggable,
        trackGradient,
        trackSize,
        width,
    }) => {

    // assess the thickest stroke for calculating a safe radius
    const maxStrokeSize = Math.max(trackSize, progressSize);

    // use the thickest stroke to ensure nothing bleeds outside the bounding box
    const halfMaxStroke = maxStrokeSize / 2;
    const radius = width / 2 - halfMaxStroke;

    // calculate the arc path if arcStart and arcEnd are defined
    const isArcMode = typeof arcStart === 'number' && typeof arcEnd === 'number';
    const arcSpan = isArcMode ? (arcEnd - arcStart + 360) % 360 : 360;
    let trackPath = '';
    let progressPath = '';

    if (isArcMode) {
        const startAngle = ((arcStart - 90) * Math.PI) / 180; // convert to radians, offset by -90° to start at top
        const endAngle = ((arcEnd - 90) * Math.PI) / 180;

        const startX = width / 2 + radius * Math.cos(startAngle);
        const startY = width / 2 + radius * Math.sin(startAngle);
        const endX = width / 2 + radius * Math.cos(endAngle);
        const endY = width / 2 + radius * Math.sin(endAngle);

        const largeArc = arcSpan > 180 ? 1 : 0;

        trackPath = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}`;
        progressPath = trackPath;
    } else {
        // use full circle path for non-arc mode
        trackPath = `
            M ${width / 2}, ${width / 2}
            m 0, -${radius}
            a ${radius},${radius} 0 0,1 0,${radius * 2}
            a -${radius},-${radius} 0 0,1 0,-${radius * 2}
        `;
        progressPath = trackPath;
    }

    const styles = {
        svg: {
            userSelect: isDragging ? 'none' : 'auto',
        },
        path: {
            transform: isArcMode
                ? `${direction === 'anti-clockwise' ? 'scale(-1, 1)' : 'scale(1, 1)'}`
                : `rotate(${radiansOffset}rad) ${direction === 'anti-clockwise' ? 'scale(-1, 1)' : 'scale(1, 1)'}`,
        },
    };

    const validatedLineCap =
        progressLineCap === 'round' || progressLineCap === 'butt' || progressLineCap === 'square'
            ? progressLineCap
            : 'round';

    const handleClick = event => {
        if (!trackDraggable) return;

        const bounds = event.currentTarget.getBoundingClientRect();

        if (!bounds) return;

        // safely check if touches exists AND has at least one item
        const clientX = event.clientX;
        const clientY = event.clientY;

        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);
        const threshold = bounds.width / (isDragging ? 4 : 2) - maxStrokeSize;

        if (distance < threshold) return;
        onPointerDown(event);
    };

    const gradientIdRef = useRef(`radial-${label}-${Math.random().toString(36).slice(2, 9)}`);
    const gradientId = gradientIdRef.current;

    // calculate a single, shared cap offset based on the thickest stroke.
    // Ensures that if the track is thicker, the progress bar's gradient
    // buffer is extended to match, and vice versa.
    const effectiveStrokeSize = Math.max(!trackSize, progressSize);

    // adding a minor adjustment here as there is a style rendering issue when
    // line cap is either 'round' or 'square' and anti-clockwise is selected with a gradient,
    // the progressColorFrom renders at the end of the arc where it should only be progressColorTo
    const capOffsetRadius =
        validatedLineCap === 'butt'
            ? 0
            : validatedLineCap !== 'butt' && direction === 'anti-clockwise' && isArcMode
              ? effectiveStrokeSize / 2 - trackSize
              : effectiveStrokeSize / 2;
    const circumference = 2 * Math.PI * radius;
    // Fallback to 0 if circumference is 0 or NaN
    const sharedCapOffsetDegrees = circumference > 0 ? (capOffsetRadius / circumference) * 360 : 0;

    // assign unique IDs for the masks
    const trackMaskId = `track-mask-${gradientId}`;
    const progressMaskId = `progress-mask-${gradientId}`;

    // helper function
    const generateConicGradient = (colors, capOffsetDeg, direction) => {
        const startAngle = isArcMode ? arcStart : 0;
        const isClockwise = direction === 'clockwise';

        // flip the color order if anti-clockwise
        const colorsOrder = isClockwise
            ? colors
            : colors.map((item, index) => ({
                  ...item, // keep offset setting (and any other properties if added) as is
                  stopColor: colors[colors.length - 1 - index].stopColor,
              }));

        // The starting point of our gradient
        const fromAngle = isClockwise ? startAngle - capOffsetDeg : startAngle + capOffsetDeg;

        const firstColor = typeof colorsOrder[0] === 'string' ? colorsOrder[0] : colorsOrder[0].stopColor;

        const stops = colorsOrder.map((color, index) => {
            const stopProps = typeof color === 'string' ? { stopColor: color } : color;
            let { offset, stopColor } = stopProps;

            if (!offset) {
                offset =
                    index === 0
                        ? '0%'
                        : index === colorsOrder.length - 1
                          ? '100%'
                          : `${(100 / (colorsOrder.length - 1)) * index}%`;
            }

            const percentValue = parseFloat(offset);
            // Map percentage to the arc span
            const degreeOffset = (percentValue / 100) * arcSpan;

            // stops must be positive relative to the 'fromAngle'.
            return `${stopColor} ${degreeOffset + capOffsetDeg}deg`;
        });

        return `conic-gradient(from ${fromAngle}deg, ${firstColor} 0deg, ${firstColor} ${capOffsetDeg}deg, ${stops.join(', ')})`;
    };

    // determine if gradients configured
    const hasTrackGradient = trackGradient && trackGradient.length > 0;
    const hasProgressGradient = progressGradient && progressGradient.length > 0;

    // generate the CSS background strings
    const trackBackground = hasTrackGradient
        ? generateConicGradient(trackGradient, sharedCapOffsetDegrees, direction)
        : trackColor;

    // handle the default backward compatibility if no gradient is passed
    const finalProgressGradient = hasProgressGradient
        ? progressGradient
        : [
              { offset: '0%', stopColor: progressColorFrom },
              { offset: '100%', stopColor: progressColorTo },
          ];

    const progressBackground = generateConicGradient(finalProgressGradient, sharedCapOffsetDegrees, direction);
    const fallbackCircumference = 2 * Math.PI * radius;

    // safety for edge cases where progressSize is set with the selected value
    if (progressSize < 1) progressSize = 8;

    if (progressLineCap !== 'butt') strokeDashoffset = strokeDashoffset + 0.2 * trackSize;

    return (
        <svg
            width={`${width}px`}
            height={`${width}px`}
            viewBox={`0 0 ${width} ${width}`}
            overflow="visible"
            style={styles.svg}
            className="W8D-SliderTracks"
            onPointerDown={handleClick}
            data-testid="svg-element"
        >
            <defs>
                {/* mask: track */}
                {hasTrackGradient && (
                    <mask id={trackMaskId}>
                        {isArcMode ? (
                            <path
                                strokeWidth={trackSize}
                                className="W8D-SliderTracksMask_arc"
                                strokeLinecap={validatedLineCap}
                                d={trackPath}
                            />
                        ) : (
                            <circle
                                strokeWidth={trackSize}
                                className="W8D-SliderTracksMask_not-arc"
                                cx={width / 2}
                                cy={width / 2}
                                r={radius}
                            />
                        )}
                    </mask>
                )}

                {/* mask: progress bar */}
                <mask id={progressMaskId}>
                    <path
                        ref={svgFullPath}
                        style={styles.path}
                        data-testid="svg-progress-mask-path"
                        className="W8D-SliderTracksMask_progress-track-path"
                        strokeDasharray={
                            strokeDasharray !== undefined && strokeDasharray !== 0
                                ? strokeDasharray
                                : fallbackCircumference
                        }
                        strokeDashoffset={
                            strokeDashoffset !== undefined && strokeDashoffset !== 0
                                ? strokeDashoffset
                                : fallbackCircumference
                        }
                        strokeWidth={progressSize}
                        strokeLinecap={validatedLineCap}
                        d={progressPath}
                    />
                </mask>
            </defs>

            {/* TRACK BAR RENDER */}
            {hasTrackGradient ? (
                // if track uses a gradient, use the foreignObject with mask for a circular gradient
                <foreignObject x="0" y="0" width={width} height={width} mask={`url(#${trackMaskId})`}>
                    <div
                        className="W8D-SliderTracksForeignObject_main-track"
                        style={{
                            background: trackBackground,
                            transform: !isArcMode ? `rotate(${radiansOffset}rad)` : 'none',
                        }}
                    />
                </foreignObject>
            ) : // if track is a solid color, render standard SVG shapes for better performance
            isArcMode ? (
                <path
                    className="W8D-SliderTracksMainTrack_arc"
                    strokeWidth={trackSize}
                    stroke={trackColor}
                    strokeLinecap={validatedLineCap}
                    d={trackPath}
                />
            ) : (
                <circle
                    className="W8D-SliderTracksMainTrack_no-arc"
                    strokeWidth={trackSize}
                    stroke={trackColor}
                    cx={width / 2}
                    cy={width / 2}
                    r={radius}
                />
            )}

            {/* PROGRESS BAR RENDER */}
            <foreignObject x="0" y="0" width={width} height={width} mask={`url(#${progressMaskId})`}>
                <div
                    className="W8D-SliderTracksForeignObject_progress-track"
                    data-testid="svg-progress-foreign-object"
                    style={{
                        background: progressBackground,
                        transform: !isArcMode ? `rotate(${radiansOffset}rad)` : 'none',
                    }}
                />
            </foreignObject>
        </svg>
    );
};
