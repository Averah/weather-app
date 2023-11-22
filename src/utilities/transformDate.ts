export const transformDateTime = (stringDate: string) => {
    const date = new Date(stringDate);
    return `${date.toLocaleDateString()}, ${date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}`;
};

export const transformDate = (stringDate: string) => {
    const date = new Date(stringDate);
    return date.toLocaleDateString();
};
