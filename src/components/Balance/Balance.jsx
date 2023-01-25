// import { useSelector } from 'react-redux';
// import { finance } from 'redux/selectors';

import css from './Balance.module.scss';
import HryvniaLogo from './hryvniaLogo.svg';

const Balance = () => {
  // const totalBalance = useSelector(finance.totalBalance)

  return (
    <div className={css.balanceContainer}>
      <p>Your balance</p>

      <div className={css.balanceAmount}>
        <img
          src={HryvniaLogo}
          alt="hryvniaLogo"
          width="18"
          height="18"
          font-weight="700"
        />
        {/* <p>{totalBalance}</p> */} <p>24000.00</p>
      </div>
    </div>
  );
};
export default Balance;
