import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { v4 as uuidv4 } from 'uuid';

import scss from './Statistic.module.scss';
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

const StatisticForm = () => {
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = 'bolder 18px Circe';
      ctx.fillStyle = 'black';
      ctx.textBaseLine = 'middle';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillText(
        // можно сделать через ``
        '₴ 24 000.00',
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  return (
    <>
      <div className={scss.sectionTMP}>
        <h1 className={scss.title}>Statictics</h1>
        <div className={scss.mainBox}>
          <div className={scss.doughnut}>
            <Doughnut data={data} options={options} plugins={[textCenter]} />
          </div>
          <div className={scss.statisticData}>
            <div className={scss.select}>
              <select className={scss.selectItem}>
                {months.map(item => (
                  <option
                    className={scss.selectOption}
                    key={uuidv4()}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
                #331763
              </select>
              <select className={scss.selectItem}>
                {years.map(item => (
                  <option
                    className={scss.selectOption}
                    key={uuidv4()}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
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
                <tr className={scss.tableRows}>
                  <td className={scss.squareBeforeExpenses}>Main Expenses</td>
                  <td className={scss.tableRows__rightText}>8 700.00</td>
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
                </tr>
              </tbody>
              <tfoot>
                <tr className={scss.footer}>
                  <td className={scss.tableFooter}>Expenses:</td>
                  <td className={scss.tableFooter__expenses}>22 549.24</td>
                </tr>
                <tr>
                  <td className={scss.tableFooter}>Income: </td>
                  <td className={scss.tableFooter__income}>27 350.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticForm;
