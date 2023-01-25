import scss from './Statistics.module.scss';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);
// Chart.overrides.plugins.legend.display = false;

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
const data = {
  // options: {
  //   legend: {
  //     display: '',
  //   },
  // },
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

  // labels: {
  //   hidden: true,
  // },

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
      // width: '288px';
      summaryTitle: 'TOTAL:',
    },
    // {
    //   // label: '# of Votes',
    //   hidden: true,
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
    //   // width: '288px';
    //   summaryTitle: 'TOTAL:',
    // },
  ],
};

const Statictics = () => {
  return (
    <>
      <h1 className={scss.title}>Statictics</h1>
      <div className={scss.doughnut}>
        <Doughnut data={data} options={options} />
      </div>
      <div></div>
    </>
  );
};

export default Statictics;
