import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { v4 as uuidv4 } from 'uuid';

import scss from './Statistics.module.scss';
import { months, years } from '../../assets/variables/selectorData';

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

const data = {
  labels: [
    'Main expenses',
    'Products',
    'Car',
    'Self care',
    'Child care',
    'Household products',
    'Education',
    'Leisure',
    'Other expenses',
  ],
  datasets: [
    {
      label: 'Total',
      data: [8700, 3800.74, 1500, 800, 2208.5, 300, 3400, 1230, 610],
      backgroundColor: [
        'rgba(254, 208, 87, 1)',
        'rgba(255, 216, 208, 1)',
        'rgba(253, 148, 152, 1)',
        'rgba(197, 186, 255, 1)',
        'rgba(110, 120, 232, 1)',
        'rgba(74, 86, 226, 1)',
        'rgba(129, 225, 255, 1)',
        'rgba(36, 204, 167, 1)',
        'rgba(0, 173, 132, 1)',
      ],
      borderColor: [
        'rgba(254, 208, 87, 1)',
        'rgba(255, 216, 208, 1)',
        'rgba(253, 148, 152, 1)',
        'rgba(197, 186, 255, 1)',
        'rgba(110, 120, 232, 1)',
        'rgba(74, 86, 226, 1)',
        'rgba(129, 225, 255, 1)',
        'rgba(36, 204, 167, 1)',
        'rgba(0, 173, 132, 1)',
      ],
      borderWidth: 1,
      cutout: '70%',
    },
    // {
    //   display: false,
    //   label: '% of Total',
    //   data: [8700, 3800.74, 1500, 800, 2208.5, 300, 3400, 1230, 610],
    //   backgroundColor: [
    //     'rgba(254, 208, 87, 1)',
    //     'rgba(255, 216, 208, 1)',
    //     'rgba(253, 148, 152, 1)',
    //     'rgba(197, 186, 255, 1)',
    //     'rgba(110, 120, 232, 1)',
    //     'rgba(74, 86, 226, 1)',
    //     'rgba(129, 225, 255, 1)',
    //     'rgba(36, 204, 167, 1)',
    //     'rgba(0, 173, 132, 1)',
    //   ],
    //   borderColor: [
    //     'rgba(254, 208, 87, 1)',
    //     'rgba(255, 216, 208, 1)',
    //     'rgba(253, 148, 152, 1)',
    //     'rgba(197, 186, 255, 1)',
    //     'rgba(110, 120, 232, 1)',
    //     'rgba(74, 86, 226, 1)',
    //     'rgba(129, 225, 255, 1)',
    //     'rgba(36, 204, 167, 1)',
    //     'rgba(0, 173, 132, 1)',
    //   ],
    //   borderWidth: 1,
    //   cutout: '70%',
    // },
  ],
};

const Statictics = () => {
  return (
    <>
      <div className={scss.sectionTMP}>
        <h1 className={scss.title}>Statictics</h1>
        <div className={scss.mainBox}>
          <div className={scss.doughnut}>
            <Doughnut data={data} options={options} />
          </div>
          <div>
            <div className={scss.select}>
              <select>
                {months.map(item => (
                  <option key={uuidv4()} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select>
                {years.map(item => (
                  <option key={uuidv4()} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <table className={scss.tableTitle}>
              <thead className={scss.thead}>
                <tr className={scss.tr}>
                  <th>Category</th>
                  <th>Sum</th>
                </tr>
              </thead>
            </table>
            <table className={scss.table}>
              <tbody>
                <tr className={scss.tableRows}>
                  <td>Main Expenses</td>
                  <td>8 700.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td>Products</td>
                  <td>3 800.74</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td>Car</td>
                  <td>1 500.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td>Self Care</td>
                  <td>800.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td>Child care</td>
                  <td>2208.50</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td>Household products</td>
                  <td>300.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td>Education</td>
                  <td>3 400.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td>Leisure</td>
                  <td>1230.00</td>
                </tr>
                <tr className={scss.tableRows}>
                  <td>Other Expenses</td>
                  <td>610.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Expenses:</td>
                  <td>22 549.24</td>
                </tr>
                <tr>
                  <td>Income: </td>
                  <td>27 350.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statictics;
