const config = {
    stories: [
        {
            directory: '../_stories', 
            titlePrefix: 'Components',
            files: '**/*.stories.@(js|jsx|ts|tsx)',
        },
    ],
    staticDirs: ['../../demo-app/src/assets'], 
    addons: ['@storybook/addon-docs', '@storybook/addon-vitest', '@storybook/addon-a11y'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    core: {
        allowedHosts: ['.watsonised.me'],
    },
    async viteFinal(config) {
        return {
            ...config,
            server: {
                ...config.server,
                host: '0.0.0.0',
                allowedHosts: ['.watsonised.me'],
                fs: {
                    ...(config.server?.fs || {}),
                    // Crucial for monorepos: allows Vite to read hoisted node_modules in the root
                    allow: ['../..'],
                },
                watch: {
                    ignored: ['**/node_modules/**', '**/.git/**'],
                },
                hmr: process.env.VITEST === 'true'
                    ? false
                    : {
                            ...config.server?.hmr,
                            protocol: 'wss',
                            clientPort: 443,
                            path: 'vite-hmr',
                    },
            },
        };
    },
};

export default config;