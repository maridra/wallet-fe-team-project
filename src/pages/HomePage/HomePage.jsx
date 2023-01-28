import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader.jsx';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { modalSelectors } from 'redux/modal/modalSelectors';
import ModalAddTransaction from 'components/Modal/ModalAddTransaction/ModalAddTransaction';
import Media from 'react-media';
import { Route, Routes } from 'react-router';

import StatisticForm from '../../components/StatisticPage/StatisticPage';

import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile';
import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';

const HomePage = () => {
  let location = useLocation();
  console.log(location);

  const showModalAddTransaction = useSelector(
    modalSelectors.showModalAddTransaction
  );
  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              // <div>
              //   {showModalAddTransaction && <ModalAddTransaction />}
              //   <Navigation />
              //   <Balance />
              //   <ButtonAddTransactions></ButtonAddTransactions>
              //   <Suspense fallback={<Loader />}>
              //     <Outlet />
              //   </Suspense>
              //   <div>HomePage</div>
              //   {/* <Statistic /> */}
              //   {/* <HomeTab /> */}
              //   <HomeTabMobile />
              // </div>
              <>
                <Navigation />
                <Suspense fallback={<Loader />}>
                  {showModalAddTransaction && <ModalAddTransaction />}

                  {/* {(location = 'statistic') && <StatisticForm />}
                  {(location = 'currency') && <Currency />} */}

                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <Balance />
                          <HomeTabMobile />
                          <ButtonAddTransactions></ButtonAddTransactions>
                        </>
                      }
                    />
                    <Route path="/currency" element={<Currency />} />
                    <Route path="/statistic" element={<StatisticForm />} />
                  </Routes>
                </Suspense>
              </>
            )}
            {matches.medium && (
              <>
                {showModalAddTransaction && <ModalAddTransaction />}
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
                {/* <HomeTabMobile /> */}
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default HomePage;
