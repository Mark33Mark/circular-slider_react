/* v8 ignore start */
import '../src/styles';

// workaround for the MSW checkGlobals tree-shaking bug in production builds
if (typeof window !== 'undefined') {
    window.checkGlobals = window.checkGlobals || function () {};
}

const preview = {
    parameters: {
        docs: {
            autodocs: true,
        },

        controls: {
            disableSaveFromUI: true /* stops irritating prompt when dynamically changing values */,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },
    },
};

export default preview;
