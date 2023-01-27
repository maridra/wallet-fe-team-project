import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { useSelector } from 'react-redux';
import { modalSelectors } from 'redux/modal/modalSelectors';
import ModalAddTransaction from 'components/Modal/ModalAddTransaction/ModalAddTransaction';
// import Statistic from '../../components/Statistics/Statistics';
/* import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile'; */
/* import HomeTab from 'components/HomeTab/HomeTab'; */

import s from '../HomePage/HomePage.module.scss';

const HomePage = () => {
  const showModalAddTransaction = useSelector(
    modalSelectors.showModalAddTransaction
  );
  return (
    <>
      <div className={s.bg_page}>
        <div className={s.bg_blur}>
          <div className={s.container}>
            <div className={s.wrapper}>
              {showModalAddTransaction && <ModalAddTransaction />}
              <Balance />
              <Currency />
              <ButtonAddTransactions></ButtonAddTransactions>
              <div>HomePage</div>
              {/* <Statistic /> */}
              {/* <HomeTab /> */}
              {/*<HomeTabMobile /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
