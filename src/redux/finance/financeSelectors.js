const setFinance = state => state.finance;
const setTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.data;
const isLoading = state => state.finance.isLoading;

export const financeSelectors = {
  setFinance,
  setTotalBalance,
  getTransactions,
  isLoading,
};
