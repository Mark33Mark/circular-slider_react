import { getRadians, getKnobOffsetAmount, normalizeDegrees } from './sliderUtilities';
import { defaults } from './defaults';

export const calculateSliderPosition = ({ radians, state, props }) => {
    const {
        arcStart,
        arcEnd,
        direction = props.direction ?? defaults.direction,
        knobPosition = props.knobPosition ?? defaults.knobPosition,
        trackSize = props.trackSize ?? defaults.trackSize,
        progressSize = props.progressSize ?? defaults.progressSize,
    } = props;

    const hasArc = typeof arcStart === 'number' && typeof arcEnd === 'number';

    const { radius: stateRadius, data: stateData = [] } = state;
    const width = props.width ?? state.width ?? defaults.width;
    const spreadDegrees = 360;

    // stroke size
    const effectiveStroke = Math.max(trackSize, progressSize);

    // exact radius calculated from width e.g ( (140 - 16) / 2 = 62)
    const radius = (width - effectiveStroke) / 2;

    // circumference caclculated for the specific render
    const currentDashFullArray = 2 * Math.PI * radius;
    const offsetRadians = radians + getKnobOffsetAmount(knobPosition);

    // calculate physical degrees without mirroring
    let physicalDegrees =
        ((offsetRadians >= 0 ? offsetRadians : 2 * Math.PI + offsetRadians) * spreadDegrees) / (2 * Math.PI);

    // constrain degrees to exactly 0 - 359.999
    // This neutralizes the 360-degree jump when atan2 crosses the left boundary
    physicalDegrees = normalizeDegrees(physicalDegrees);

    let constrainedDegrees = physicalDegrees;

    // constrain the physical degrees to the arc boundaries
    if (hasArc) {
        const normalizedArcStart = (arcStart + 360) % 360;
        const normalizedArcEnd = (arcEnd + 360) % 360;
        const arcCrossesBoundary = normalizedArcEnd < normalizedArcStart;

        if (!arcCrossesBoundary) {
            // standard arc (e.g., 90 to 270)
            if (physicalDegrees < normalizedArcStart) constrainedDegrees = normalizedArcStart;
        } else {
            // arc crosses the 0/360 boundary (e.g., 270 to 90)
            // The mouse is in the dead zone if it's greater than End but less than Start
            if (physicalDegrees > normalizedArcEnd && physicalDegrees < normalizedArcStart) {
                // shortest path on a 360-degree circle
                const diffStart = Math.abs(physicalDegrees - normalizedArcStart);
                const distToStart = Math.min(diffStart, 360 - diffStart);

                const diffEnd = Math.abs(physicalDegrees - normalizedArcEnd);
                const distToEnd = Math.min(diffEnd, 360 - diffEnd);

                // clamp to whichever edge is closer
                constrainedDegrees = distToStart <= distToEnd ? normalizedArcStart : normalizedArcEnd;
            }
        }
    }

    // convert constrained physical degrees back to radians for drawing the knob
    const finalRadians = getRadians(constrainedDegrees) - getKnobOffsetAmount(knobPosition);

    const knobXY = {
        x: radius * Math.cos(finalRadians) + stateRadius,
        y: radius * Math.sin(finalRadians) + stateRadius,
    };

    // calculate Logical Progress
    const dataArrayLength = stateData.length;
    let dashOffsetValue;
    let dataPointIndex;

    if (hasArc) {
        const arcSpan = (arcEnd - arcStart + 360) % 360;
        const normArcStart = (arcStart + 360) % 360;
        const normArcEnd = (arcEnd + 360) % 360;
        const arcCrosses = normArcEnd < normArcStart;

        let degreesFromStart;

        if (arcCrosses) {
            degreesFromStart =
                constrainedDegrees >= normArcStart
                    ? constrainedDegrees - normArcStart
                    : 360 - normArcStart + constrainedDegrees;
        } else {
            degreesFromStart = constrainedDegrees - normArcStart;
        }

        let arcProgress = Math.max(0, Math.min(1, degreesFromStart / arcSpan));

        // Inversion: If anti-clockwise, flip the logical progress for data mapping
        if (direction === 'anti-clockwise') {
            arcProgress = 1 - arcProgress;
        }

        dataPointIndex = Math.round(arcProgress * (dataArrayLength - 1));

        // Calculate the actual physical degrees to draw based on the arcSpan
        const physicalDegreesToDraw = arcProgress * arcSpan;

        // Convert physicalDegreesToDraw to a percentage of the full 360 circle
        const physicalProgress = physicalDegreesToDraw / spreadDegrees;

        dashOffsetValue = currentDashFullArray - physicalProgress * currentDashFullArray;
    } else {
        // handle full circle logical progress
        let circleProgress = constrainedDegrees / spreadDegrees;

        if (direction === 'anti-clockwise') {
            circleProgress = 1 - circleProgress;
        }

        dataPointIndex = Math.round(circleProgress * (dataArrayLength - 1));
        dashOffsetValue = currentDashFullArray - circleProgress * currentDashFullArray;
    }

    const safeIndex = Math.min(Math.max(0, dataPointIndex), Math.max(0, dataArrayLength - 1));
    const labelValue = stateData[safeIndex];
    
    return {
        dashFullOffset: dashOffsetValue,
        dashFullArray: currentDashFullArray,
        label: labelValue,
        knob: knobXY,
        radians: finalRadians,
    };
};

// convert incoming external dataIndex prop change into internal radians

export const getRadiansFromDataIndex = (dataIndex, state, props) => {
    const { direction = 'clockwise', arcStart, arcEnd } = props;
    const { data = [], knobOffset } = state;

    // safely clamp the index between 0.01 and the max array length
    // min of 0.01 needed to force the value to show the first dataIndex, as 0 is also 360, 
    // the last dataIndex value is rendered when min is 0.
    const maxIndex = Math.max(data.length - 1, 1);
    const safeIndex =
        Math.min(Math.max(0, dataIndex), maxIndex) === 0 ? 0.01 : Math.min(Math.max(0, dataIndex), maxIndex);

    // Calculate progress as a percentage (0.0 to 1.0)
    const progress = safeIndex / maxIndex;
    let targetDegrees;
    const hasArc = arcStart !== undefined && arcEnd !== undefined;

    if (hasArc) {
        // map the progress onto the arc instead of a full circle
        const arcSpan = (arcEnd - arcStart + 360) % 360;
        const normArcStart = (arcStart + 360) % 360;
        targetDegrees = (normArcStart + progress * arcSpan) % 360;
    } else {
        targetDegrees = progress * 360;
    }

    // allowing a little adjustment, otherwise when targetDegrees = 1, the last dataIndex is skipped
    const directedDegrees = direction === 'anti-clockwise' ? 360 - targetDegrees : targetDegrees - 0.01;

    // convert to Radians and apply the knobOffset so 0 aligns with your starting point
    return (directedDegrees * Math.PI) / 180 - knobOffset;
};

// convert an incoming external value prop change into internal radians
export const getRadiansFromValue = (value, state, props) => {
    const { data = [] } = state;

    // find exactly where this value is in the data array
    // (converting both to strings ensures 5 and "5" match)
    let index = data.findIndex(d => String(d) === String(value));

    // if the value isn't in the array, default to 0
    if (index === -1) index = 0;

    // calculate the radians from the true index
    return getRadiansFromDataIndex(index, state, props);
};

export const getValueFromRadians = (radians, state, props) => {
    const { 
        data = [], 
        min = 0, 
        max = 100, 
        arcStart = 0, 
        arcEnd = 360, 
        direction = 'clockwise',
    } = props;
    const { hasArc, knobOffset = 0 } = state;

    // Calculate total angle span of the arc/circle in degrees
    const normArcStart = (arcStart + 360) % 360;
    const normArcEnd = (arcEnd + 360) % 360;
    
    let arcSpan = hasArc ? (normArcEnd - normArcStart + 360) % 360 : 360;
    if (arcSpan === 0) arcSpan = 360;

    // Convert raw radians + offset to degrees (0 - 360 range)
    let degrees = ((radians + knobOffset) * 180) / Math.PI;
    degrees = ((degrees % 360) + 360) % 360;

    // Compute relative angle from arcStart
    let relativeDegrees = (degrees - normArcStart + 360) % 360;

    if (direction === 'anti-clockwise') {
        relativeDegrees = (arcSpan - relativeDegrees + 360) % 360;
    }

    // Calculate normalized progress fraction (clamped between 0 and 1)
    let fraction = relativeDegrees / arcSpan;
    fraction = Math.max(0, Math.min(1, fraction));

    // Return value from data array OR calculated numeric min/max
    if (data.length > 0) {
        const index = Math.round(fraction * (data.length - 1));
        return data[index];
    }

    // Fallback for numeric ranges (min -> max)
    return Math.round(min + fraction * (max - min));
};