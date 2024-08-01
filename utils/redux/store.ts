import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store=configureStore({
  reducer:{modalSlice},
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppsSelector:TypedUseSelectorHook<RootState>=useSelector;