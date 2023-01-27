const setFinance = state => state.finance;
const setTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.data;

export const financeSelectors = {
  setFinance,
  setTotalBalance,
  getTransactions,
};
