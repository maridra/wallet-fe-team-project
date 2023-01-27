import { useSelector } from 'react-redux';

import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { modalSelectors } from 'redux/modal/modalSelectors';
import ModalAddTransaction from 'components/Modal/ModalAddTransaction/ModalAddTransaction';
// import Statistic from '../../components/Statistics/Statistics';
// import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile';
// import HomeTab from 'components/HomeTab/HomeTab';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import Navigation from 'components/Navigation/Navigation';

const HomePage = () => {
  const showModalAddTransaction = useSelector(
    modalSelectors.showModalAddTransaction
  );
  return (
    <PageWrapper>
      {showModalAddTransaction && <ModalAddTransaction />}
      <Navigation />
      <Balance />
      <Currency />
      <ButtonAddTransactions></ButtonAddTransactions>
      <div>HomePage</div>
      {/* <Statistic /> */}
      {/* <HomeTab /> */}
      {/* <HomeTabMobile /> */}
    </PageWrapper>
  );
};

export default HomePage;
