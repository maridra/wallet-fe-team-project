const getToken = state => state.auth.token;
const userSelector = state => state.auth.user;
const isAuth = state => state.auth.isAuth;
const getCategories = state => state.auth.user.categories;
const getFirstName = state => state.auth.user?.firstName;
const isLoading = state => state.auth.loading;
const getEmail = state => state.auth.user?.email;
const isVerified = state => state.auth.isVerified;
/* const isAvatarLoading = state => state.auth.avatarLoading; */

export const authSelectors = {
  getToken,
  userSelector,
  isAuth,
  getCategories,
  getFirstName,
  isLoading,
  getEmail,
  isVerified
  /*   isAvatarLoading, */
};
