import { createSlice } from '@reduxjs/toolkit';
import { getTotalBalance, financeOperations } from './financeOperation';
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
      .addCase(financeOperations.pending, handlePending)
      .addCase(financeOperations.rejected, handleRejected)
      .addCase(
        financeOperations.updateTransactions.fulfilled,
        (state, action) => {
          state.data = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getTotalBalance.pending, handlePending)
      .addCase(getTotalBalance.fulfilled, (state, { payload }) => {
        const lastTransaction = payload.data.transactions[0].pop();
        state.totalBalance = lastTransaction.remainingBalance;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(getTotalBalance.rejected, handleRejected);
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
