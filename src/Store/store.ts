import { configureStore } from '@reduxjs/toolkit'
import { currentWeatherReducer, CurrentWeatherState } from './currentWeatherSlice';
import { locationReducer, LocationState } from './locationSlice';
import { forecastReducer, ForecastState } from './forecastSlice';

export interface StateSchema {
    location: LocationState,
    currentWeather: CurrentWeatherState,
    forecast: ForecastState
}

export const store = configureStore<StateSchema>({
  reducer: {
    location: locationReducer,
    currentWeather: currentWeatherReducer,
    forecast: forecastReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch