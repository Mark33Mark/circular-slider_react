import { Labels } from '../../src/components';

export default {
    title: 'Slider/Labels',
    component: Labels,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            autodocs: true,
        },
    },
    argTypes: {
        labelBottom: {
            control: { type: 'boolean' },
        },
        labelHideValue: {
            control: { type: 'boolean' },
        },
        label: {
            control: { type: 'text', maxLength: 20 },
            defaultValue: 'ANGLE',
            table: { category: '🔤 chars' },
        },
        value: {
            control: { type: 'text', maxLength: 20 },
            defaultValue: '-value-',
            table: { category: '🔤 chars' },
        },
        labelPrependValue: {
            control: { type: 'text', maxLength: 20 },
            defaultValue: '',
            table: { category: '🔤 chars' },
        },
        labelAppendValue: {
            control: { type: 'text', maxLength: 20 },
            defaultValue: '',
            table: { category: '🔤 chars' },
        },
        labelColor: {
            control: { type: 'color' },
            table: { category: '🎨 colours' },
        },
        labelFontSize: {
            control: { type: 'range', min: 0.5, max: 20, step: 0.5 },
            defaultValue: 1,
            table: { category: '🏗️ size' },
        },
        labelVerticalOffset: {
            control: { type: 'range', min: 0, max: 20, step: 0.5 },
            defaultValue: 1.5,
            table: { category: '🏗️ size' },
        },
        labelValueFontSize: {
            control: { type: 'range', min: 0.5, max: 20, step: 0.5 },
            defaultValue: 3,
            table: { category: '🏗️ size' },
        },
    },
};

export const Default = {
    args: {
        labelBottom: false,
        labelHideValue: false,
        labelFontSize: 1,
        labelValueFontSize: 3,
        labelVerticalOffset: 1.5,
        label: 'ANGLE',
        value: '-value-',
        labelPrependValue: '',
        labelAppendValue: '',
        labelColor: '#000',
    },
    render: args => {
        const mappedArgs = {
            ...args,
            labelFontSize: `${args.labelFontSize}rem`,
            labelVerticalOffset: `${args.labelVerticalOffset}rem`,
            labelValueFontSize: `${args.labelValueFontSize}rem`,
        };
        return (
            <div style={{ width: '280px', height: '280px' }}>
                <Labels {...mappedArgs} />
            </div>
        );
    },
};

export const Prepend = {
    args: {
        labelBottom: false,
        labelHideValue: false,
        labelFontSize: 1,
        labelValueFontSize: 3,
        labelVerticalOffset: 1.5,
        label: 'ANGLE',
        value: '-value-',
        labelPrependValue: 'prepend',
        labelAppendValue: '',
        labelColor: '#000',
    },
    render: args => {
        const mappedArgs = {
            ...args,
            labelFontSize: `${args.labelFontSize}rem`,
            labelVerticalOffset: `${args.labelVerticalOffset}rem`,
            labelValueFontSize: `${args.labelValueFontSize}rem`,
        };
        return (
            <div style={{ width: '280px', height: '280px' }}>
                <Labels {...mappedArgs} />
            </div>
        );
    },
};

export const Append = {
    args: {
        labelBottom: false,
        labelHideValue: false,
        labelFontSize: 1,
        labelValueFontSize: 3,
        labelVerticalOffset: 1.5,
        label: 'ANGLE',
        value: '-value-',
        labelPrependValue: '',
        labelAppendValue: 'append',
        labelColor: '#000',
    },
    render: args => {
        const mappedArgs = {
            ...args,
            labelFontSize: `${args.labelFontSize}rem`,
            labelVerticalOffset: `${args.labelVerticalOffset}rem`,
            labelValueFontSize: `${args.labelValueFontSize}rem`,
        };
        return (
            <div style={{ width: '280px', height: '280px' }}>
                <Labels {...mappedArgs} />
            </div>
        );
    },
};

export const AppendAndPrepend = {
    args: {
        labelBottom: false,
        labelHideValue: false,
        labelFontSize: 1,
        labelValueFontSize: 3,
        labelVerticalOffset: 1.5,
        label: 'ANGLE',
        value: '-value-',
        labelPrependValue: 'prepend',
        labelAppendValue: 'append',
        labelColor: '#000',
    },
    globals: {
        outline: true,
    },
    parameters: {
        docs: {
            story: {
                inline: false, // Forces an iframe rendering for this specific story
                height: '350px',
            },
        },
    },
    render: args => {
        const mappedArgs = {
            ...args,
            labelFontSize: `${args.labelFontSize}rem`,
            labelVerticalOffset: `${args.labelVerticalOffset}rem`,
            labelValueFontSize: `${args.labelValueFontSize}rem`,
        };
        return (
            <div style={{ width: '280px', height: '280px' }}>
                <Labels {...mappedArgs} />
            </div>
        );
    },
};
