const accessToken = state => state.auth.accessToken;
const refreshToken = state => state.auth.refreshToken;
const sid = state => state.auth.sid;
const isLoggedIn = state => state.auth.isLoggedIn;
const firstName = state => state.auth.user.firstName;
const loginLoading = state => state.auth.loading.logIn;
const registrationLoading = state => state.auth.loading.registration;

export const authSelectors = {
  accessToken,
  refreshToken,
  sid,
  isLoggedIn,
  firstName,
  loginLoading,
  registrationLoading,
};
