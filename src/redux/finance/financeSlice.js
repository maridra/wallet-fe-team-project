import { createSlice } from '@reduxjs/toolkit';
import { updateTransactions } from './financeOperation';
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
      .addCase(updateTransactions.pending, handlePending)
      .addCase(updateTransactions.rejected, handleRejected)
      .addCase(updateTransactions.fulfilled, (state, action) => {
        state.data = action.payload.transactions;
        state.totalBalance = action.payload.remainingBalance;
        state.isLoggedIn = true;
        state.isLoading = false;
      });
    /*       .addCase(getTotalBalance.pending, handlePending)
      .addCase(getTotalBalance.fulfilled, (state, { payload }) => {
        const lastTransaction = payload.data.transactions.pop();
        state.totalBalance = lastTransaction.remainingBalance;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(getTotalBalance.rejected, handleRejected); */
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
