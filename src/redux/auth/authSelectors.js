const getToken = state => state.auth.token;
const userSelector = state => state.auth.user;
const isAuth = state => state.auth.isAuth;
const getCategories = state => state.auth.user.categories;
const getFirstName = state => state.auth.user?.firstName;
const isLoading = state => state.auth.loading;

export const authSelectors = {
  getToken,
  userSelector,
  isAuth,
  getCategories,
  getFirstName,
  isLoading,
};
