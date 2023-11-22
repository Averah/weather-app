import { StateSchema } from '../store';

export const getForecastState = (state: StateSchema) => state.forecast;

export const getForecastWeek = (state: StateSchema) => state.forecast.forecastWeek;
