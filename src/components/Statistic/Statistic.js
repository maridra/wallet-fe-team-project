import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistic } from '../../redux/statistic/statisticOperation';
import { connect } from 'react-redux';
import { statisticSelectors } from 'redux/statistic/statisticSelectors';
import scss from './Statistic.module.scss';
import { SelectForStatisticMonth, SelectForStatisticYear } from './Select';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  title: {
    display: true,
    text: 'My Doughnut Chart',
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

  const handleOpenMonthSelect = () => {
    setOpenMonth(!openMonth);
  };

  const handleOpenYearSelect = () => {
    setOpenYear(!openYear);
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

  const stat = useSelector(statisticSelectors.getStatistic);
  console.log('stat', stat);

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

  useEffect(() => {
    dispatch(getStatistic({ month: newMonth + 1, year }));
  }, [dispatch, newMonth, year]);
  return (
    <>
      <div className={scss.sectionTMP}>
        <h1 className={scss.title}>Statistics</h1>
        <div className={scss.mainBox}>
          <div className={scss.doughnut}>
            <Doughnut data={data} options={options} />
            <div className={scss.doughnutMonth}>
              {stat.expensesPerMonth
                ? `₴ ${stat.expensesPerMonth.toLocaleString('uk-ua', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                : 'No transaction for this period'}
            </div>
          </div>
          <div className={scss.statisticData}>
            <div className={scss.select}>
              <input
                className={scss.selectItem}
                type="text"
                placeholder="Select a month"
                name="month"
                value={month}
                onClick={handleOpenMonthSelect}
                autoComplete="off"
                readOnly
              ></input>
              <input
                className={scss.selectItem}
                type="text"
                placeholder="Select a year"
                name="year"
                value={year}
                onClick={handleOpenYearSelect}
                autoComplete="off"
                readOnly
              ></input>
              <button
                className={scss.openMenuBtn}
                type="button"
                onClick={handleOpenMonthSelect}
              >
                {!openMonth ? (
                  <FiChevronDown
                    className={scss.openMenuBtnIcon}
                  ></FiChevronDown>
                ) : (
                  <FiChevronUp className={scss.openMenuBtnIcon}></FiChevronUp>
                )}
              </button>
              <button
                className={scss.openMenuBtn}
                type="button"
                onClick={handleOpenYearSelect}
              >
                {!openYear ? (
                  <FiChevronDown
                    className={scss.openMenuBtnIcon}
                  ></FiChevronDown>
                ) : (
                  <FiChevronUp className={scss.openMenuBtnIcon}></FiChevronUp>
                )}
              </button>
              {openMonth && (
                <SelectForStatisticMonth
                  handleMonth={handleMonthChange}
                ></SelectForStatisticMonth>
              )}
              {openYear && (
                <SelectForStatisticYear
                  handleYear={handleYearChange}
                ></SelectForStatisticYear>
              )}
              {/* <select
                className={scss.selectItem}
                value={month}
                onChange={handleMonthChange}
              >
                {months.map(item => (
                  <option
                    className={scss.selectOption}
                    key={uuidv4()}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                className={scss.selectItem}
                value={year}
                onChange={handleYearChange}
              >
                {years.map(item => (
                  <option
                    className={scss.selectOption}
                    key={uuidv4()}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
              </select> */}
            </div>
            {/* table  */}
            <table className={scss.table}>
              <thead className={scss.thead}>
                <tr>
                  <th>Category</th>
                  <th>Sum</th>
                </tr>
              </thead>
              <tbody>
                {stat.expensesByPeriod.map(item => (
                  <tr className={scss.tableRows} key={uuidv4()}>
                    <td
                      className={scss.squareBeforeExpenses}
                      id={item.name}
                      style={{ backgroundColor: `${item.color}` }}
                    >
                      {item.name}
                    </td>
                    <td className={scss.tableRows__rightText}>
                      {item.amount.toLocaleString('uk-ua', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                ))}
                {/* <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeExpenses}>Main Expenses</td>
                  <td className={scss.tableRows__rightText}></td>
                </tr>
                <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeProducts}>Products</td>
                  <td className={scss.tableRows__rightText}>3 800.74</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeCar}>Car</td>
                  <td className={scss.tableRows__rightText}>1 500.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeSelf}>Self Care</td>
                  <td className={scss.tableRows__rightText}>800.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeChild}>Child care</td>
                  <td className={scss.tableRows__rightText}>2208.50</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeHousehold}>
                    Household products
                  </td>
                  <td className={scss.tableRows__rightText}>300.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeEducation}>Education</td>
                  <td className={scss.tableRows__rightText}>3 400.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeLeisure}>Leisure</td>
                  <td className={scss.tableRows__rightText}>1230.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeOther}>Other Expenses</td>
                  <td className={scss.tableRows__rightText}>610.00</td>
                </tr> */}
              </tbody>
              <tfoot>
                <tr className={scss.footer}>
                  <td className={scss.tableFooter}>Expenses:</td>
                  <td className={scss.tableFooter__expenses}>
                    {stat.expensesPerMonth
                      ? stat.expensesPerMonth.toLocaleString('uk-ua', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : 0}
                  </td>
                </tr>
                <tr>
                  <td className={scss.tableFooter}>Income: </td>
                  <td className={scss.tableFooter__income}>
                    {stat.incomePerMonth
                      ? stat.incomePerMonth.toLocaleString('uk-ua', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
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
