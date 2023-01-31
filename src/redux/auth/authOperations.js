import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl, token } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';
import userOperations from 'redux/user/userOperations';
import hardcoreLogout from 'redux/utils/hardcoreLogout';

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
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    const { email, password } = credentials;
    try {
      const { data } = await axiosBaseUrl.post('/auth/login', {
        email,
        password,
      });

      const currentToken = data.data.token;
      token.set(currentToken);
      dispatch(userOperations.currentUser());
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

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await axiosBaseUrl.post('/auth/logout');
      token.unset();
    } catch (e) {
      hardcoreLogout(e, dispatch);
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue, dispatch }) => {
    try {
      const currentToken = getState().auth.token;
      if (!currentToken) {
        throw new Error('Error');
      }
      token.set(currentToken);
      dispatch(userOperations.currentUser());
      return 1;
    } catch (e) {
      hardcoreLogout(e, dispatch);
      return rejectWithValue(e.message);
    }
  }
);

const verifyEmail = createAsyncThunk(
  'auth/verify/:verificationToken',
  async (credentials, { rejectWithValue }) => {
    const { verificationToken } = credentials;
    try {
      const { data } = await axiosBaseUrl.get(
        `/auth/verify/${verificationToken}`,
        verificationToken
      );
      return data;
    } catch (error) {
      const { data, status } = error.response;
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

const resendVerification = createAsyncThunk(
  'users/verify', async (credentials, { rejectWithValue }) => {
  try {
    const {data} = await axiosBaseUrl.post('/users/verify', credentials);
    return data;
  } catch (error) {
    Notify.failure(error.message);
    return rejectWithValue(error.message);
  }
  }
)

/* const addCategory = createAsyncThunk(
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
      Notify.failure('It seems like this category already exist');
      return getState().auth.user.categories;
    }
  }
); */

/* const removeCategory = createAsyncThunk(
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
 */
/* const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (data, thunkAPI) => {
    try {
      const response = await axiosBaseUrl.patch('/users/avatars', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data.data.avatarURL;
    } catch (e) {
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
); */

const authOperations = {
  register,
  logIn,
  logOut,
  refresh,
  /*   updateAvatar, */
  verifyEmail,
  resendVerification
};

export default authOperations;
