/* eslint-disable react-hooks/exhaustive-deps */
import s from './HomeTab.module.scss';
import React from 'react';
import financeOperation from 'redux/finance/financeOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { financeSelectors } from 'redux/finance/financeSelectors';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { axiosBaseUrl } from '../../redux/tokenSettingsAxios';

const HomeTab = ({ currentPage, setCurrentPage, fetching, setFetching }) => {
  const dispatch = useDispatch();
  const transactionArea = useRef();

  async function fetchData(currentPage, dispatch) {
    const { data } = await axiosBaseUrl.get(
      `transactions?page=${currentPage}&limit=20`
    );
    await dispatch(financeOperation.updateTransactionsNew(data));
    setCurrentPage(prevState => prevState + 1);
    setFetching(false);
  }

  useEffect(() => {
    if (fetching) {
      fetchData(currentPage, dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  const scrollHandler = e => {
    if (
      e.target.scrollHeight -
        (e.target.scrollTop + transactionArea.current.clientHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const checkTransactions = useSelector(financeSelectors.getTransactions);
  useEffect(() => {
    if (checkTransactions.length < 20) {
      dispatch(financeOperation.updateTransactions());
    }
  }, []);

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

  function dateMaker(item) {
    const date = item.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, `$3.$2.$1`);
    const leftPart = date.slice(0, 6);
    const rightPart = date.slice(-2);
    const formatDate = leftPart + rightPart;
    return formatDate;
  }
  return (
    <>
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
        <tbody
          className={s.tableContent}
          onScroll={scrollHandler}
          ref={transactionArea}
        >
          {sortedTransactions.map(item => (
            <tr key={item._id} className={s.tableRow}>
              <td className={`${s.tableRowItem} ${s.date}`}>
                {dateMaker(item)}
              </td>
              <td className={`${s.tableRowItem} ${s.type}`}>
                {typeChanger(item)}
              </td>
              <td className={`${s.tableRowItem} ${s.category}`}>
                {item.category?.name ? item.category.name : 'Income'}
              </td>
              <td className={`${s.tableRowItem} ${s.comment}`}>
                {item.comment}
              </td>
              <td className={colorOfSum(item)}>{item.amount}</td>
              <td className={`${s.tableRowItem} ${s.balance}`}>
                {item.remainingBalance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HomeTab;
