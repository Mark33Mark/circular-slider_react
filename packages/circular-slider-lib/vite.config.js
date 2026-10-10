import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
    plugins: [react(), cssInjectedByJsPlugin()],
    build: {
        lib: {
            entry: path.resolve(import.meta.dirname, 'src/index.js'),
            name: 'CircularSlider',
            fileName: 'circular-slider',
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});
