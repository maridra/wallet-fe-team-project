import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../tokenSettingsAxios';

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    /*  const token = thunkAPI.getState().auth.token;

    if (!token) {
      throw new Error('Error');
    }
    token.set(token); */
    try {
      const { data } = await axiosBaseUrl.get('users/current');
      return data.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const userOperations = {
  currentUser,
};

export default userOperations;
