const getToken = state => state.auth.token;
const userSelector = state => state.auth.user;

export const authSelectors = {
  getToken,
  userSelector
};
