const getToken = state => state.auth.token;
const userSelector = state => state.auth.user;
const isAuth = state => state.auth.isAuth;

export const authSelectors = {
  getToken,
  userSelector,
  isAuth,
};
