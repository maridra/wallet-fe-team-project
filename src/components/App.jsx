import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Loader } from '../components';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/signUp" element={<RegisterPage/>}/>
        </Routes>
      </Suspense>
    </>
  );
};
