import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';
import hardcoreLogout from 'redux/utils/hardcoreLogout';

export const updateTransactionsNew = createAsyncThunk(
  'finance/updateNew',
  async (credentials, thunkAPI) => {
    try {
      const transactions = [
        ...credentials.data.transactions,
        ...thunkAPI.getState().finance.data,
      ];

      return { transactions };
    } catch (e) {
      Notify.failure(e.message, { position: 'center-top' });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTransactions = createAsyncThunk(
  'finance/update',
  async (_, { dispatch }) => {
    try {
      const { data } = await axiosBaseUrl.get('transactions');
      const transactions = data.data.transactions;
      const remainingBalance = [...transactions].pop().remainingBalance;

      return { transactions, remainingBalance };
    } catch (e) {
      hardcoreLogout(e, dispatch);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (credentials, { dispatch }) => {
    try {
      const { data } = await axiosBaseUrl.post('/transactions', credentials);

      const transaction = data.data.transaction;

      return transaction;
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.message);
    }
  }
);

const financeOperation = {
  addTransaction,
  updateTransactionsNew,
};

export default financeOperation;
