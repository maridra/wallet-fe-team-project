import { Navigate } from 'react-router-dom';

const CurrencyRoute = ({ children }) => {
  const widthFromTable = window.innerWidth;
  if (widthFromTable > 767) {
    return <Navigate to="/" />;
  }
  return children;
};

export default CurrencyRoute;
