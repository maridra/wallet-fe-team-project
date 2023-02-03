import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';
import hardcoreLogout from 'redux/utils/hardcoreLogout';

export const updateTransactionsNew = createAsyncThunk(
  'finance/updateNew',
  async (credentials, { rejectWithValue, dispatch, getState }) => {
    try {
      const transactions = [
        ...getState().finance.data,
        ...credentials.data.transactions,
      ];

      const totalBalance = transactions[0]?.remainingBalance;
      const quantityTransactions = credentials.data.transactionsCount;

      return { transactions, totalBalance, quantityTransactions };
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.message, { position: 'center-top' });
      return rejectWithValue(e.message);
    }
  }
);

export const updateTransactions = createAsyncThunk(
  'finance/update',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosBaseUrl.get(`transactions?page=1&limit=20`);
      const transactions = data.data.transactions;
      const totalBalance = transactions[0]?.remainingBalance;
      const quantityTransactions = data.data.transactionsCount;

      return { transactions, totalBalance, quantityTransactions };
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (credentials, { rejectWithValue, dispatch, getState }) => {
    try {
      const dateToday = new Date()
        .toISOString()
        .replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$1$2$3');
      const dateTransactions = Number(
        credentials.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$1$2$3')
      );

      if (dateTransactions < dateToday) {
        await axiosBaseUrl.post('/transactions', credentials);
        const { data } = await axiosBaseUrl.get(`transactions?page=1&limit=20`);
        const rdyTransactions = data.data.transactions;
        const totalBalance = rdyTransactions[0].remainingBalance;

        return { rdyTransactions, totalBalance };
      } else {
        const { data } = await axiosBaseUrl.post('/transactions', credentials);
        const transaction = data.data.transaction;
        const transactions = getState().finance.data;
        const rdyTransactions = [transaction, ...transactions];
        rdyTransactions.splice(-1);
        const totalBalance = data.data.totalBalance;

        return { rdyTransactions, totalBalance };
      }
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const financeOperation = {
  addTransaction,
  updateTransactionsNew,
  updateTransactions,
};

export default financeOperation;
