import axios from 'axios';
import { Notify } from 'notiflix';
import { baseURL } from 'redux/tokenSettingsAxios';

async function forgotPasswordAPI(email) {
  try {
    const response = await axios.post(`${baseURL}/auth/forgot-password`, {
      email,
    });

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

async function createPasswordAPI(id, token, password) {
  try {
    const response = await axios.post(
      `${baseURL}/auth/reset-password/${id}/${token}`,
      {
        password,
      }
    );
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
const passwordAPI = { forgotPasswordAPI, createPasswordAPI };

export default passwordAPI;
