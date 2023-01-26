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

function colorOfSum(item) {
  if (item.Type === '+') {
    return `${s.tableRowItem} ${s.sum} ${s.sumColorIncome}`;
  } else {
    return `${s.tableRowItem} ${s.sum} ${s.sumColorExpense}`;
  }
}

const HomeTab = () => {
  return (
    <table className={s.table}>
      <thead className={s.tableHeaderTh}>
        <tr className={s.tableHeader}>
          <th className={`${s.tableTitle} ${s.date}`}>Date</th>
          <th className={`${s.tableTitle} ${s.type}`}>Type</th>
          <th className={`${s.tableTitle} ${s.category}`}>Category</th>
          <th className={`${s.tableTitle} ${s.comment}`}>Comment</th>
          <th className={`${s.tableTitle} ${s.sum}`}>Sum</th>
          <th className={`${s.tableTitle} ${s.balance}`}>Balance</th>
        </tr>
      </thead>
      <tbody>
        {backEnd.map(item => (
          <tr className={s.tableRow}>
            <th className={`${s.tableRowItem} ${s.date}`}>{item.Date}</th>
            <th className={`${s.tableRowItem} ${s.type}`}> {item.Type}</th>
            <th className={`${s.tableRowItem} ${s.category}`}>
              {item.Category}
            </th>
            <th className={`${s.tableRowItem} ${s.comment}`}>{item.Comment}</th>
            <th className={colorOfSum(item)}>{item.Sum}</th>
            <th className={`${s.tableRowItem} ${s.balance}`}>{item.Balance}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HomeTab;
