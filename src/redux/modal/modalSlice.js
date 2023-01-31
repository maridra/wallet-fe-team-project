import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModalAddTransaction: false,
  showModalLogout: false,
  showModalSuccessRegistration: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleShowModalAddTransaction(state, action) {
      state.showModalAddTransaction = action.payload;
    },
    toggleShowModalLogout(state, action) {
      state.showModalLogout = action.payload;
    },
    toggleShowModalSuccessRegistration(state, action) {
      state.showModalSuccessRegistration = action.payload;
    }
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleShowModalAddTransaction, toggleShowModalLogout, toggleShowModalSuccessRegistration } =
  modalSlice.actions;
