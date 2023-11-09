import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LocationState {
    country: string,
    localtime: string,
    region: string,
    name: string
}

const initialState: LocationState = {
    country: '',
    localtime: '',
    region: '',
    name: ''
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<LocationState>) => {
            state.country = action.payload.country;
                state.localtime = action.payload.localtime;
                state.region = action.payload.region;
                state.name = action.payload.name;
            },
    },
})

export const { actions: locationActions } = locationSlice;
export const { reducer: locationReducer } = locationSlice;