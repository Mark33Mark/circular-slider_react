export const getKeyFromValue = (object, value) => {
    if (!object || !value) return;
    return  Object.keys(object).find(key => object[key] === value);
};
