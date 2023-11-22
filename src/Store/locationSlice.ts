import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { transformDateTime } from '../utilities/transformDate';

export interface City {
    name: string,
    region: string,
    country: string,
}

export interface LocationState {
    country: string,
    localtime: string,
    region: string,
    name: string,
    isDataReceived: boolean,
    isLoading: boolean,
    error?: string,
    cities: Array<City>
}

const initialState: LocationState = {
    country: '',
    localtime: '',
    region: '',
    name: '',
    isDataReceived: false,
    isLoading: false,
    error: '',
    cities: [],
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<LocationState>) => {
            state.country = action.payload.country;
            state.localtime = transformDateTime(action.payload.localtime);
            state.region = action.payload.region;
            state.name = action.payload.name;
        },
        setIsloading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setIsDataReceived: (state, action: PayloadAction<boolean>) => {
            state.isDataReceived = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setCities: (state, action: PayloadAction<Array<City>>) => {
            state.cities = action.payload;
        },
    },
});

export const { actions: locationActions } = locationSlice;
export const { reducer: locationReducer } = locationSlice;
