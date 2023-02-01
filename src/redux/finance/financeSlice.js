import { createSlice } from '@reduxjs/toolkit';
import { addTransaction, updateTransactionsNew } from './financeOperation';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  totalBalance: null,
  isLoading: false,
  data: [],
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(updateTransactionsNew.pending, handlePending)
      .addCase(updateTransactionsNew.rejected, handleRejected)
      .addCase(updateTransactionsNew.fulfilled, (state, action) => {
        state.data = action.payload?.transactions;
        state.totalBalance = action.payload?.remainingBalance;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.rejected, handleRejected)
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.data = [...state.data, { ...action.payload }];
        state.totalBalance = action.payload.remainingBalance;
        state.isLoading = false;
      });
  },
});

const persistConfig = {
  key: 'leopards/finance',
  storage,
};

export const persistedFinanceReducer = persistReducer(
  persistConfig,
  financeSlice.reducer
);

export const financeReducer = financeSlice.reducer;
