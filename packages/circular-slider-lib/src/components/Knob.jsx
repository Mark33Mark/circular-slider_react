import { defaults } from '../utilities';

export const Knob = ({
    children,
    isDragging,
    knobAnimated = defaults.knobAnimated,
    knobColor  = defaults.knobColor,
    knobDraggable = defaults.knobDraggable,
    knobHide = defaults.knobHide,
    knobHideRing = defaults.knobHideRing,
    knobPosition = defaults.knobPosition,
    knobRingRadius = defaults.knobRingRadius,
    knobSize,
    onPointerDown,
}) => {
    const styles = {
        knob: {
            left: `-${knobSize / 2}px`,
            top: `-${knobSize / 2}px`,
            cursor: knobDraggable ? 'grab' : 'auto',
        },
        knobHandle: {
            filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))',
        },
        dragging: {
            cursor: 'grabbing',
        },
        pause: {
            animationPlayState: 'paused',
        },
        animation: {
            animationName: 'pulse',
        },
        hide: {
            opacity: 0,
        },
    };
    
    return (
        <div
            className="W8D-CircularSliderKnobContainer"
            style={{
                transform: `translate(${knobPosition.x}px, ${knobPosition.y}px)`,
                ...styles.knob,
                ...(isDragging ? styles.dragging : {}),
                ...(knobHide ? styles.hide : {}),
            }}
            onPointerDown={onPointerDown}
        >
            <svg
                className="W8D-CircularSliderKnobRing"
                width={knobSize}
                height={knobSize}
                viewBox={`0 0 ${knobSize} ${knobSize}`}
            >
                {!knobHideRing && (
                    <circle
                        style={knobAnimated ? { ...styles.animation, ...(isDragging ? styles.pause : {}) } : {}}
                        fill={knobColor}
                        fillOpacity={0.35}
                        cx={knobSize / 2}
                        cy={knobSize / 2}
                        r={knobSize * knobRingRadius}
                    />
                )}
                <circle fill={knobColor} cx={knobSize / 2} cy={knobSize / 2} r={(knobSize * 2) / 3 / 2} style = { { ...styles.knobHandle } } />
                {children ?? (
                    <svg width={knobSize} height={knobSize} viewBox="0 0 36 36">
                        <rect fill="#FFFFFF" x="14" y="14" width="8" height="1" />
                        <rect fill="#FFFFFF" x="14" y="17" width="8" height="1" />
                        <rect fill="#FFFFFF" x="14" y="20" width="8" height="1" />
                    </svg>
                )}
            </svg>
        </div>
    );
};
