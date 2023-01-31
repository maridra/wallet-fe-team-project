import { createSlice } from '@reduxjs/toolkit';
import { getStatistic } from './statisticOperation';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const initialState = {
  // statistic: [],
  isLoading: false,
  data: {
    firstName: '',
    _id: null,
    income: null,
    expenses: null,
    profit: null,
    balance: null,
    queryDate: {
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
        // state.data = action.payload.transactions;
        // state.statistic = {
        //   statistic: action.payload,
        // };

        // if (action.payload.month) {
        //   state.data.month = action.payload.month;
        //   // state.userDayInfo.daySummary = action.payload.newSummary;
        // } else {
        //   state.userDayInfo = action.payload;
        // }
        state.data.queryDate.month = action.payload.month;
        state.data.queryDate.year = action.payload.year;
        state.isLoggedIn = true;
        state.isLoading = false;
      });
  },
});

const persistConfig = {
  key: 'leopards/statistic',
  storage,
};

export const persistedstatisticReducer = persistReducer(
  persistConfig,
  statisticSlice.reducer
);

export const statisticReducer = statisticSlice.reducer;
