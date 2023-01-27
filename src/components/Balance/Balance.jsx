import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance/financeSelectors';

import css from './Balance.module.scss';
import hryvniaLogo from '../../assets/Images/currency/hryvniaLogo.svg';

const Balance = () => {
  const totalBalance = useSelector(financeSelectors.setTotalBalance);

  return (
    <div className={css.balanceContainer}>
      <p>Your balance</p>
      <div className={css.balanceAmount}>
        <img src={hryvniaLogo} alt="logo of hryvnia" />
        <p>{totalBalance ? totalBalance : '0, 00'}</p>
      </div>
    </div>
  );
};
export default Balance;
