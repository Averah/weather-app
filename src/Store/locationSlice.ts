import { createSlice } from '@reduxjs/toolkit';
import { transformDateTime } from '../utilities/transformDate';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LocationState {
    country: string,
    localtime: string,
    region: string,
    name: string,
    isDataReceived: boolean
}

const initialState: LocationState = {
    country: '',
    localtime: '',
    region: '',
    name: '',
    isDataReceived: false
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<LocationState>) => {
            state.country = action.payload.country;
            state.localtime = transformDateTime(action.payload.localtime);
            state.region = action.payload.region;
            state.name = action.payload.name;
            state.isDataReceived = true
        },
    },
})

export const { actions: locationActions } = locationSlice;
export const { reducer: locationReducer } = locationSlice;