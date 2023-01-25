import { Outlet } from 'react-router-dom';
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

function userColorUi(item) {
  if (item.Type === '+') {
    return `${s.operationInfo} ${s.operationInfoIncome}`;
  } else {
    return `${s.operationInfo} ${s.operationInfoExpence}`;
  }
}

const HomeTab = () => {
  return (
    <ul className={s.operationList}>
      {backEnd.map(item => (
        <li className={s.operationItem}>
          <ul className={s.operationItemUl}>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Date</span>
              <span>{item.Date}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Type</span>
              <span>{item.Type}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Category</span>
              <span>{item.Category}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Comment</span>
              <span>{item.Comment}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Sum</span>
              <span>{item.Sum}</span>
            </li>
            <li className={userColorUi(item)}>
              <span className={s.mobileTableHeader}>Balance</span>
              <span>{item.Balance}</span>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default HomeTab;
