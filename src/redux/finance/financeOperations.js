import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl, token } from '../tokenSettingsAxios';

const updateTransactions = createAsyncThunk(
  'finance/update',
  async (_, thunkAPI) => {
    try {
      token.set(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDI3MTM3ODgzY2EwM2E1NDZjOThmNyIsImlhdCI6MTY3NDgxNzgxNSwiZXhwIjoxNjc0ODIxNDE1fQ.xugHS3HEPBmYgFylUI860bhogqsNd62YzIfaOQpEwgA'
      );
      const { data } = await axiosBaseUrl.get('transactions');

      return data.data.transactions[0];
    } catch (e) {}
  }
);

const financeOperations = {
  updateTransactions,
};

export default financeOperations;
