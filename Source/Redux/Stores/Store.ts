import {AppReducer} from '@redux/Slices/AppSlice';
import {LoaderReducer} from '@redux/Slices/LoaderSlice';
import {configureStore} from '@reduxjs/toolkit';

export const Stores = configureStore({
  reducer: {
    app: AppReducer,
    loader: LoaderReducer,
  },
});

export type RootState = ReturnType<typeof Stores.getState>;
export type AppDispatch = typeof Stores.dispatch;
