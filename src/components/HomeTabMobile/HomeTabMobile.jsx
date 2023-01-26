import s from './HomeTabMobile.module.scss';

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

function userColorUi(item) {
  if (item.Type === '+') {
    return `${s.operationInfo} ${s.operationInfoIncome}`;
  } else {
    return `${s.operationInfo} ${s.operationInfoExpence}`;
  }
}

function colorOfSum(item) {
  if (item.Type === '+') {
    return `${s.mobileTableInfo} ${s.mobileTableInfoIncome}`;
  } else {
    return `${s.mobileTableInfo} ${s.mobileTableInfoExpence}`;
  }
}

const HomeTabMobile = () => {
  return (
    <ul className={s.operationList}>
      {backEnd.map(item => (
        <li className={s.operationItem}>
          <ul className={s.operationItemUl}>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Date</span>
              <span className={s.mobileTableInfo}>{item.Date}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Type</span>
              <span className={s.mobileTableInfo}>{item.Type}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Category</span>
              <span className={s.mobileTableInfo}>{item.Category}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Comment</span>
              <span className={s.mobileTableInfo}>{item.Comment}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Sum</span>
              <span className={colorOfSum(item)}>{item.Sum}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Balance</span>
              <span className={s.mobileTableInfo}>{item.Balance}</span>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default HomeTabMobile;
