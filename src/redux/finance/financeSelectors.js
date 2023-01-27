const setFinance = state => state.finance;
const setTotalBalance = state => state.finance.totalBalance;

export const financeSelectors = {
  setFinance,
  setTotalBalance,
};
