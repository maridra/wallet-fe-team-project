/* import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTotalBalance } from 'redux/finance/financeOperation'; */

import { useSelector } from 'react-redux';
import { userSelectors } from 'redux/user/userSelectors';

import css from './Balance.module.scss';
import hryvniaLogo from '../../assets/Images/currency/hryvniaLogo.svg';

const Balance = () => {
  const userBalance = useSelector(userSelectors.getTotalBalance);
  /*   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalBalance());
  }, [dispatch]); */

  return (
    <div className={css.balanceContainer}>
      <p>Your balance</p>
      <div className={css.balanceAmount}>
        <img src={hryvniaLogo} alt="logo of hryvnia" />
        <p>
          {userBalance
            ? userBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            : '0.00'}
        </p>
      </div>
    </div>
  );
};
export default Balance;
