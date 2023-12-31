import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type ConditionType = {
    icon: string,
    text: string
}

export interface CurrentWeatherState {
    temp_c: number | undefined,
    feelslike_c: number | undefined,
    condition: ConditionType,
    humidity: number | undefined,
    wind_kph: number | undefined,
    pressure_mb: number | undefined,
}

const initialState: CurrentWeatherState = {
    temp_c: undefined,
    feelslike_c: undefined,
    condition: {
        icon: '',
        text: '',
    },
    humidity: undefined,
    wind_kph: undefined,
    pressure_mb: undefined,

};

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {
        setCurrentWeather: (state, action: PayloadAction<CurrentWeatherState>) => {
            state.temp_c = action.payload.temp_c && Math.round(action.payload.temp_c);
            state.feelslike_c = action.payload.feelslike_c && Math.round(action.payload.feelslike_c);
            state.condition = action.payload.condition;
            state.humidity = action.payload.humidity;
            state.wind_kph = action.payload.wind_kph;
            state.pressure_mb = action.payload.pressure_mb;
        },
    },
});

export const { actions: currentWeatherActions } = currentWeatherSlice;
export const { reducer: currentWeatherReducer } = currentWeatherSlice;
