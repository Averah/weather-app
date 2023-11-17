import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { getCities } from "../API/getCities";
import { City, locationActions } from "./locationSlice";

export const fetchCities = createAsyncThunk(
    'fetchCities',
    async (value: string, { dispatch, rejectWithValue }) => {

        try {
            const response = await getCities(value)
            const cities = response.map((city: City) => {
                return {
                    name: city.name,
                    region: city.region,
                    country: city.country
                }
            })
            dispatch(locationActions.setCities(cities))
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.log('No cities found');
                
                // const error = err.response?.data.error.message
                // console.log(error);
                // dispatch(locationActions.setError(error))
            }

        } finally {
            dispatch(locationActions.setIsloading(false))
        }
    })
