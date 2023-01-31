import s from './HomeTabMobile.module.scss';
import React from 'react';
import financeOperations from 'redux/finance/financeOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { financeSelectors } from 'redux/finance/financeSelectors';

import { useSelector } from 'react-redux';

const HomeTabMobile = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(financeSelectors.getTransactions);
  const sortedTransactions = sortingTransaction(transactions);

  function sortingTransaction(transactions) {
    if (transactions) {
      const sorted = [...transactions].sort(function (a, b) {
        return (
          Number(b.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$1$2$3')) -
          Number(a.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$1$2$3'))
        );
      });
      return sorted;
    } else {
      return [];
    }
  }

  function userColorUi(item) {
    if (item.transactionType === true) {
      return `${s.operationInfo} ${s.operationInfoIncome}`;
    } else {
      return `${s.operationInfo} ${s.operationInfoExpence}`;
    }
  }

  function colorOfSum(item) {
    if (item.transactionType === true) {
      return `${s.mobileTableInfo} ${s.mobileTableInfoIncome}`;
    } else {
      return `${s.mobileTableInfo} ${s.mobileTableInfoExpence}`;
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
    dispatch(financeOperations.updateTransactions());
  }, [dispatch]);
  return (
    <>
      <ul className={s.operationList}>
        {sortedTransactions.map(item => (
          <li key={item._id} className={s.operationItem}>
            <ul className={s.operationItemUl}>
              <li className={userColorUi(item)}>
                <span className={s.mobileTableHeader}>Date</span>
                <span className={s.mobileTableInfo}>
                  {item.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$3.$2.$1')}
                </span>
              </li>
              <li className={userColorUi(item)}>
                <span className={s.mobileTableHeader}>Type</span>
                <span className={s.mobileTableInfo}>{typeChanger(item)}</span>
              </li>
              <li className={userColorUi(item)}>
                <span className={s.mobileTableHeader}>Category</span>
                <span className={s.mobileTableInfo}>
                  {item.category?.name ? item.category.name : 'Income'}
                </span>
              </li>
              <li className={userColorUi(item)}>
                <span className={s.mobileTableHeader}>Comment</span>
                <span className={s.mobileTableInfo}>{item.comment}</span>
              </li>
              <li className={userColorUi(item)}>
                <span className={s.mobileTableHeader}>Sum</span>
                <span className={colorOfSum(item)}>{item.amount}</span>
              </li>
              <li className={userColorUi(item)}>
                <span className={s.mobileTableHeader}>Balance</span>
                <span className={s.mobileTableInfo}>
                  {item.remainingBalance}
                </span>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeTabMobile;
