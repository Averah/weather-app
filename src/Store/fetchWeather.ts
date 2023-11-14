import { createAsyncThunk } from "@reduxjs/toolkit";
import { getForecast } from "../API/getForecast";
import { currentWeatherActions } from "./currentWeatherSlice";
import { forecastActions } from "./forecastSlice";
import { locationActions } from "./locationSlice";


export const fetchWeather = createAsyncThunk(
    'fetchWeather',
    async (value: string, { dispatch, rejectWithValue}) => {
        dispatch(locationActions.setIsloading(true))
        try {
            const response = await getForecast(value)
            dispatch(locationActions.setLocation(response.location))
            dispatch(currentWeatherActions.setCurrentWeather(response.current));
            dispatch(forecastActions.setForecast(response.forecast.forecastday))
            dispatch(locationActions.setIsloading(false))
        } catch (err) {
            const error = err as any
            dispatch(locationActions.setIsloading(false))
            console.log((error.message));
            

        }
    })

