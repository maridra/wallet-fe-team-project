import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';

export const updateTransactionsNew = createAsyncThunk(
  'finance/updateNew',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);
      const transactions = [
        ...credentials.data.transactions,
        ...thunkAPI.getState().finance.data,
      ];
      console.log(transactions);
      return { transactions };
    } catch (e) {}
  }
);

export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async credentials => {
    try {
      const { data } = await axiosBaseUrl.post('/transactions', credentials);

      const transaction = data.data.transaction;

      return transaction;
    } catch (e) {
      Notify.failure(e.message);
    }
  }
);

const financeOperation = {
  addTransaction,
  updateTransactionsNew,
};

export default financeOperation;
