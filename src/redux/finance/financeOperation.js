import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl, token } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';

export const getTotalBalance = createAsyncThunk(
  '/balance',
  async (_, { rejectWithValue, getState }) => {
    const currentToken = getState().auth.token;

    if (!currentToken) rejectWithValue();

    token.set(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDI0ZDVkZmMyN2RlZDYzOWQyMTUyZCIsImlhdCI6MTY3NDgxNDI0MCwiZXhwIjoxNjc0ODE3ODQwfQ.hSRKLIAZGwOpGDBPJEYr9aTNH9vIawFnr1KdpoYRs2M'
    );

    try {
      const { data } = await axiosBaseUrl.get('/transactions');

      return data;
    } catch (e) {
      Notify.failure(e.message, { position: 'center-top' });
      return rejectWithValue(e.message);
    }
  }
);

const financeOperation = { getTotalBalance };

export default financeOperation;
