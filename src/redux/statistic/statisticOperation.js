import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';

export const getStatistic = createAsyncThunk(
  'statistic/getStatistic',
  async (object, thunkAPI) => {
    try {
      const data = await axiosBaseUrl.get('transactions/statistics', {
        params: {
          year: object.year,
          month: object.month,
        },
      });

      return data.data;
    } catch (e) {
      Notify.failure(e.message);
    }
  }
);
