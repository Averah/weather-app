import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ConditionType } from './currentWeatherSlice';

export interface ForecastDay {
    date: string,
    avgtemp_c: number | undefined,
    condition: ConditionType,
}

export interface ForecastState {
    forecastWeek: ForecastDay[]
}

const initialState: ForecastState = {
    forecastWeek: []
}

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {
        setForecast: (state, action: PayloadAction<any[]>) => {
            state.forecastWeek = action.payload
            .map((day) => {
                return { date: day.date, avgtemp_c: day.day.avgtemp_c, condition: day.day.condition }})

        },
    },
})

export const { actions: forecastActions } = forecastSlice;
export const { reducer: forecastReducer } = forecastSlice;
