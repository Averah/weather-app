import { StateSchema } from '../store';
export const getLocationState = (state: StateSchema) => state.location;

export const getIsDataReceived = (state: StateSchema) => state.location.isDataReceived;

export const getIsLoading = (state: StateSchema) => state.location.isLoading;

export const getError = (state: StateSchema) => state.location.error

export const getStateCities = (state: StateSchema) => state.location.cities