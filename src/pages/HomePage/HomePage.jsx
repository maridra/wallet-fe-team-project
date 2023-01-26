import Currency from 'components/Currency/Currency';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import Statistic from '../../components/Statistics/Statistics';
// import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile';
// import HomeTab from 'components/HomeTab/HomeTab';

const HomePage = () => {
  return (
    <>
      <Currency />
      <ButtonAddTransactions></ButtonAddTransactions>
      <div>HomePage</div>
      {/* <Statistic /> */}
      {/* <HomeTab /> */}
      {/* <HomeTabMobile /> */}
    </>
  );
};

export default HomePage;
