import LoginPage from 'pages/LoginPage/LoginPage';
import StatisticPage from 'pages/StatisticPage/StatisticPage';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Loader } from '../components';

// import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage/SettingsPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <Loader
            height={'120'}
            width={'120'}
            color={'#4A56E2'}
            center={true}
          />
        }
      >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<HomePage />}>
              <Route path="statistic" element={<StatisticPage />} />
            </Route>
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/signUp"
            element={<PublicRoute redirectTo="/" children={<RegisterPage />} />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
