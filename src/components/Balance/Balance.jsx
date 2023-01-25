// import { useSelector } from 'react-redux';
// import { finance } from 'redux/selectors';

import css from './Balance.module.scss';

const Balance = () => {
  // const totalBalance = useSelector(finance.totalBalance)

  return (
    <div className={css.balanceContainer}>
      <p>Your balance</p>

      <div className={css.balanceAmount}>
        {/* <p>{totalBalance}</p> */}
        <p>24000.00</p>
      </div>
    </div>
  );
};
export default Balance;
