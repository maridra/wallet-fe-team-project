import { Unauthorized } from '../auth/authSlice';

const hardcoreLogout = (e, dispatch) => {
  if (e.response.status === 401) {
    dispatch(Unauthorized());
  }

  e.message = 'The user is not authorized!';

  return null;
};

export default hardcoreLogout;
