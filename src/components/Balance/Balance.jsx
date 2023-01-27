import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance/financeSelectors';
import { getTotalBalance } from 'redux/finance/financeOperation';

import css from './Balance.module.scss';
import hryvniaLogo from '../../assets/Images/currency/hryvniaLogo.svg';

const Balance = () => {
  const userBalance = useSelector(financeSelectors.setTotalBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalBalance());
  }, [dispatch]);

  return (
    <div className={css.balanceContainer}>
      <p>Your balance</p>
      <div className={css.balanceAmount}>
        <img src={hryvniaLogo} alt="logo of hryvnia" />
        <p>
          {userBalance
            ? userBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            : '0. 00'}
        </p>
      </div>
    </div>
  );
};
export default Balance;
