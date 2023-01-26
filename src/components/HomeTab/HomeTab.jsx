import s from './HomeTab.module.scss';

const backEnd = [
  {
    Date: '04.05.2021',
    Type: '-',
    Category: 'Other',
    Comment: 'Expense',
    Sum: '5000',
    Balance: '10000',
  },
  {
    Date: '04.05.2021',
    Type: '-',
    Category: 'Other',
    Comment: 'Buy a new car for myself',
    Sum: '5000',
    Balance: '10000',
  },
  {
    Date: '04.05.2021',
    Type: '+',
    Category: 'Other',
    Comment: 'Expense',
    Sum: '5000',
    Balance: '10000',
  },
];

const HomeTab = () => {
  return (
    <table className={s.table}>
      <thead className={s.tableHeaderTh}>
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
          <tr className={s.tableRow}>
            <th className={s.tableRowItem}>{item.Date}</th>
            <th className={s.tableRowItem}> {item.Type}</th>
            <th className={s.tableRowItem}>{item.Category}</th>
            <th className={s.tableRowItem}>{item.Comment}</th>
            <th className={s.tableRowItem}>{item.Sum}</th>
            <th className={s.tableRowItem}>{item.Balance}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HomeTab;
