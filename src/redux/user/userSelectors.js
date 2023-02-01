const getId = state => state.user.id;
const getFirstName = state => state.user.firstName;
const getEmail = state => state.user.email;
const getCategories = state => state.user.categories;
const getSubscription = state => state.user.subscription;
const getTotalBalance = state => state.user.totalBalance;
const getAvatarURL = state => state.user.avatarURL;
const isAvatarLoading = state => state.user.avatarLoading;

export const userSelectors = {
  getId,
  getFirstName,
  getEmail,
  getCategories,
  getSubscription,
  getTotalBalance,
  getAvatarURL,
  isAvatarLoading,
};
