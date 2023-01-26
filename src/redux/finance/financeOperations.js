import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl, token } from '../tokenSettingsAxios';

const updateTransactions = createAsyncThunk(
  'finance/update',
  async (_, thunkAPI) => {
    try {
      token.set(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDI3MTM3ODgzY2EwM2E1NDZjOThmNyIsImlhdCI6MTY3NDczOTg1MiwiZXhwIjoxNjc0NzQzNDUyfQ.77jQLpjMSIRUHngWkSWscHTvuMvgfUbJWhIa3bQedgI'
      );
      const { data } = await axiosBaseUrl.get('transactions');
      console.log(data.data.transactions[0]);

      return data.data.transactions[0];
    } catch (e) {}
  }
);

const financeOperations = {
  updateTransactions,
};

export default financeOperations;
