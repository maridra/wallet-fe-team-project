import { createSlice } from '@reduxjs/toolkit';
import { totalBalance } from './financeOperation';

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
      .addCase(totalBalance.pending, handlePending)
      .addCase(totalBalance.fulfilled, (state, { payload }) => {
        state.totalBalance = payload.finance.totalBalance;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(totalBalance.rejected, handleRejected);
  },
});

export const financeReducer = financeSlice.reducer;
