import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';
import hardcoreLogout from 'redux/utils/hardcoreLogout';

export const getStatistic = createAsyncThunk(
  'statistic/getStatistic',
  async (object, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosBaseUrl.get('transactions/statistics', {
        params: {
          year: object.year,
          month: object.month,
        },
      });

      return data.data;
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);
