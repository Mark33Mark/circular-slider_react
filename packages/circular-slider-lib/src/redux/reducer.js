import {
    calculateSliderPosition,
    generateRange,
    getKnobOffsetAmount,
    getRadiansFromValue,
    getRadiansFromDataIndex,
} from '../utilities';

export const initialState = props => {
    const dataArray = props.data && props.data.length > 0 ? [...props.data] : [...generateRange(props.min, props.max)];

    const width = props.width;
    const trackSize = props.trackSize;
    const progressSize = props.progressSize;

    const effectiveStroke = Math.max(trackSize, progressSize);
    const initialRadius = (width - effectiveStroke) / 2;

    const mockState = {
        data: dataArray,
        knobOffset: getKnobOffsetAmount(props.knobPosition),
    };

    const startingRadians =
        props.value !== undefined && props.value !== null
            ? getRadiansFromValue(props.value, mockState, props)
            : getRadiansFromDataIndex(props.dataIndex, mockState, props);

    const pos = calculateSliderPosition({
        radians: startingRadians,
        state: { radius: initialRadius, data: dataArray },
        props,
    });

    const hasArc = props.hasArc ?? (props.arcStart !== undefined && props.arcEnd !== undefined);

    return {
        dashFullArray: pos.dashFullArray,
        dashFullOffset: pos.dashFullOffset,
        data: dataArray,
        hasArc,
        isDragging: false,
        knob: pos.knob,
        knobOffset: mockState.knobOffset,
        knobSize: props.knobSize,
        mounted: true,
        progressSize,
        radians: pos.radians,
        radius: initialRadius,
        trackSize,
        width,
    };
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return { ...state, mounted: true, dashFullArray: action.payload };

        case 'UPDATE_DIMENSIONS':
            return {
                ...state,
                width: action.payload.width,
                radius: action.payload.radius,
                dashFullArray: action.payload.dashFullArray,
            };

        case 'SET_DRAGGING':
            return { ...state, isDragging: action.payload };

        case 'CALCULATE_POSITION': {
            const newPosition = calculateSliderPosition({
                radians: action.payload.radians,
                fromDrag: action.payload.fromDrag,
                state,
                props: action.payload.props,
            });
            return { ...state, ...newPosition };
        }

        /* v8 ignore next 2 */
        default:
            return state;
    }
};
