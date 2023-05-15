import {createSlice} from '@reduxjs/toolkit';

interface AppState {
  user: object;
  authToken: null;
  isLogged: boolean;
}

const initialState: AppState = {
  user: {},
  authToken: null,
  isLogged: false,
};

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload;
    },
    LOGOUT: state => {
      state.isLogged = false;
      state.authToken = null;
    },
    SET_TOKEN: (state, action) => {
      state.authToken = action.payload.tokens;
      state.isLogged = true;
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const AppActions = AppSlice.actions;
