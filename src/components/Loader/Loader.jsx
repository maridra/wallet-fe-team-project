const { Circles } = require('react-loader-spinner');

const Loader = ({ height = '100', width = '100', color = '#4A56E2' }) => {
  return (
    <Circles
      position="center"
      height={height}
      width={width}
      color={color}
      ariaLabel="circles-loading"
    />
  );
};

export default Loader;
