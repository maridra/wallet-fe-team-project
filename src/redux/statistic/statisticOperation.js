import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../tokenSettingsAxios';
import { initialState } from 'redux/statistic/statisticSlice';

export const getStatistic = createAsyncThunk(
  'statistic/getStatistic',
  async (_, thunkAPI) => {
    const year = initialState.data.queryDate.year;
    console.log(year);
    const month = initialState.data.queryDate.month;
    try {
      console.log(initialState.data.queryDate.year);
      const data = await axiosBaseUrl.get('transactions/statistics', {
        params: {
          year: year,
          month: month,
        },
      });
      return data;
    } catch (e) {}
  }
);
