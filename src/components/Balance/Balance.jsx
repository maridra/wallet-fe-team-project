// import { useSelector } from 'react-redux';
// import { setTotalBalance } from 'redux/selectors';

import css from './Balance.module.scss';

const Balance = () => {
  // const totalBalance = useSelector(setTotalBalance);

  return (
    <div className={css.balanceContainer}>
      <p>Your balance</p>

      <div className={css.balanceAmount}>
        <span className={css.balanceLogo}>₴</span>
        {/* <p>{totalBalance}</p> */}
        <p> 24 000.00</p>
      </div>
    </div>
  );
};
export default Balance;
