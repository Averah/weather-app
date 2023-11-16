import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getForecast } from "../API/getForecast";
import { currentWeatherActions } from "./currentWeatherSlice";
import { forecastActions } from "./forecastSlice";
import { locationActions } from "./locationSlice";

export const fetchWeather = createAsyncThunk(
    'fetchWeather',
    async (value: string, { dispatch, rejectWithValue }) => {
        dispatch(locationActions.setIsloading(true))
        dispatch(locationActions.setIsDataReceived(false))
        try {
            const response = await getForecast(value)
            dispatch(locationActions.setLocation(response.location))
            dispatch(currentWeatherActions.setCurrentWeather(response.current));
            dispatch(forecastActions.setForecast(response.forecast.forecastday))
            dispatch(locationActions.setIsDataReceived(true))
            dispatch(locationActions.setError(''))
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const error = err.response?.data.error.message
                console.log(error);
                dispatch(locationActions.setError(error))
            }

        } finally {
            dispatch(locationActions.setIsloading(false))
        }
    })

