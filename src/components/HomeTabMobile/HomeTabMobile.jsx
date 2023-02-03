import s from './HomeTabMobile.module.scss';
import React from 'react';
import financeOperation from 'redux/finance/financeOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { financeSelectors } from 'redux/finance/financeSelectors';
import { axiosBaseUrl } from '../../redux/tokenSettingsAxios';
import { Loader } from 'components';
import EllipsisText from 'react-ellipsis-text';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';

const HomeTabMobile = ({
  currentPage,
  setCurrentPage,
  fetching,
  setFetching,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(financeSelectors.isLoading);
  const totalCountTransactions = useSelector(
    financeSelectors.totalCountTransactions
  );
  const transactionsCheck = useSelector(financeSelectors.getTransactions);

  async function fetchData(currentPage, dispatch) {
    if (totalCountTransactions > transactionsCheck.length) {
      const { data } = await axiosBaseUrl.get(
        `transactions?page=${currentPage}&limit=20`
      );
      await dispatch(financeOperation.updateTransactionsNew(data));
      setCurrentPage(prevState => prevState + 1);
      setFetching(false);
    }
  }

  useEffect(() => {
    if (fetching) {
      fetchData(currentPage, dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  const checkTransactions = useSelector(financeSelectors.getTransactions) || [];
  useEffect(() => {
    if (checkTransactions.length < 10) {
      dispatch(financeOperation.updateTransactions());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  });

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

  function dateMaker(item) {
    const date = item.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, `$3.$2.$1`);
    const leftPart = date.slice(0, 6);
    const rightPart = date.slice(-2);
    const formatDate = leftPart + rightPart;
    return formatDate;
  }
  return (
    <>
      <ul className={s.operationList}>
        {isLoading ? (
          <li className={s.loader}>
            <Loader height={'80'} width={'80'} />
          </li>
        ) : (
          sortedTransactions.map(item => (
            <li key={item._id} className={s.operationItem}>
              <ul className={s.operationItemUl}>
                <li className={userColorUi(item)}>
                  <span className={s.mobileTableHeader}>Date</span>
                  <span className={s.mobileTableInfo}>{dateMaker(item)}</span>
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
                  <span className={s.mobileTableInfo}>
                    {' '}
                    <EllipsisText
                      text={item.comment || ''}
                      length={16}
                      onClick={() => {
                        Notify.info(item.comment);
                      }}
                    />
                  </span>
                </li>
                <li className={userColorUi(item)}>
                  <span className={s.mobileTableHeader}>Sum</span>
                  <span className={colorOfSum(item)}>
                    {(Math.round(item.amount * 100) / 100).toFixed(2)}
                  </span>
                </li>
                <li className={userColorUi(item)}>
                  <span className={s.mobileTableHeader}>Balance</span>
                  <span className={s.mobileTableInfo}>
                    {(Math.round(item.remainingBalance * 100) / 100).toFixed(2)}
                  </span>
                </li>
              </ul>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default HomeTabMobile;
