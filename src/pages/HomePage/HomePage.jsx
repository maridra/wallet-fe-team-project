import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import Media from 'react-media';

import { modalSelectors } from 'redux/modal/modalSelectors';

import ModalAddTransaction from 'components/Modal/ModalAddTransaction/ModalAddTransaction';
import StatisticPage from '../StatisticPage/StatisticPage';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile';
import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from '../../components/Navigation/Navigation';

import s from './HomePage.module.scss';

const HomePage = () => {
  let location = useLocation();
  const isStatistic = location.pathname === '/statistic';
  const isCurrency = location.pathname === '/currency';

  const showModalAddTransaction = useSelector(
    modalSelectors.showModalAddTransaction
  );

  return (
    <div className={s.pageWrapper}>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <>
                <Navigation />
                <div className={s.financeWrapper__dashboard}>
                  {!isStatistic && !isCurrency && <Balance />}
                  {!isStatistic && !isCurrency && <HomeTabMobile />}
                </div>
                {isCurrency && <Currency />}
                {isStatistic && <StatisticPage />}
              </>
            )}
            {matches.medium && (
              <>
                {isCurrency && <Navigate to="/" />}
                <div className={s.financeWrapper}>
                  <div className={s.financeWrapper__dashboard}>
                    <div className={s.financeWrapper__nav}>
                      <Navigation />
                      <Balance />
                    </div>
                    <Currency />
                  </div>
                  {isStatistic && <StatisticPage />}
                  {!isStatistic && <HomeTab />}
                </div>
              </>
            )}
            {matches.large && (
              <>
                {isCurrency && <Navigate to="/" />}
                <div className={s.financeWrapper}>
                  <div className={s.financeWrapper__dashboard}>
                    <Navigation />
                    <Balance />
                    <Currency />
                  </div>
                  {isStatistic && <StatisticPage />}
                  {!isStatistic && <HomeTab />}
                </div>
              </>
            )}
          </>
        )}
      </Media>
      {showModalAddTransaction && <ModalAddTransaction />}
    </div>
  );
};

export default HomePage;
