import axios from 'axios';

async function getCurrency() {
  try {
    const response = await axios.get('https://api.monobank.ua/bank/currency');
    localStorage.setItem('currencyData', JSON.stringify(response.data));
    localStorage.setItem('currencyFetchTime', Date.now());
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getCurrency;
