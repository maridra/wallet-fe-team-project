import { createSlice } from '@reduxjs/toolkit';
import { getStatistic } from './statisticOperation';
// import { persistReducer } from 'redux-persist';

export const initialState = {
  isLoading: false,
  data: {
    firstName: '',
    id: null,
    incomePerMonth: null,
    expensesPerMonth: null,
    balancePerMont: null,
    totalIncome: null,
    totalExpenses: null,
    totalBalance: null,
    expensesByPeriod: [],
    allExpensesByCategory: [],
    searchPeriod: {
      month: 1,
      year: 2023,
    },
  },
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getStatistic.pending, handlePending)
      .addCase(getStatistic.rejected, handleRejected)
      .addCase(getStatistic.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoggedIn = true;
        state.isLoading = false;
      });
  },
});

// export const persistedstatisticReducer = persistReducer(
//   persistConfig,
//   statisticSlice.reducer
// );

export const statisticReducer = statisticSlice.reducer;
