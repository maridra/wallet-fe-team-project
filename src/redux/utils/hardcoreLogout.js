import { Unauthorized } from '../auth/authSlice';

const hardcoreLogout = (e, dispatch) => {
  if (e.response.status === 401) {
    dispatch(Unauthorized());
  }
  return null;
};

export default hardcoreLogout;
