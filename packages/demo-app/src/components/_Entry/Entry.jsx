import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../../components';
import '../../styling/styles.css';

createRoot(document.getElementById('watsonised')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
