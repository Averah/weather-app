import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
});

export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getForecast = async (value: string) => {
    const response = await axiosInstance.get(`forecast.json?key=${API_KEY}&q=${value}&days=7&aqi=no&alerts=no`);
    return response.data;
};
