import s from './HomeTab.module.scss';

const backEnd = [
  {
    Date: '04.05.2021',
    Type: '-',
    Category: 'Other',
    Comment: 'Expence',
    Sum: '5000',
    Balance: '10000',
  },
  {
    Date: '04.05.2021',
    Type: '-',
    Category: 'Other',
    Comment: 'Expence',
    Sum: '5000',
    Balance: '10000',
  },
  {
    Date: '04.05.2021',
    Type: '+',
    Category: 'Other',
    Comment: 'Expence',
    Sum: '5000',
    Balance: '10000',
  },
];

const HomeTab = () => {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.tableHeader}>
          <th className={s.tableHeaderItem}>Date</th>
          <th className={s.tableHeaderItem}>Type</th>
          <th className={s.tableHeaderItem}>Category</th>
          <th className={s.tableHeaderItem}>Comment</th>
          <th className={s.tableHeaderItem}>Sum</th>
          <th className={s.tableHeaderItem}>Balance</th>
        </tr>
      </thead>
      <tbody>
        {backEnd.map(item => (
          <tr className={s.tableHeader}>
            <th>{item.Date}</th>
            <th>{item.Type}</th>
            <th>{item.Category}</th>
            <th>{item.Comment}</th>
            <th>{item.Sum}</th>
            <th>{item.Balance}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HomeTab;
