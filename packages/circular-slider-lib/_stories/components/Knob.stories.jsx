import { Knob } from '../../src/components';
import { InteractiveKnobWrapper } from './Wrappers';

export default {
    title: 'Slider/Knob',
    component: Knob,
    parameters: {
        layout: 'centered',
        sort: 'alpha',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            table: { disable: true },
        },
        knobPosition: {
            table: { disable: true },
        },
        knobAnimated: {
            control: { type: 'boolean' },
        },
        knobDraggable: {
            control: { type: 'boolean' },
        },
        knobHide: {
            control: { type: 'boolean' },
        },
        knobHideRing: {
            control: { type: 'boolean' },
        },
        knobColor: {
            control: { type: 'color' },
            table: { category: '🎨 colours' },
        },
        knobSize: {
            control: { type: 'range', min: 1, max: 112, step: 0.5 },
            defaultValue: 36,
            table: { category: '🏗️ size' },
        },
        childSize: {
            control: { type: 'range', min: 1, max: 112, step: 0.5 },
            defaultValue: 36,
            table: { category: '🏗️ size' },
        },
        knobRingRadius: {
            control: { type: 'range', min: 0.05, max: 0.6, step: 0.01 },
            defaultValue: 0.5,
            table: { category: '🏗️ size' },
        },
    },
    render: args => <InteractiveKnobWrapper {...args} />,
};

export const Default = {
    args: {
        knobAnimated: true,
        knobColor: '#4e63ea',
        knobDraggable: true,
        knobHide: false,
        knobHideRing: false,
        knobPosition: { x: 0, y: 100 }, // starting position (top: 100,0; right: 200, 100, bottom: 100, 200, left: 0, 100 )
        knobRingRadius: 0.5,
        knobSize: 36,
        trackSize: 10, // required by calculateSliderPosition
        progressSize: 10, // required by calculateSliderPosition
    },
};

export const CustomHandleChild = {
    args: {
        childSize: 30,
        knobAnimated: true,
        knobColor: '#000',
        knobHide: false,
        knobHideRing: false,
        knobDraggable: true,
        knobPosition: { x: 0, y: 100 },
        knobRingRadius: 0.5,
        knobSize: 48,
    },

    // override the default render just for this story
    render: args => {
        const { knobSize, childSize } = args;
        const offset = (knobSize - childSize) / 2;
        const customIcon = (
            <svg
                width={`${childSize}px`}
                height={`${childSize}px`}
                x={`${offset}px`}
                y={`${offset}px`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        );

        return <InteractiveKnobWrapper {...args}>{customIcon}</InteractiveKnobWrapper>;
    },
};

export const knobPositioning = {
    args: {
        knobAnimated: false,
        knobColor: '#ff0000',
        knobDraggable: true,
        knobPosition: { x: 0, y: 100 },
        knobSize: 52,
    },
};

export const NonDraggable = {
    args: {
        knobColor: '#888',
        knobAnimated: false,
        knobHide: false,
        knobHideRing: true,
        knobDraggable: false,
        knobPosition: { x: 0, y: 100 },
        knobSize: 36,
    },
};
