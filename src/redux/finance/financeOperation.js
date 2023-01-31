import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';

/* export const getTotalBalance = createAsyncThunk(
  '/balance',
  async (_, { rejectWithValue, getState }) => {
    const currentToken = getState().auth.token;

    if (!currentToken) rejectWithValue();

    try {
      const { data } = await axiosBaseUrl.get('/transactions');

      return data;
    } catch (e) {
      Notify.failure(e.message, { position: 'center-top' });
      return rejectWithValue(e.message);
    }
  }
); */

export const updateTransactions = createAsyncThunk(
  'finance/update',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosBaseUrl.get('transactions');
      const transactions = data.data.transactions;
      const remainingBalance = [...transactions].pop().remainingBalance;

      return { transactions, remainingBalance };
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

const financeOperation = { updateTransactions, addTransaction };

export default financeOperation;
