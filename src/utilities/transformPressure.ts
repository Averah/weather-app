export const transoformPressure = (value:number) => {
    const newValue = Math.round(value * 0.75006156);
    return newValue;
};
