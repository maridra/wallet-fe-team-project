const getStatistic = state => state.statistic.data;
const getStatisticCategory = state => state.statistic.data.expensesByPeriod;
const getStatisticCategoryAll = state =>
  state.statistic.data.allExpensesByCategory;

export const statisticSelectors = {
  getStatistic,
  getStatisticCategory,
  getStatisticCategoryAll,
};
