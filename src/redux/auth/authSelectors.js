const getToken = state => state.auth.token;
const userSelector = state => state.auth.user;
const isAuth = state => state.auth.isAuth;
const getCategories = state => state.auth.user.categories;

export const authSelectors = {
  getToken,
  userSelector,
  isAuth,
  getCategories,
};
