import scss from './Statistic.module.scss';
import { Doughnut } from 'react-chartjs-2';

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
  ],
};
function coolFunction({ balance }) {
  return {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      let { ctx } = chart;
      ctx.save();
      ctx.font = 'bolder 18px Circe';
      ctx.fillStyle = 'black';
      ctx.textBaseLine = 'middle';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillText(
        // `₴ ${stat.balance}`,
        balance,
        // '₴ 24 000.00',
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
}

const DoughnutForm = props => {
  return (
    <div className={scss.doughnut}>
      <Doughnut
        data={data}
        options={options}
        plugins={[coolFunction(props.stat)]}
      />
    </div>
  );
};

export default DoughnutForm;
