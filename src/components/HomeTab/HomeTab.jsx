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
    Type: '-',
    Category: 'Other',
    Comment: 'Expence',
    Sum: '5000',
    Balance: '10000',
  },
];

const HomeTab = () => {
  return (
    <ul className={s.operationList}>
      {backEnd.map(item => (
        <li className={s.operationItem}>
          <ul>
            <li className={s.operationInfo}>
              <span className={s.mobileTableHeader}>Date</span>
              <span>{item.Date}</span>
            </li>
            <li className={s.operationInfo}>
              <span className={s.mobileTableHeader}>Type</span>
              <span>{item.Type}</span>
            </li>
            <li className={s.operationInfo}>
              <span className={s.mobileTableHeader}>Category</span>
              <span>{item.Category}</span>
            </li>
            <li className={s.operationInfo}>
              <span className={s.mobileTableHeader}>Comment</span>
              <span>{item.Comment}</span>
            </li>
            <li className={s.operationInfo}>
              <span className={s.mobileTableHeader}>Sum</span>
              <span>{item.Sum}</span>
            </li>
            <li className={s.operationInfo}>
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
