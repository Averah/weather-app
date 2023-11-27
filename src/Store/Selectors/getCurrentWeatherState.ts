import { StateSchema } from '../store';

export const getCurrentWeatherState = (state: StateSchema) => state.currentWeather;

export const getCurrentWeatherTemp = (state: StateSchema) => state.currentWeather.temp_c;

export const getCurrentWeatherCondition = (state: StateSchema) => state.currentWeather.condition;
