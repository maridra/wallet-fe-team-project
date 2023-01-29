import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl, token } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosBaseUrl.post('/auth/register', credentials);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if (status === 400) {
        Notify.failure('Please, check your entered data!');
      }
      if (status === 409) {
        Notify.failure(data.message);
      }
      if (status === 500) {
        Notify.failure(
          'Oops, something wrong on our server :( Please, try again'
        );
      }
      return rejectWithValue({ data, status });
    }
  }
  // Check if user already submit form

  // const dataUser = thunkAPI.getState().dailyRate.dataUser;
  // const userID = data.user.id;
  // if (thunkAPI.getState().dailyRate.dataUser) {
  //   await axiosBaseUrl.post(`/daily-rate/${userID}`, dataUser);
  //   return data;
  // }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, getState }) => {
    const { email, password } = credentials;
    try {
      const { data } = await axiosBaseUrl.post('/auth/login', {
        email,
        password,
      });

      const currentToken = data.data.token;
      token.set(currentToken);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if (status === 400) {
        Notify.failure('Please, check your entered data!');
      }
      if (status === 401) {
        Notify.failure(data.message);
      }
      if (status === 500) {
        Notify.failure(
          'Oops, something wrong on our server :( Please, try again'
        );
      }
      return rejectWithValue({ data, status });
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosBaseUrl.post('/auth/logout');
    token.unset();
  } catch (e) {
    Notify.failure(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    try {
      const currentToken = getState().auth.token;
      if (!currentToken) {
        throw new Error('Error');
      }
      token.set(currentToken);
      return 1;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addCategory = createAsyncThunk(
  'auth/addCategory',
  async (credentials, { _, getState }) => {
    const newCategory = credentials;
    try {
      const data = await axiosBaseUrl.post('/categories', {
        category: newCategory,
      });
      const oldCategories = getState().auth.user.categories;
      const newCategories = [...oldCategories, data.data.data];
      Notify.success('Category succesfully added');
      return newCategories;
    } catch (error) {
      Notify.failure('It seems like this category is already exist');
      return getState().auth.user.categories;
    }
  }
);

const removeCategory = createAsyncThunk(
  'auth/removeCategory',
  async (credentials, { _, getState }) => {
    const id = credentials;
    try {
      await axiosBaseUrl.delete(`/categories/${id}`);
      const oldCategories = getState().auth.user.categories;
      const newCategories = [...oldCategories].filter(item => id !== item._id);
      Notify.success('Category succesfully deleted');
      return newCategories;
    } catch (error) {
      Notify.failure('Opps, something went wrong');
      return getState().auth.user.categories;
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  refresh,
  addCategory,
  removeCategory,
};

export default authOperations;
