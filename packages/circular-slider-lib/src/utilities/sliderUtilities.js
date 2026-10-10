const knobOffsetConstants = {
    top: Math.PI / 2, // +90 degrees
    right: 0, // Math shift starting point
    bottom: -Math.PI / 2, // -90 degrees
    left: -Math.PI, // -180 degrees
};

const svgOffsetConstants = {
    top: 0, // SVG starting point
    right: Math.PI / 2, // +90 degrees
    bottom: Math.PI, // +180 degrees
    left: -Math.PI / 2, // -90 degrees
};

// sanitize any number into a clean 0-359.99 degree range
export const normalizeDegrees = degrees => ((degrees % 360) + 360) % 360;

export const getRadians = degrees => (degrees * Math.PI) / 180;

export const generateRange = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => i + min);

export const getKnobOffsetAmount = knobPosition => {
    if (typeof knobPosition === 'string' && knobPosition in knobOffsetConstants) {
        return knobOffsetConstants[knobPosition];
    }
    const parsed = typeof knobPosition === 'number' ? knobPosition : parseFloat(knobPosition);
    
    // Sanitize before calculating radians
    const safeDegrees = normalizeDegrees(parsed);
    return getRadians(safeDegrees);
};

export const getSvgOffset = position => {
    if (typeof position === 'string' && position in svgOffsetConstants) {
        return svgOffsetConstants[position];
    }
    const parsed = typeof position === 'number' ? position : parseFloat(position);
    
    // Sanitize before applying the inverse formula
    const safeDegrees = normalizeDegrees(parsed);
    
    // Calculate the inverse relationship for the SVG
    let svgDegrees = 90 - safeDegrees;
    
    // commenting out as knobPosition is the position argument passed to this utility
    // the knobPosition is already normalized, so this block is unnecessary
    // Normalize angles to keep them within standard -180 to 180 bounds 
    // if (svgDegrees > 180) {
    //     svgDegrees -= 360;
    // } else if (svgDegrees <= -180) {
    //     svgDegrees += 360;
    // }
    
    return getRadians(svgDegrees);
};
