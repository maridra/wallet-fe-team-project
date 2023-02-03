import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { IoStatsChartOutline, IoStatsChartSharp } from 'react-icons/io5';

import { SelectElements } from './SelectElements';
import scss from './Statistic.module.scss';
import {
  getStatistic,
  getStatisticCategory,
} from '../../redux/statistic/statisticOperation';
import { statisticSelectors } from 'redux/statistic/statisticSelectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  title: {
    display: true,
    fontSize: 60,
    verticalAlign: 'middle',
    floating: true,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const StatisticForm = () => {
  let date = new Date();
  const newMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const numberOfMonth = date.getMonth();

  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(newMonths[numberOfMonth]);
  const [newMonth, setNewMonth] = useState(date.getMonth());
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openAllTransactions, setOpenAllTransactions] = useState(false);

  const handleOpenMonthSelect = () => {
    setOpenMonth(!openMonth);
    setOpenYear(false);
  };
  const handleOpenAllTransactions = () => {
    setOpenAllTransactions(!openAllTransactions);
  };

  const handleOpenYearSelect = () => {
    setOpenYear(!openYear);
    setOpenMonth(false);
  };

  const handleYearChange = name => {
    setYear(name);
    handleOpenYearSelect();
  };
  const dispatch = useDispatch();

  const handleMonthChange = name => {
    // let value = event.target.value;
    setMonth(name);
    setNewMonth(newMonths.indexOf(name));
    handleOpenMonthSelect();
  };

  const blurHandlerMonth = () => {
    setOpenMonth(false);
  };
  const blurHandlerYear = () => {
    setOpenYear(false);
  };
  const stat = useSelector(statisticSelectors.getStatistic);

  const categories = useSelector(statisticSelectors.getStatisticCategory);
  const itemToReplace = categories.findIndex(i => i.name === 'Other expenses');
  const sortedCategory = [
    ...categories,
    [...categories].splice(itemToReplace, 1).pop(),
  ];
  sortedCategory.splice(itemToReplace, 1);

  const data = {
    labels: stat.expensesByPeriod.map(item => item.name),
    datasets: [
      {
        label: 'Total',
        data: stat.expensesByPeriod.map(item => item.amount),
        backgroundColor: stat.expensesByPeriod.map(item => item.color),
        borderColor: stat.expensesByPeriod.map(item => item.color),
        borderWidth: 1,
        cutout: '70%',
      },
    ],
  };

  const AllData = {
    labels: stat.allExpensesByCategory.map(item => item.name),
    datasets: [
      {
        label: 'Total',
        data: stat.allExpensesByCategory.map(item => item.amount),
        backgroundColor: stat.allExpensesByCategory.map(item => item.color),
        borderColor: stat.allExpensesByCategory.map(item => item.color),
        borderWidth: 1,
        cutout: '70%',
      },
    ],
  };

  useEffect(() => {
    dispatch(getStatistic({ month: newMonth + 1, year }));
  }, [dispatch, newMonth, year]);
  return (
    <>
      <div className={scss.sectionTMP}>
        <h1 className={scss.title}>Statistics</h1>
        <div className={scss.mainBox}>
          <div className={scss.doughnut}>
            {!openAllTransactions ? (
              <>
                <Doughnut data={data} options={options} />
                <div className={scss.doughnutMonth}>
                  {stat.expensesPerMonth ? (
                    `₴ ${stat.expensesPerMonth
                      .toLocaleString('uk-ua', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                      .replace(/,/g, '.')}`
                  ) : (
                    <div className={scss.doughnutMonthNoValue}>₴ 0</div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Doughnut data={AllData} options={options} />
                <div className={scss.doughnutMonth}>
                  {stat.totalExpenses ? (
                    `₴ ${stat.totalExpenses
                      .toLocaleString('uk-ua', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                      .replace(/,/g, '.')}`
                  ) : (
                    <div className={scss.doughnutMonthNoValue}>₴ 0</div>
                  )}
                </div>
              </>
            )}
          </div>

          <div className={scss.statisticData}>
            <button
              className={scss.openAllTranscation}
              type="button"
              onClick={handleOpenAllTransactions}
            >
              {!openAllTransactions ? (
                <div className={scss.textAllTransaction}>
                  <div>
                    <IconContext.Provider
                      value={{
                        size: '23px',
                        color: '#4a56e2',
                      }}
                    >
                      <IoStatsChartSharp></IoStatsChartSharp>
                    </IconContext.Provider>
                  </div>
                  <div className={scss.allTransactionText}>
                    Show transactions for the entire period
                  </div>
                </div>
              ) : (
                <div className={scss.textAllTransaction}>
                  <div>
                    <IconContext.Provider
                      value={{
                        size: '23px',
                        color: 'rgba(110, 120, 232, 1)',
                      }}
                    >
                      <IoStatsChartOutline></IoStatsChartOutline>
                    </IconContext.Provider>
                  </div>
                  <div className={scss.allTransactionText}>Show less</div>
                </div>
              )}
            </button>
            {!openAllTransactions ? (
              <div>
                <SelectElements
                  valueMonth={month}
                  valueYear={year}
                  onClickMonth={handleOpenMonthSelect}
                  onClickYear={handleOpenYearSelect}
                  openMonth={openMonth}
                  openYear={openYear}
                  handleMonthChange={handleMonthChange}
                  handleYearChange={handleYearChange}
                  blurHandlerMonth={blurHandlerMonth}
                  blurHandlerYear={blurHandlerYear}
                />
              </div>
            ) : (
              <div className={scss.selectClosed}>
                <SelectElements />
              </div>
            )}
            {/* table  */}
            <table className={scss.table}>
              <thead className={scss.thead}>
                <tr>
                  <th className={scss.theadText}>Category</th>
                  <th className={scss.theadText}>Sum</th>
                </tr>
              </thead>
              <tbody className={scss.tbody}>
                {!openAllTransactions
                  ? sortedCategory.map(item => (
                      <tr className={scss.tableRows} key={uuidv4()}>
                        <td id={item.name}>
                          <div className={scss.squareAndText}>
                            <div
                              className={scss.squareBefore}
                              style={{ backgroundColor: `${item.color}` }}
                            ></div>
                            <div className={scss.textCategory}>{item.name}</div>
                          </div>
                        </td>
                        <td className={scss.tableRows__rightText}>
                          {item.amount
                            .toLocaleString('uk-ua', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                            .replace(/,/g, '.')}
                        </td>
                      </tr>
                    ))
                  : sortedCategory.map(item => (
                      <tr className={scss.tableRows} key={uuidv4()}>
                        <td id={item.name}>
                          <div className={scss.squareAndText}>
                            <div
                              className={scss.squareBefore}
                              style={{ backgroundColor: `${item.color}` }}
                            ></div>
                            <div className={scss.textCategory}>{item.name}</div>
                          </div>
                        </td>
                        <td className={scss.tableRows__rightText}>
                          {item.amount
                            .toLocaleString('uk-ua', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                            .replace(/,/g, '.')}
                        </td>
                      </tr>
                    ))}
              </tbody>
              <tfoot>
                <tr className={scss.footer}>
                  <td className={scss.tableFooter}>Expenses:</td>
                  <td className={scss.tableFooter__expenses}>
                    {!openAllTransactions && stat.expensesPerMonth
                      ? stat.expensesPerMonth
                          .toLocaleString('uk-ua', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                          .replace(/,/g, '.')
                      : openAllTransactions
                      ? stat.totalExpenses
                          .toLocaleString('uk-ua', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                          .replace(/,/g, '.')
                      : 0}
                  </td>
                </tr>
                <tr>
                  <td className={scss.tableFooter}>Income: </td>
                  <td className={scss.tableFooter__income}>
                    {!openAllTransactions && stat.incomePerMonth
                      ? stat.incomePerMonth
                          .toLocaleString('uk-ua', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                          .replace(/,/g, '.')
                      : openAllTransactions
                      ? stat.totalIncome
                          .toLocaleString('uk-ua', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                          .replace(/,/g, '.')
                      : 0}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  selectedYear: state.selectedYear,
  selectedMonth: state.selectedMonth,
});
const mapDispatchToProps = dispatch => ({
  onYearSelected: year => dispatch({ type: 'YEAR_SELECTED', year }),
  onMonthSelected: month => dispatch({ type: 'MONTH_SELECTED', month }),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticForm);
