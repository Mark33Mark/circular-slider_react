import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        storybookTest({
            configDir: path.resolve(__dirname, '.storybook'),
        }),
    ],
    // The strict: false workaround you had for Storybook assets
    server: {
        fs: { strict: false }
    },
    test: {
        name: 'storybook',
        browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
        },
        exclude: ['**/_stories/components/Wrappers.jsx'],
        coverage: {
            provider: 'v8',
            exclude: ['**/_stories/components/Wrappers.jsx'],
        },
    },
});
