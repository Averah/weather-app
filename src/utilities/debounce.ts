let timer:ReturnType<typeof setTimeout>;

export const debounce = (fn: () => void, ms: number) => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(fn, ms);
};
