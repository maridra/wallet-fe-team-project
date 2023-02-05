import { financeSelectors } from 'redux/finance/financeSelectors';
import { useSelector } from 'react-redux';

import css from './Balance.module.scss';
import hryvniaLogo from '../../assets/Images/currency/hryvniaLogo.svg';

const Balance = () => {
  const userBalance = useSelector(financeSelectors.getTotalBalance);

  return (
    <div className={css.balanceContainer}>
      <p className={css.text}>Your balance</p>
      <div className={css.balanceAmount}>
        <img
          className={css.balanceLogo}
          src={hryvniaLogo}
          alt="logo of hryvnia"
        />
        <p>
          {userBalance
            ? (Math.round(userBalance * 100) / 100)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            : '0.00'}
        </p>
      </div>
    </div>
  );
};
export default Balance;
