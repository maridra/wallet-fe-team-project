import { createSlice } from '@reduxjs/toolkit';
import financeOperations from './financeOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  data: null,
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      financeOperations.updateTransactions.fulfilled,
      (state, action) => {
        state.data = action.payload;
      }
    );
  },
});

const persistConfig = {
  key: 'leopards/finance',
  storage,
};

export const persistedFinanceReducer = persistReducer(
  persistConfig,
  financeSlice.reducer
);
