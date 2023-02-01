import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  token: null,
  loading: false,
  error: null,
  isAuth: false,
  isVerified: false,
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
  reducers: {
    Unauthorized: {
      reducer(state) {
        state.token = initialState.token;
        state.loading = initialState.loading;
        state.error = initialState.error;
        state.isAuth = initialState.isAuth;
        state.isVerified = initialState.isVerified;
      },
    },
  },
  extraReducers: builder => {
    builder
      // REGISTRATION
      .addCase(authOperations.register.pending, handlePending)
      .addCase(authOperations.register.rejected, handleRejected)
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.user.verificationToken;
        state.loading = false;
      })

      // LOGIN
      .addCase(authOperations.logIn.pending, handlePending)
      .addCase(authOperations.logIn.rejected, handleRejected)
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        /*         state.user = action.payload.data.user; */
        state.token = action.payload.data.token;
        state.loading = false;
        state.isAuth = true;
        state.isVerified = true;
      })

      // LOGOUT
      .addCase(authOperations.logOut.pending, handlePending)
      .addCase(authOperations.logOut.rejected, handleRejected)
      .addCase(authOperations.logOut.fulfilled, state => {
        // state.user = initialState.user;
        state.token = initialState.token;
        state.loading = initialState.loading;
        state.error = initialState.error;
        state.isAuth = initialState.isAuth;
        state.isVerified = initialState.isVerified;
      })

      // REFRESH
      .addCase(authOperations.refresh.pending, state => {
        state.isAuth = false;
      })
      .addCase(authOperations.refresh.fulfilled, (state, { payload }) => {
        state.isAuth = true;
      })
      .addCase(authOperations.refresh.rejected, state => {
        state.isAuth = false;
      })

      //Verification
      .addCase(authOperations.verifyEmail.pending, handlePending)
      .addCase(authOperations.verifyEmail.rejected, handleRejected)
      .addCase(authOperations.verifyEmail.fulfilled, state => {
        state.loading = false;
        state.isVerified = true;
        state.token = null;
      })
    
    //ResendVerification
      .addCase(authOperations.resendVerification.pending, handlePending)
      .addCase(authOperations.resendVerification.rejected, handleRejected)
      .addCase(authOperations.resendVerification.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.user.verificationToken;
      });


    /* // ADD CATEGORY
      .addCase(authOperations.addCategory.pending, handlePending)
      .addCase(authOperations.addCategory.rejected, handleRejected)
      .addCase(authOperations.addCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.categories = payload;
      }) */

    /*       // REMOVE CATEGORY
      .addCase(authOperations.removeCategory.pending, handlePending)
      .addCase(authOperations.removeCategory.rejected, handleRejected)
      .addCase(
        authOperations.removeCategory.fulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.user.categories = payload;
        }
      ) */

    /*       // UPDATE AVATAR
      .addCase(authOperations.updateAvatar.pending, state => {
        state.avatarLoading = true;
        state.error = null;
      })
      .addCase(authOperations.updateAvatar.rejected, (state, { payload }) => {
        state.avatarLoading = false;
        state.error = payload;
      })
      .addCase(authOperations.updateAvatar.fulfilled, (state, { payload }) => {
        state.avatarLoading = false;
        state.user.avatarURL = payload;
      }); */

    /*  // UPDATE USERNAME
      .addCase(authOperations.updateUserName.pending, state => {
        state.error = null;
      })
      .addCase(authOperations.updateUserName.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(
        authOperations.updateUserName.fulfilled,
        (state, { payload }) => {
          state.user.firstName = payload;
        }
      ); */
  },
});

const persistConfig = {
  key: 'leopards/wallet',
  storage,
  whitelist: ['token', 'user', 'isVerified'],
};

export const { Unauthorized } = authSlice.actions;

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
