const { Circles } = require('react-loader-spinner');

const CurrencyLoader = () => {
  return (
    <Circles
      position="center"
      height="60"
      width="60"
      color="#ffff"
      ariaLabel="circles-loading"
    />
  );
};

export default CurrencyLoader;
