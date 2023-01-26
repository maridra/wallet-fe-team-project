import s from './HomeTab.module.scss';
import React from 'react';
import financeOperations from 'redux/finance/financeOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import financeSelectors from 'redux/finance/financeSelectors';
import { useSelector } from 'react-redux';

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
  const dispatch = useDispatch();

  const transactions = useSelector(financeSelectors.getTransactions);

  function colorOfSum(item) {
    if (item.transactionType === true) {
      return `${s.tableRowItem} ${s.sum} ${s.sumColorIncome}`;
    } else {
      return `${s.tableRowItem} ${s.sum} ${s.sumColorExpense}`;
    }
  }

  function typeChanger(item) {
    if (item.transactionType === true) {
      return '+';
    } else {
      return '-';
    }
  }
  useEffect(() => {
    console.log('123');
    dispatch(financeOperations.updateTransactions());
  }, [dispatch]);
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
        {transactions.map(item => (
          <tr className={s.tableRow}>
            <th className={`${s.tableRowItem} ${s.date}`}>
              {item.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$3.$2.$1')}
            </th>
            <th className={`${s.tableRowItem} ${s.type}`}>
              {typeChanger(item)}
            </th>
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
