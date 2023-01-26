// import { useSelector } from 'react-redux';
// import { finance } from 'redux/selectors';

import css from './Balance.module.scss';
// import HryvniaLogo from '../../assets/Images/currency/hryvniaLogo.svg';

const Balance = () => {
  // const totalBalance = useSelector(finance.totalBalance)

  return (
    <div className={css.balanceContainer}>
      <p>Your balance</p>

      <div className={css.balanceAmount}>
        {/* <img
          className={css.balanceLogo}
          src={HryvniaLogo}
          alt="hryvniaLogo"
          width="18px"
          height="18px"
        /> */}
        {/* <p>{totalBalance}</p> */}
        <span className={css.balanceLogo}>₴</span>
        <p> 24 000.00</p>
      </div>
    </div>
  );
};
export default Balance;
