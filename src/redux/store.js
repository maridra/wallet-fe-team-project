import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';

import { persistedAuthReducer } from './auth/authSlice';
import { modalReducer } from './modal/modalSlice';
import { financeReducer } from './finance/financeSlice';
import { statisticReducer } from './statistic/statisticSlice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    finance: financeReducer,
    modal: modalReducer,
    statistic: statisticReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
