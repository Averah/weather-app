import { StateSchema } from '../store';
export const getForecastState = (state: StateSchema) => state.forecast;

export const getForecaseWeek = (state: StateSchema) => state.forecast.forecastWeek