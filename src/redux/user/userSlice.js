import { createSlice } from '@reduxjs/toolkit';
import userOperations from './userOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  id: '',
  firstName: '',
  email: '',
  avatarURL: '',
  categories: [],
  subscription: '',
  totalBalance: '',
  avatarLoading: false,
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      /*       .addCase(userOperations.currentUser.pending, handlePending)
      .addCase(userOperations.currentUser.rejected, handleRejected) */
      .addCase(userOperations.currentUser.fulfilled, (state, action) => {
        state.id = action.payload?._id;
        state.firstName = action.payload?.firstName;
        state.email = action.payload?.email;
        state.avatarURL = action.payload?.avatarURL;
        state.categories = action.payload?.categories;
        state.subscription = action.payload?.subscription;
        state.totalBalance = action.payload?.totalBalance;
      })

      // REMOVE CATEGORY
      .addCase(userOperations.removeCategory.pending, handlePending)
      .addCase(userOperations.removeCategory.rejected, handleRejected)
      .addCase(
        userOperations.removeCategory.fulfilled,
        (state, { payload }) => {
          state.categories = payload;
        }
      )

      // ADD CATEGORY
      .addCase(userOperations.addCategory.pending, handlePending)
      .addCase(userOperations.addCategory.rejected, handleRejected)
      .addCase(userOperations.addCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
      })

      // UPDATE USERNAME
      .addCase(userOperations.updateUserName.pending, state => {
        state.error = null;
      })
      .addCase(userOperations.updateUserName.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(
        userOperations.updateUserName.fulfilled,
        (state, { payload }) => {
          state.firstName = payload;
        }
      )

      // UPDATE AVATAR
      .addCase(userOperations.updateAvatar.pending, state => {
        state.avatarLoading = true;
        state.error = null;
      })
      .addCase(userOperations.updateAvatar.rejected, (state, { payload }) => {
        state.avatarLoading = false;
        state.error = payload;
      })
      .addCase(userOperations.updateAvatar.fulfilled, (state, { payload }) => {
        state.avatarLoading = false;
        state.avatarURL = payload;
      });
  },
});

const persistConfig = {
  key: 'leopards/wallet/user',
  storage,
};

export const persistedUserReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);
