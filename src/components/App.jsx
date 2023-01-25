import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header, Loader } from '../components';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense
        fallback={<Loader height={'120'} width={'120'} color={'#4A56E2'} />}
      >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
