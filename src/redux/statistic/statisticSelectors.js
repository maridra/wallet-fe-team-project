const getStatistic = state => state.statistic.data;
const getStatisticCategory = state => state.statistic.data.expensesByPeriod;

export const statisticSelectors = {
  getStatistic,
  getStatisticCategory,
};
