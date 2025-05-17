import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { resultsSlice } from './services/result/slice';

const rootReducer = combineSlices(resultsSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
