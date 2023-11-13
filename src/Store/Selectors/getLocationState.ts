import { StateSchema } from '../store';
export const getLocationState = (state: StateSchema) => state.location;

export const getIsDataReceived = (state: StateSchema) => state.location.isDataReceived;