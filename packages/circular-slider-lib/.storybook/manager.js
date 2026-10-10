/* 
 *  A small hack to suppress or silence Storybooks warnings and errors
 *  Some can't be silenced where they are generated from outside Storybook, like this one:
 * 
 *  Feature Policy: Skipping unsupported feature name “clipboard-write”.
 * 
 *  This is a browser-specific warning.  Storybook sets up strict security permissions 
 *  on its preview iframe using an allow="..." attribute. It requests permission for clipboard-write 
 *  so that addons (like the one that lets you copy a story's snippet) can copy text to your clipboard. 
 *  You will see this warning if your specific browser doesn't recognize that exact permission name 
 *  string yet and is letting you know it's skipping it.
 * 
 *  Note: If you add new suppressedMutes keywords, make sure you restart Storybook in the terminal.
 * 
 */


const suppressedMutes = ['Storybook 11', 'Layout was forced',];

const silenceLogs = originalMethod => {

    return function (...args) {
        const message = args
            .map(arg => (arg && typeof arg === 'object' ? arg.message || JSON.stringify(arg) : String(arg)))
            .join(' ');

        if (suppressedMutes.some(keyword => message.includes(keyword))) {
            return; // Shhh...
        }

        originalMethod.apply(console, args);
    };
};

// Intercept the outer Manager shell's console channels
console.warn = silenceLogs(console.warn);
console.error = silenceLogs(console.error);
