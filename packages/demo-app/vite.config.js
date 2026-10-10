import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
    plugins: [react()],
    esbuild: {
        // force esbuild to use the modern JSX transform
        jsx: 'automatic',
    },
    server: {
        open: true,
        port: 7777,
        host: '0.0.0.0',
        strictPort: true,
        allowedHosts: ['.watsonised.me'],
        headers: {
            'Accept-Ranges': 'bytes',
            'Access-Control-Expose-Headers': 'Accept-Ranges, Content-Range, Content-Length',
        },
        fs: {
            allow: ['../..']
        }
    },
    base: '/',
    resolve: {
        alias: {
            '@watsonised/circular-slider-for-react': path.resolve(import.meta.dirname, '../circular-slider-lib/src/components/index.jsx')
        },
        dedupe: ['react', 'react-dom']
    },
    optimizeDeps: {
        // 'react/jsx-dev-runtime' which is required for local dev
        include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime']
    }
});
