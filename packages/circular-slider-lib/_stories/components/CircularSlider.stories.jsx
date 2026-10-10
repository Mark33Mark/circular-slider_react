import { useState } from 'react';
import { fn, expect, within, waitFor, fireEvent, spyOn } from 'storybook/test';
import { CircularSlider } from '../../src/components';
import { DualControlWrapper } from './Wrappers';
import {
    constants,
    calculateSliderPosition,
    defaults,
    getRadiansFromValue,
    getValueFromRadians,
} from '../../src/utilities';

export default {
    title: 'Slider/CircularSlider',
    component: CircularSlider,

    // excludeStories: /.*Test$/, // Comment this line out for tests to render in the UI

    parameters: {
        layout: 'centered',
        sort: 'alpha', // options: 'alpha' (alphabetical) or 'none' (default execution/object order)
    },

    tags: ['autodocs'],
    argTypes: {
        limitDragRange: {
            control: { type: 'boolean' },
        },
        knobHide: {
            control: { type: 'boolean' },
        },
        trackDraggable: {
            control: { type: 'boolean' },
        },
        direction: {
            control: { type: 'radio' },
            options: ['clockwise', 'anti-clockwise'],
        },
        knobPosition: {
            control: { type: 'radio' },
            options: ['top', 'right', 'bottom', 'left'],
        },
        progressLineCap: {
            control: { type: 'radio' },
            options: ['butt', 'round', 'square'],
        },
        knobColor: {
            control: { type: 'color' },
            table: { category: '🎨 colours' },
        },
        progressColorFrom: {
            control: { type: 'color' },
            table: { category: '🎨 colours' },
        },
        progressColorTo: {
            control: { type: 'color' },
            table: { category: '🎨 colours' },
        },
        trackColor: {
            control: { type: 'color' },
            table: { category: '🎨 colours' },
        },
        progressGradient: {
            table: { category: '🎨 colours' },
        },
        trackGradient: {
            table: { category: '🎨 colours' },
        },
        arcStart: {
            control: { type: 'range', min: 180.5, max: 359, step: 0.5 },
            defaultValue: 225,
            table: { category: '🌙 feature' },
        },
        arcEnd: {
            control: { type: 'range', min: 1, max: 180, step: 0.5 },
            defaultValue: 135,
            table: { category: '🌙 feature' },
        },
        knobRingRadius: {
            control: { type: 'range', min: 0.01, max: 1, step: 0.01 },
            defaultValue: 0.5,
            table: { category: '🏗️ size' },
        },
        knobSize: {
            control: { type: 'range', min: 0.5, max: 100, step: 0.25 },
            defaultValue: 36,
            table: { category: '🏗️ size' },
        },
        min: {
            control: { type: 'range', min: -500, max: 10, step: 0.5 },
            defaultValue: 0,
            table: { category: '🏗️ size' },
        },
        max: {
            control: { type: 'range', min: 1, max: 500, step: 0.5 },
            defaultValue: 359,
            table: { category: '🏗️ size' },
        },
        progressSize: {
            control: { type: 'range', min: 1, max: 48, step: 0.5 },
            defaultValue: 16,
            table: { category: '🏗️ size' },
        },
        keypressStep: {
            control: { type: 'range', min: 1, max: 50, step: 1 },
            defaultValue: 1,
            table: { category: '🏗️ size' },
        },
        trackSize: {
            control: { type: 'range', min: 1, max: 48, step: 0.5 },
            defaultValue: 24,
            table: { category: '🏗️ size' },
        },
        width: {
            control: { type: 'range', min: 10, max: 600, step: 1 },
            defaultValue: 280,
            table: { category: '🏗️ size' },
        },
        onChange: { table: { disable: true } },
    },
};

const BaseConfig = {
    args: {
        ...defaults,
    },
    argTypes: {
        arcStart: { table: { disable: true } },
        arcEnd: { table: { disable: true } },
        isDragging: { table: { disable: true } },
        progressGradient: { table: { disable: true } },
        trackGradient: { table: { disable: true } },
        value: { table: { disable: true } },
    },
    render: args => {
        return <CircularSlider {...args} />;
    },
};

export const Default = {
    args: {
        ...BaseConfig.args,
        knobPosition: 90,
        knobPreset: 'top',
        onChange: fn(),
    },
    argTypes: {
        ...BaseConfig.argTypes,
        knobPosition: {
            control: { type: 'range', min: 0, max: 359, step: 1 },
            name: 'Knob Position (Angle)',
            table: { category: '🧭 position' },
        },
        knobPreset: {
            control: 'radio',
            options: ['top', 'right', 'bottom', 'left'],
            name: 'Knob Position (Preset)',
            table: { category: '🧭 position' },
        },
    },
    render: args => <DualControlWrapper {...args} />,
};

export const ArcSlider = {
    ...BaseConfig,
    args: {
        ...BaseConfig.args,
        knobPosition: undefined,
        arcEnd: 135,
        arcStart: 225,
        dataIndex: 10,
        direction: 'clockwise',
        knobSize: 40,
        label: 'Acceleration',
        labelAppendCss: { fontSize: '1.25rem', top: '1rem' },
        labelFontSize: '1.75rem',
        labelValueFontSize: '2.25rem',
        labelAppendValue: 'ms⁻²',
        limitDragRange: true,
        max: 80,
        min: 0,
        progressGradient: [
            { offset: '0%', stopColor: '#22c55e' },
            { offset: '45%', stopColor: '#ffd000' },
            { offset: '55%', stopColor: '#ffae00' },
            { offset: '100%', stopColor: '#dc2626' },
        ],
        progressLineCap: 'butt',
        progressSize: 12,
        trackColor: '#e5e7eb',
        trackDraggable: true,
        trackSize: 24,

        onChange: fn(),
    },
    argTypes: {
        knobPosition: { table: { disable: true } },
        progressGradient: { table: { disable: true } },
        trackGradient: { table: { disable: true } },
    },
    render: args => {
        // Initialize state with default props if available
        const [value, setValue] = useState(args.value ?? args.dataIndex ?? '');

        return (
            <>
                <CircularSlider
                    {...args}
                    onChange={val => {
                        args.onChange(val); // Preserves Storybook fn() tracking
                        setValue(val);
                    }}
                    knobColor={value >= 65 ? '#dc2626' : value >= 30 ? '#d67921ec' : '#0b9627'}
                    labelColor={value >= 65 ? '#dc2626' : value >= 30 ? '#d67921ec' : '#0b9627'}
                />
                <h2
                    style={{
                        width: '6rem',
                        height: '5.75rem',
                        margin: '3.75rem auto 2.75rem',
                        padding: '0.5rem 0',
                        fontSize: '2.5rem',
                        borderRadius: '50%',
                        boxShadow: value >= 65 ? '0px 0px 16px 8px #ffa1a1' : value >= 30 ? '0px 0px 16px 8px #ffc48dec' : '0px 0px 16px 8px #98ffad'  ,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: value >= 65 ? '#ffa1a1' : value >= 30 ? '#ffc48dec' : '#98ffad',
                    }}
                >
                    {value >= 65 ? '🫣' : value >= 30 ? '😬' : '😀'}
                </h2>
            </>
        );
    },
};

// STORY: Pointer Dragging
export const PointerDraggingTest = {
    // tags: ['!dev'],
    ...BaseConfig,
    args: {
        ...BaseConfig.args,
        trackDraggable: true,
        onChange: fn(),
    },
    play: async ({ canvasElement, args, step }) => {
        await step('Touch track path and provides drag movement', async () => {
            const canvas = within(canvasElement);

            // Target the SVG that holds the onPointerDown listener!
            const targetElement = canvas.getByTestId('svg-element');

            const rect = targetElement.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // To ensure the track is hit, subtract exactly half the stroke width.
            // Assumes default trackSize/progressSize is ~16px:
            const assumedStroke = 16;
            const dragRadius = rect.width / 2 - assumedStroke / 2;

            // This places the click on the right-middle edge exactly on the track
            const startX = centerX + dragRadius;
            const startY = centerY;

            // Move slightly along the curve
            const moveX = centerX + dragRadius * 0.866;
            const moveY = centerY + dragRadius * 0.5;

            // Fire on the correct targetElement
            fireEvent.pointerDown(targetElement, {
                pointerId: 1,
                pointerType: 'touch',
                clientX: startX,
                clientY: startY,
                pageX: startX,
                pageY: startY,
                button: 0,
                buttons: 1,
                isPrimary: true,
            });

            // Allow React time to process `handleClick` and update `isDragging` to true
            await new Promise(resolve => setTimeout(resolve, 60));

            // Fire move globally (as users can drag their mouse outside the SVG)
            fireEvent.pointerMove(window, {
                pointerId: 1,
                pointerType: 'touch',
                clientX: moveX,
                clientY: moveY,
                pageX: moveX,
                pageY: moveY,
                button: 0,
                buttons: 1,
                isPrimary: true,
            });

            fireEvent.pointerUp(window, { pointerId: 1, pointerType: 'touch' });

            await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
        });
    },
};

// STORY: Move Arc Slider By Touch
export const ArcSliderMovesWithTouchTest = {
    ...BaseConfig,
    args: {
        ...BaseConfig.args,
        arcEnd: 135,
        arcStart: 225,
        dataIndex: 10,
        direction: 'clockwise',
        knobSize: 60,
        max: 250,
        min: 0,
        progressLineCap: 'butt',
        progressSize: 24,
        trackColor: '#e5e7eb',
        trackDraggable: true,
        trackSize: 24,
        width: 250,
        onChange: fn(),
    },
    render: args => {
        return <CircularSlider {...args} />;
    },
    play: async ({ canvasElement, args, step }) => {
        await step('Touch track path and provides drag movement to progress slider', async () => {
            const canvas = within(canvasElement);

            // Target the ROOT SVG container so we measure the full 280x280 circle!
            const svgElement = canvas.getByTestId('svg-element');

            // Note: If you need to click the knob specifically, you still measure the svgElement
            // to find the circle's center, but pass the foreign-object to fireEvent!
            const targetElement = canvas.getByTestId('svg-progress-foreign-object');

            const rect = svgElement.getBoundingClientRect(); // Measure the whole circle
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Exact math to land perfectly on the track, bypassing the dead-zone
            const dragRadius = rect.width / 2 - args.trackSize / 2;

            // 3 o'clock starting position
            const startX = centerX + dragRadius;
            const startY = centerY;

            // 4 o'clock move position
            const moveX = centerX + dragRadius * 0.866;
            const moveY = centerY + dragRadius * 0.5;

            // Click the target element
            fireEvent.pointerDown(targetElement, {
                pointerId: 1,
                pointerType: 'touch',
                clientX: startX,
                clientY: startY,
                pageX: startX,
                pageY: startY,
                button: 0,
                buttons: 1,
                isPrimary: true,
            });

            // Give the real browser enough time to attach window event listeners!
            await new Promise(resolve => setTimeout(resolve, 50));

            fireEvent.pointerMove(window, {
                pointerId: 1,
                pointerType: 'touch',
                clientX: moveX,
                clientY: moveY,
                pageX: moveX,
                pageY: moveY,
                button: 0,
                buttons: 1,
                isPrimary: true,
            });

            fireEvent.pointerUp(window, {
                pointerId: 1,
                pointerType: 'touch',
            });

            await expect(args.onChange).toHaveBeenCalledTimes(1);
        });
    },
};

// STORY: Keyboard Navigation (Valid)
export const KeyboardNavigationTest = {
    // tags: ['!dev'],
    ...BaseConfig,
    args: {
        ...BaseConfig.args,
        onChange: fn(),
        knobPosition: 30,
    },

    play: async ({ canvasElement, args }) => {
        const getSlider = () => within(canvasElement).getByTestId('circular-slider');

        // 1. Initial Focus
        getSlider().focus();
        expect(document.activeElement).toBe(getSlider());

        // --- First Keypress ---
        fireEvent.keyDown(getSlider(), {
            key: 'ArrowRight',
            code: 'ArrowRight',
            keyCode: 39,
            charCode: 39,
        });
        await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));

        // Wait > 50ms to pass the component's throttle debouncer!
        await new Promise(resolve => setTimeout(resolve, 60));

        // --- Second Keypress ---
        getSlider().focus();
        fireEvent.keyDown(getSlider(), {
            key: 'ArrowRight',
            code: 'ArrowRight',
            keyCode: 39,
            charCode: 39,
        });
        await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(2));

        // Wait another 60ms for the throttle
        await new Promise(resolve => setTimeout(resolve, 60));

        // --- Third Keypress (Home) ---
        getSlider().focus();
        fireEvent.keyDown(getSlider(), {
            key: 'Home',
            code: 'Home',
            keyCode: 36,
            charCode: 36,
        });
        await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(3));
    },
};

// STORY: Keyboard Early Returns / Ignored Actions
export const KeyboardEarlyReturnsTest = {
    ...BaseConfig,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const targetElement = canvas.getByTestId('svg-progress-foreign-object');

        // Step A: Unfocused (No focus call made)
        fireEvent.keyDown(targetElement, { key: 'ArrowRight', code: 'ArrowRight' });

        // Step B: Focused, but invalid key
        targetElement.focus();
        fireEvent.keyDown(targetElement, { key: 'a', code: 'KeyA' });
    },
};

// STORY: Invalid Data Handling
export const KeyboardInvalidDataTest = {
    ...BaseConfig,
    args: {
        ...BaseConfig.args,
        data: ['apple', 'banana', 'orange'], // Inject custom data array
        knobPosition: 'grape', // Inject a bad value
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const targetElement = canvas.getByTestId('svg-progress-foreign-object');

        targetElement.focus();
        fireEvent.keyDown(targetElement, { key: 'ArrowRight', code: 'ArrowRight' });
    },
};

// STORY: Invalid Keyboard Key
export const KeyboardInvalidKeyTest = {
    ...BaseConfig,
    args: {
        ...BaseConfig.args,
        onChange: fn(),
        knobPosition: 30,
    },
    play: async ({ canvasElement }) => {
        const getSlider = () => within(canvasElement).getByTestId('circular-slider');

        // Focus the slider so it passes the activeElement check
        getSlider().focus();

        // Fire an invalid key ('a'). This will pass the throttle (it's the 1st event),
        // pass the activeElement check, and hit: if (!validKeys.includes(event.key)) return;
        fireEvent.keyDown(getSlider(), { key: 'a', code: 'KeyA' });
    },
};

// STORY: Invalid Data
export const KeyboardInvalidDataIndexTest = {
    ...BaseConfig,
    args: {
        ...BaseConfig.args,
        onChange: fn(),
        data: ['apple', 'banana', 'orange'],
        knobPosition: 'grape', // Forces state.label to something not in data array -> indexOf returns -1
    },
    play: async ({ canvasElement }) => {
        const getSlider = () => within(canvasElement).getByTestId('circular-slider');

        getSlider().focus();

        // Fire a valid key. It passes throttle, passes activeElement,
        // but hits: if (currentIndex === -1) return; and safely aborts!
        fireEvent.keyDown(getSlider(), { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39 });
    },
};

// STORY: Unlimited Keyboard Navigation
export const KeyboardUnlimitedNavigationTest = {
    ...BaseConfig,
    args: {
        ...BaseConfig.args,
        onChange: fn(),
        limitDragRange: false,
        dataIndex: 359,
    },
    render: args => <CircularSlider {...args} />,
    play: async ({ canvasElement, args }) => {
        const getSlider = () => within(canvasElement).getByTestId('circular-slider');

        getSlider().focus();
        expect(document.activeElement).toBe(getSlider());

        // Pressing ArrowRight while at the max value with limitDragRange=false
        // will trigger the wrap-around logic to 0, hitting your 'else' block!
        fireEvent.keyDown(getSlider(), {
            key: 'ArrowRight',
            code: 'ArrowRight',
            keyCode: 39,
            charCode: 39,
        });

        await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
        await expect(within(canvasElement).getByText('0')).toBeInTheDocument();
    },
};

// STORY: Limited Keyboard Navigation
export const KeyboardLimitedNavigationTest = {
    ...BaseConfig,
    args: {
        ...BaseConfig.args,
        onChange: fn(),
        limitDragRange: true,
        dataIndex: 359,
    },
    render: args => <CircularSlider {...args} />,
    play: async ({ canvasElement, args }) => {
        const getSlider = () => within(canvasElement).getByTestId('circular-slider');

        getSlider().focus();
        expect(document.activeElement).toBe(getSlider());

        // Pressing ArrowRight while at the max value with limitDragRange=false
        // will trigger the wrap-around logic to 0, hitting your 'else' block!
        fireEvent.keyDown(getSlider(), {
            key: 'ArrowRight',
            code: 'ArrowRight',
            keyCode: 39,
            charCode: 39,
        });

        await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
        await expect(within(canvasElement).getByText('359')).toBeInTheDocument();
    },
};

// STORY: Arcs boundary tests (arcCrossesBoundary)
export const ArcConstraintMathBranchesTest = {
    ...BaseConfig,
    play: async () => {
        const mockState = { data: [0, 50, 100], label: 0 };

        // --------------------------------------------------
        // 1. Standard Arc: physicalDegrees outside & inside bounds
        // --------------------------------------------------
        const standardProps = {
            hasArc: true,
            arcStart: 90,
            arcEnd: 270,
            limitDragRange: false,
        };

        // 1a. Too small (< 90°) -> triggers: physicalDegrees < normalizedArcStart
        calculateSliderPosition({
            radians: 0,
            fromDrag: true,
            state: mockState,
            props: standardProps,
        });

        // 1b. Too large (> 270°) -> triggers: else if (physicalDegrees > normalizedArcEnd)
        calculateSliderPosition({
            radians: 5.236, // ~300 degrees
            fromDrag: true,
            state: mockState,
            props: standardProps,
        });

        // 1c. Inside the arc (between 90° and 270°) -> hits the fall-through (both ifs false)
        calculateSliderPosition({
            radians: 3.14159, // ~180 degrees (safely inside the arc)
            fromDrag: true,
            state: mockState,
            props: standardProps,
        });

        // --------------------------------------------------
        // 2. Boundary-Crossing Arc: Dead Zone & Ternary Clamping
        // --------------------------------------------------
        const crossingProps = {
            hasArc: true,
            arcStart: 270,
            arcEnd: 90,
            limitDragRange: false,
        };

        // 2a. Closer to arcEnd (90°)
        calculateSliderPosition({
            radians: 1.745, // ~100 degrees
            fromDrag: true,
            state: mockState,
            props: crossingProps,
        });

        // 2b. Closer to arcStart (270°)
        calculateSliderPosition({
            radians: 4.538, // ~260 degrees
            fromDrag: true,
            state: mockState,
            props: crossingProps,
        });

        // --------------------------------------------------
        // 3. Anti-clockwise direction check
        // --------------------------------------------------
        calculateSliderPosition({
            radians: 1.57, // ~90 degrees
            fromDrag: true,
            state: {
                data: [0, 50, 100],
                label: 0,
                mounted: true,
            },
            props: {
                hasArc: true, // Keep arc enabled so arc variables exist
                arcStart: 0, // Provide valid numbers so it doesn't crash
                arcEnd: 360,
                direction: 'anti-clockwise',
            },
        });

        // --------------------------------------------------
        // 4. Fallback when value is missing from data array
        // --------------------------------------------------
        getRadiansFromValue(
            'non-existent-value', // A value guaranteed not to be in the array
            { data: [10, 20, 30] },
            {
                min: 0,
                max: 100,
                hasArc: true,
                arcStart: 0,
                arcEnd: 360,
            }
        );

        // --------------------------------------------------
        // 5. Fallback when arcSpan is 0
        // --------------------------------------------------
        getValueFromRadians(
            -0.7724896069078283,
            {
                hasArc: true, // MUST be in state object
                knobOffset: 0,
            },
            {
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // MUST be in props object
                min: 0,
                max: 100,
                arcStart: 0,
                arcEnd: 0,
            }
        );
    },
};

export const AntiClockwiseDragTest = {
    args: {
        trackDraggable: true,
        direction: 'anti-clockwise',
        knobPosition: 0,
        limitDragRange: true,
        progressSize: 16,
        trackSize: 24,
        width: 280,
        onChange: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const targetElement = canvas.getByTestId('svg-progress-foreign-object'); // or 'svg-element' if testing the wrapper

        const angleInRadians = 330 * (Math.PI / 180);

        const rect = targetElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // calculate dragRadius to hit the exact center of the SVG track line
        const dragRadius = rect.width / 2 - args.trackSize / 2; // 140 - 12 = 128

        const startX = centerX + dragRadius; // 3 o'clock (0 degrees)
        const startY = centerY;

        fireEvent.pointerDown(targetElement, {
            pointerId: 1,
            pointerType: 'touch',
            clientX: startX,
            clientY: startY,
            button: 0,
            buttons: 1,
            isPrimary: true,
        });

        await new Promise(resolve => setTimeout(resolve, 10));

        fireEvent.pointerMove(window, {
            pointerId: 1,
            pointerType: 'touch',
            clientX: centerX + dragRadius * Math.cos(angleInRadians),
            clientY: centerY + dragRadius * Math.sin(angleInRadians),
            pageX: centerX + dragRadius * Math.cos(angleInRadians),
            pageY: centerY + dragRadius * Math.sin(angleInRadians),
            button: 0,
            buttons: 1,
            isPrimary: true,
        });

        fireEvent.pointerUp(window, {
            pointerId: 1,
            pointerType: 'touch',
        });

        await expect(args.onChange).toHaveBeenCalledTimes(1);
    },
};

export const ClockwiseNegativeWrapTest = {
    args: {
        trackDraggable: true,
        direction: 'clockwise',
        knobPosition: 0,
        limitDragRange: true,
        width: 280,
        trackSize: 24,
        onChange: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const targetElement = canvas.getByTestId('svg-progress-foreign-object');

        const rect = targetElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dragRadius = rect.width / 2 - args.trackSize / 2;

        // Pointer Down at 0 degrees (3 o'clock)
        fireEvent.pointerDown(targetElement, {
            pointerId: 1,
            pointerType: 'mouse',
            button: 0,
            buttons: 1,
            isPrimary: true,
            clientX: centerX + dragRadius,
            clientY: centerY,
        });

        // Wait for state.isDragging to become true
        await new Promise(resolve => setTimeout(resolve, 10));

        // Move slightly into negative Y to trigger the wrapping math
        const tinyNegativeAngle = -0.0005;
        fireEvent.pointerMove(window, {
            pointerId: 1,
            pointerType: 'mouse',
            button: 0,
            buttons: 1,
            isPrimary: true,
            clientX: centerX + dragRadius * Math.cos(tinyNegativeAngle),
            clientY: centerY + dragRadius * Math.sin(tinyNegativeAngle),
            pageX: centerX + dragRadius * Math.cos(tinyNegativeAngle),
            pageY: centerY + dragRadius * Math.sin(tinyNegativeAngle),
        });

        fireEvent.pointerUp(window, { pointerId: 1, pointerType: 'mouse' });
    },
};

export const InteractionHandlersGuardTest = {
    args: {
        width: 280,
        trackSize: 24,
        progressSize: 16,
        trackDraggable: true,
        knobDraggable: true,
        onChange: fn(),
    },
    play: async ({ canvasElement, args }) => {
        if (typeof args.onChange?.mockClear === 'function') {
            args.onChange.mockClear();
        }

        const canvas = within(canvasElement);
        const svgElement = canvas.getByTestId('svg-element');
        const targetElement = canvas.getByTestId('svg-progress-foreign-object');

        const rect = svgElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dragRadius = rect.width / 2 - args.trackSize / 2;

        const startX = centerX + dragRadius;
        const startY = centerY;
        const moveX = centerX + dragRadius * 0.866; // 30 degrees
        const moveY = centerY + dragRadius * 0.5;

        // ------------------------------------------------------------------
        // CHECK 1: onPointerUp when NOT dragging (state.isDragging === false)
        // Hits: if (!state.isDragging) return;
        // ------------------------------------------------------------------
        fireEvent.pointerUp(window, { pointerId: 1, pointerType: 'mouse' });

        // ------------------------------------------------------------------
        // CHECK 2: onPointerMove when NOT dragging (state.isDragging === false)
        // Hits: if (!state.isDragging || ...) return;
        // ------------------------------------------------------------------
        fireEvent.pointerMove(window, {
            pointerId: 1,
            pointerType: 'mouse',
            clientX: moveX,
            clientY: moveY,
        });

        // Ensure onChange was NOT called during the above early returns
        await expect(args.onChange).not.toHaveBeenCalled();

        // ------------------------------------------------------------------
        // START DRAGGING: Set state.isDragging = true
        // ------------------------------------------------------------------
        fireEvent.pointerDown(targetElement, {
            pointerId: 1,
            pointerType: 'mouse',
            clientX: startX,
            clientY: startY,
            button: 0,
            buttons: 1,
            isPrimary: true,
        });

        // Wait for React reducer state update (isDragging = true)
        await new Promise(resolve => setTimeout(resolve, 50));

        // ------------------------------------------------------------------
        // CHECK 3: onPointerDown when ALREADY dragging (state.isDragging === true)
        // Hits: if (state.isDragging) return;
        // ------------------------------------------------------------------
        fireEvent.pointerDown(targetElement, {
            pointerId: 1,
            pointerType: 'mouse',
            clientX: startX,
            clientY: startY,
            button: 0,
            buttons: 1,
            isPrimary: true,
        });

        // ------------------------------------------------------------------
        // CHECK 4: Valid onPointerMove while dragging (executes getOffset)
        // Hits: getOffset(ref) and calculates bounding client rect
        // ------------------------------------------------------------------
        fireEvent.pointerMove(window, {
            pointerId: 1,
            pointerType: 'mouse',
            clientX: moveX,
            clientY: moveY,
            button: 0,
            buttons: 1,
            isPrimary: true,
        });

        // ------------------------------------------------------------------
        // CLEANUP: Fire pointerUp to reset drag state back to false
        // ------------------------------------------------------------------
        fireEvent.pointerUp(window, { pointerId: 1, pointerType: 'mouse' });

        // Assert that the single valid drag move fired onChange exactly once
        await expect(args.onChange).toHaveBeenCalledTimes(1);
    },
};

export const ConflictingPropsWarningTest = {
    args: {
        arcStart: 90,
        arcEnd: 270,
        knobPosition: 50,
        width: 280,
        trackSize: 24,
        progressSize: 16,
        trackDraggable: true,
        knobDraggable: true,
        onChange: fn(),
    },
    beforeEach: () => {
        // set up the spy BEFORE the component mounts
        const consoleSpy = spyOn(console, 'warn').mockImplementation(() => {});

        // return a cleanup function so the spy is removed after the test
        return () => {
            consoleSpy.mockRestore();
        };
    },
    play: async () => {
        // by the time play runs, useEffect has already fired,
        // so you can assert that the spy caught it.
        await expect(console.warn).toHaveBeenCalledWith(constants.KNOB_POSITIONING_WARNING);

        // Assert it only fired exactly once
        await expect(console.warn).toHaveBeenCalledTimes(1);
    },
};

export const PropSyncEffectTest = {
    args: {
        min: 0,
        max: 100,
        trackDraggable: true,
    },
    // create a stateful wrapper to dynamically change props
    render: args => {
        const [value, setValue] = useState(10);
        const [dataIndex, setDataIndex] = useState(0);

        return (
            <div>
                {/* Hidden buttons purely for the play function to trigger prop changes */}
                <button data-testid="update-value-btn" onClick={() => setValue(80)} style={{ display: 'none' }} />
                <button data-testid="update-index-btn" onClick={() => setDataIndex(5)} style={{ display: 'none' }} />

                {/* The component receives the dynamic state as props */}
                <CircularSlider {...args} value={value} dataIndex={dataIndex} />
            </div>
        );
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const updateValueBtn = canvas.getByTestId('update-value-btn');
        const updateIndexBtn = canvas.getByTestId('update-index-btn');
        const targetElement = canvas.getByTestId('svg-progress-foreign-object');

        // ------------------------------------------------------------------
        // CHECK 1: Prop change when NOT dragging -> SHOULD update position
        // ------------------------------------------------------------------
        fireEvent.click(updateValueBtn); // Changes value 10 -> 80

        // Wait a tick for React to run the useEffect and update state
        await new Promise(resolve => setTimeout(resolve, 50));

        // ASSERTION: Verify the component visually updated to 80.
        const labelText = canvas.getByText('80');

        await expect(labelText).toBeInTheDocument();

        // ------------------------------------------------------------------
        // CHECK 2: Prop change WHILE dragging -> SHOULD abort (early return)
        // ------------------------------------------------------------------
        // Simulate grabbing the knob (sets state.isDragging = true)
        fireEvent.pointerDown(targetElement, {
            pointerId: 1,
            pointerType: 'mouse',
            button: 0,
            buttons: 1,
            isPrimary: true,
        });

        await new Promise(resolve => setTimeout(resolve, 50));

        // Fire a prop update (changes dataIndex 0 -> 5)
        fireEvent.click(updateIndexBtn);

        await new Promise(resolve => setTimeout(resolve, 50));

        // ASSERTION: Because we are dragging, the useEffect(() => {if (!state.mounted || state.isDragging) return; ...)
        // will resolve to 'return;'.
        // The component should NOT have updated visually.
        // (Assuming index 5 correlates to a specific value, e.g., '50', that value should NOT be in the document)
        await expect(canvas.queryByText('50')).not.toBeInTheDocument();

        // ------------------------------------------------------------------
        // CLEANUP
        // ------------------------------------------------------------------
        fireEvent.pointerUp(window, { pointerId: 1, pointerType: 'mouse' });
    },
};

export const ArcDeadzoneClampTest = {
    args: {
        trackDraggable: true,
        limitDragRange: true,
        arcStart: 90, // Bottom half arc
        arcEnd: 270,
        width: 280,
        trackSize: 24,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const targetElement = canvas.getByTestId('svg-progress-foreign-object');

        const rect = targetElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dragRadius = rect.width / 2 - args.trackSize / 2;

        // Start safely inside the arc at the bottom (6 o'clock)
        fireEvent.pointerDown(targetElement, {
            pointerId: 1,
            pointerType: 'mouse',
            button: 0,
            buttons: 1,
            isPrimary: true,
            clientX: centerX,
            clientY: centerY + dragRadius, // +Y is bottom
        });

        await new Promise(resolve => setTimeout(resolve, 10));

        // Drag straight to the top of the circle (12 o'clock).
        // Since the arc is at the bottom, the top is 100% inside the deadzone gap.
        fireEvent.pointerMove(window, {
            pointerId: 1,
            pointerType: 'mouse',
            button: 0,
            buttons: 1,
            isPrimary: true,
            clientX: centerX,
            clientY: centerY - dragRadius, // -Y is top
            pageX: centerX,
            pageY: centerY - dragRadius,
        });

        fireEvent.pointerUp(window, { pointerId: 1, pointerType: 'mouse' });
    },
};

export const JumpLimiterAbortTest = {
    args: {
        trackDraggable: true,
        limitDragRange: true,
        width: 280,
        trackSize: 24,
        knobPosition: 0,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const targetElement = canvas.getByTestId('svg-progress-foreign-object');

        const rect = targetElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dragRadius = rect.width / 2 - args.trackSize / 2;

        // Start at 0 degrees (3 o'clock)
        fireEvent.pointerDown(targetElement, {
            pointerId: 1,
            pointerType: 'mouse',
            button: 0,
            buttons: 1,
            isPrimary: true,
            clientX: centerX + dragRadius,
            clientY: centerY,
        });

        await new Promise(resolve => setTimeout(resolve, 10));

        // Simulate user instantly teleporting mouse to 190 degrees
        const jumpAngle = 190 * (Math.PI / 180);
        fireEvent.pointerMove(window, {
            pointerId: 1,
            pointerType: 'mouse',
            button: 0,
            buttons: 1,
            isPrimary: true,
            clientX: centerX + dragRadius * Math.cos(jumpAngle),
            clientY: centerY + dragRadius * Math.sin(jumpAngle),
            pageX: centerX + dragRadius * Math.cos(jumpAngle),
            pageY: centerY + dragRadius * Math.sin(jumpAngle),
        });

        fireEvent.pointerUp(window, { pointerId: 1, pointerType: 'mouse' });
    },
};
