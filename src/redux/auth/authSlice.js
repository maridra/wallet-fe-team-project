import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: { firstName: null, email: null },
  token: '',
  loading: false,
  error: null,
  isAuth: false,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, handlePending)
      .addCase(authOperations.register.rejected, handleRejected)
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.isAuth = true;
      })

      .addCase(authOperations.logIn.pending, state => {
        state.loading.logIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
        state.user.firstName = payload['user']['firstName'];
        state.user.email = payload['user']['email'];

        state.accessToken = payload['accessToken'];
        state.refreshToken = payload['refreshToken'];
        state.sid = payload['sid'];

        state.isLoggedIn = true;
        state.loading.logIn = false;
      })
      .addCase(authOperations.logIn.rejected, state => {
        state.loading.logIn = false;
      })

      .addCase(authOperations.logOut.pending, state => {
        state.loading.logOut = true;
      })
      .addCase(authOperations.logOut.fulfilled, state => {
        state.user.firstName = initialState.user.firstName;
        state.user.email = initialState.user.email;

        state.accessToken = initialState.accessToken;
        state.refreshToken = initialState.refreshToken;
        state.sid = initialState.sid;

        state.isLoggedIn = initialState.isLoggedIn;
        state.loading.logOut = false;
      })
      .addCase(authOperations.logOut.rejected, state => {
        state.loading.logOut = false;
      })

      .addCase(authOperations.refresh.pending, state => {
        state.loading.refresh = true;
        state.accessToken = null;
      })
      .addCase(authOperations.refresh.fulfilled, (state, { payload }) => {
        state.accessToken = payload.refreshData['newAccessToken'];
        state.refreshToken = payload.refreshData['newRefreshToken'];
        state.sid = payload.refreshData['sid'];

        state.user.firstName = payload.userData['username'];
        state.user.email = payload.userData['email'];

        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
        state.loading.refresh = false;
      })
      .addCase(authOperations.refresh.rejected, state => {
        state.accessToken = initialState.accessToken;
        state.refreshToken = initialState.refreshToken;
        state.sid = initialState.sid;

        state.user.firstName = initialState.user.firstName;
        state.user.email = initialState.user.email;

        state.isLoggedIn = initialState.isLoggedIn;
        state.loading.refresh = false;
      });
  },
});

const persistConfig = {
  key: 'leopards/wallet',
  storage,
  whitelist: ['token'],
  blacklist: ['loading'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
