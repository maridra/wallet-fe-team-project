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
    const errorMessage = error.response.data.message.toString();
    Notify.failure(errorMessage);
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
    const errorMessage = error.response.data.message.toString();
    Notify.failure(errorMessage);
  }
}
const passwordAPI = { forgotPasswordAPI, createPasswordAPI };

export default passwordAPI;
