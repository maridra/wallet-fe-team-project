import { useEffect, useState } from 'react';
import getCurrency from '../../API/currencyAPI';
import CurrencyLoader from '../Loader/CurrencyLoader';

import css from './currency.module.scss';

const Currency = () => {
  const [currency, setCurrency] = useState(null);

  const dateNow = Date.now();
  const currencyFetchItem = localStorage.getItem('currencyFetchTime');
  const fetchByMinutes = Math.floor((dateNow - currencyFetchItem) / 60000);

  console.log('object :>> ', fetchByMinutes);

  useEffect(() => {
    if (fetchByMinutes < 60) return;
    getCurrency().then(setCurrency);
  }, [currency, fetchByMinutes]);

  const storageCurrencyRate = localStorage?.getItem('currencyData');
  const parsedCurrencyRate = JSON.parse(storageCurrencyRate);
  const USD = parsedCurrencyRate.find(el => el.currencyCodeA === 840);
  const EUR = parsedCurrencyRate.find(el => el.currencyCodeA === 978);

  return (
    <div className={css.table}>
      <div className={css.tableHead}>
        <ul className={css.tableList}>
          <li>Currency</li>
          <li>Purchase</li>
          <li>Sale</li>
        </ul>
      </div>
      {!USD ? (
        <div className={css.loader}>
          <CurrencyLoader />
        </div>
      ) : (
        <div className={css.bodyContainer}>
          <ul className={css.bodyList}>
            <li>USD</li>
            <li className={css.bodyData}>{USD?.rateBuy.toFixed(2)}</li>
            <li>{USD?.rateSell.toFixed(2)}</li>
          </ul>
          <ul className={css.bodyList}>
            <li>EUR</li>
            <li className={css.bodyData}>{EUR?.rateBuy.toFixed(2)}</li>
            <li>{EUR?.rateSell.toFixed(2)}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Currency;
