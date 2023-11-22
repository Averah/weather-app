import { axiosInstance, API_KEY } from './getForecast';

export const getCities = async (value: string) => {
    const response = await axiosInstance.get(`search.json?key=${API_KEY}&q=${value}`);
    return response.data;
};
