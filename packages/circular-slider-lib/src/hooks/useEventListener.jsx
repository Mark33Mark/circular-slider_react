import { useEffect, useRef } from 'react';

export const useEventListener = (eventName, handler) => {
    const savedHandler = useRef(handler);

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        /* v8 ignore next - SSR guard only runs on server */
        if (typeof window === 'undefined' || !window.addEventListener) return;

        const controller = new AbortController();

        const eventListener = event => {
            /* v8 ignore next */
            if (savedHandler.current) savedHandler.current(event);
        };

        // pass the signal to the addEventListener options
        window.addEventListener(eventName, eventListener, { 
            passive: false, 
            signal: controller.signal 
        });

        // abort signal to unmount
        return () => {
            controller.abort();
        };
    }, [eventName]);
};
