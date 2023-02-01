import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';
import hardcoreLogout from '../utils/hardcoreLogout';

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, dispatch }) => {
    /*  const token = thunkAPI.getState().auth.token;

    if (!token) {
      throw new Error('Error');
    }
    token.set(token); */
    try {
      const { data } = await axiosBaseUrl.get('users/current');
      return data.data.user;
    } catch (e) {
      hardcoreLogout(e, dispatch);
      return rejectWithValue(e.message);
    }
  }
);

const removeCategory = createAsyncThunk(
  'user/removeCategory',
  async (credentials, { _, getState, dispatch }) => {
    const id = credentials;
    try {
      await axiosBaseUrl.delete(`/categories/${id}`);
      const oldCategories = getState().user.categories;
      const newCategories = [...oldCategories].filter(item => id !== item._id);
      Notify.success('Category succesfully deleted');
      return newCategories;
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.response.data.message);
      return getState().user.categories;
    }
  }
);

const addCategory = createAsyncThunk(
  'user/addCategory',
  async (credentials, { _, getState, dispatch }) => {
    const newCategory = credentials;
    try {
      const data = await axiosBaseUrl.post('/categories', {
        category: newCategory,
      });
      const oldCategories = getState().user.categories;
      const newCategories = [...oldCategories, data.data.data];
      Notify.success('Category succesfully added');
      return newCategories;
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.response.data.message);
      return getState().user.categories;
    }
  }
);

const updateUserName = createAsyncThunk(
  'user/updateUserName',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosBaseUrl.patch('/users/name', data);

      Notify.success('User name succesfully updated');
      return response.data.data.user.firstName;
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosBaseUrl.patch('/users/avatars', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data.data.avatarURL;
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const userOperations = {
  currentUser,
  removeCategory,
  addCategory,
  updateUserName,
  updateAvatar,
};

export default userOperations;
