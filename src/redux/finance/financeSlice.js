import { createSlice } from '@reduxjs/toolkit';
import { getTotalBalance } from './financeOperation';

const initialState = {
  totalBalance: null,
  isLoading: false,
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

export const financeReducer = financeSlice.reducer;
