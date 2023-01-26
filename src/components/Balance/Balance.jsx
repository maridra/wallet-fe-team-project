import { useSelector } from 'react-redux';
import { financeSelectors } from '../../redux/finance/financeSelectors';

import css from './Balance.module.scss';

const Balance = () => {
  const totalBalance = useSelector(financeSelectors.setTotalBalance);

  return (
    <div className={css.balanceContainer}>
      <p>Your balance</p>
      <div className={css.balanceAmount}>
        <span className={css.balanceLogo}>₴</span>
        <p>{totalBalance ? totalBalance : '0, 00'}</p>
      </div>
    </div>
  );
};
export default Balance;
