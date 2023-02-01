const setFinance = state => state.finance;
const getTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.data;
const isLoading = state => state.finance.isLoading;

export const financeSelectors = {
  setFinance,
  getTotalBalance,
  getTransactions,
  isLoading,
};
