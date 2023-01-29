import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import Media from 'react-media';

import { modalSelectors } from 'redux/modal/modalSelectors';

import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransaction from 'components/Modal/ModalAddTransaction/ModalAddTransaction';
import StatisticPage from '../../components/StatisticPage/StatisticPage';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile';
import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';

const HomePage = () => {
  let location = useLocation();
  const isStatistic = location.pathname === '/statistic';
  const isCurrency = location.pathname === '/currency';

  const showModalAddTransaction = useSelector(
    modalSelectors.showModalAddTransaction
  );

  return (
    <>
      <Navigation>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px)',
          }}
        >
          {matches => (
            <>
              {matches.small && (
                <>
                  {!isStatistic && !isCurrency && <Balance />}
                  {isCurrency && <Currency />}
                  {isStatistic && <StatisticPage />}
                  {!isStatistic && !isCurrency && <HomeTabMobile />}
                </>
              )}
              {matches.medium && (
                <>
                  {isCurrency && <Navigate to="/" />}
                  {showModalAddTransaction && <ModalAddTransaction />}
                  <Balance />
                  <Currency />
                  {isStatistic && <StatisticPage />}
                  {!isStatistic && <HomeTab />}
                </>
              )}
            </>
          )}
        </Media>
      </Navigation>
      <ButtonAddTransactions />
    </>
  );
};

export default HomePage;
