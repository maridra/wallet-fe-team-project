import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader.jsx';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { modalSelectors } from 'redux/modal/modalSelectors';
import ModalAddTransaction from 'components/Modal/ModalAddTransaction/ModalAddTransaction';
import ModalLogout from 'components/Modal/ModalLogout/ModalLogout';

// import Statistic from '../../components/Statistics/Statistics';

import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile';
import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';


const HomePage = () => {
  const showModalAddTransaction = useSelector(
    modalSelectors.showModalAddTransaction
  );
  const showModalLogout = useSelector(modalSelectors.showModalLogout);
  return (
    <>
      {showModalAddTransaction && <ModalAddTransaction />}

      {showModalLogout && <ModalLogout />}

      <Navigation />

      <Balance />
      <Currency />
      <ButtonAddTransactions></ButtonAddTransactions>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <div>HomePage</div>
      {/* <Statistic /> */}
      <HomeTab />
      <HomeTabMobile />
    </>
  );
};

export default HomePage;
