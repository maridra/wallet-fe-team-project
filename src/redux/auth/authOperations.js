import { createAsyncThunk } from '@reduxjs/toolkit';
import { authSelectors } from './authSelectors';
import { axiosBaseUrl, token } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';

const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    const { email, password, username } = credential;

    try {
      await axiosBaseUrl.post('/auth/register', { email, password, username });
      const { data } = await axiosBaseUrl.post('/auth/login', {
        email,
        password,
      });
      token.set(data.accessToken);
      if (!thunkAPI.getState().dailyRate.dataUser) {
        return data;
      }

      // Check if user already submit form
      const dataUser = thunkAPI.getState().dailyRate.dataUser;
      const userID = data.user.id;
      if (thunkAPI.getState().dailyRate.dataUser) {
        await axiosBaseUrl.post(`/daily-rate/${userID}`, dataUser);
        return data;
      }
    } catch (e) {
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credential, thunkAPI) => {
  const { email, password } = credential;

  try {
    const { data } = await axiosBaseUrl.post('/auth/login', {
      email,
      password,
    });
    token.set(data.accessToken);

    return data;
  } catch (e) {
    Notify.failure(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosBaseUrl.post('/auth/logout');
    token.unset();
  } catch (e) {
    Notify.failure(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const refreshToken = authSelectors.refreshToken(thunkAPI.getState());
  const sid = authSelectors.sid(thunkAPI.getState());

  if (refreshToken === null) return thunkAPI.rejectWithValue(`No token`);
  token.set(refreshToken);

  try {
    const { data: refreshData } = await axiosBaseUrl.post('/auth/refresh', {
      sid,
    });
    token.set(refreshData.newAccessToken);
    const { data: userData } = await axiosBaseUrl.get('/user');
    return { refreshData, userData };
  } catch (e) {
    Notify.failure(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  refresh,
};

export default authOperations;
