import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import getCurrency from '../../API/currencyAPI';
import Loader from '../Loader/Loader';

import css from './Сurrency.module.scss';

const Currency = () => {
  const [currency, setCurrency] = useState(null);

  const dateNow = Date.now();
  const currencyFetchItem = localStorage.getItem('currencyFetchTime');
  const fetchByMinutes = Math.floor((dateNow - currencyFetchItem) / 60000);

  let USD = {};
  let EUR = {};

  useEffect(() => {
    if (fetchByMinutes < 60) return;

    getCurrency()
      .then(setCurrency)
      .catch(error => Notify.failure(error.message));
  }, [fetchByMinutes]);

  const findCurrencyRate = (currency, code) => {
    return currency.find(el => el.currencyCodeA === code);
  };

  if (currency) {
    USD = findCurrencyRate(currency, 840);
    EUR = findCurrencyRate(currency, 978);
  }

  const storageCurrency = localStorage?.getItem('currencyData');
  const parsedCurrency = JSON.parse(storageCurrency);

  if (parsedCurrency) {
    USD = findCurrencyRate(parsedCurrency, 840);
    EUR = findCurrencyRate(parsedCurrency, 978);
  }

  return (
    <div className={css.table}>
      <div className={css.tableHead}>
        <ul className={css.tableList}>
          <li>Currency</li>
          <li className={css.tablePurchase}>Purchase</li>
          <li className={css.tableSale}>Sale</li>
        </ul>
      </div>
      {!currency && !parsedCurrency ? (
        <div className={css.loader}>
          <Loader height={'80'} width={'80'} color={'#ffffff'} />
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
