import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Loader } from 'components';

import { token } from 'redux/tokenSettingsAxios';
import userOperations from 'redux/user/userOperations';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const currentToken = searchParams.get('token');
  console.log(currentToken);
  token.set(currentToken);

  dispatch(userOperations.currentUser());

  return (
    <Loader height={'120'} width={'120'} color={'#4A56E2'} center={true} />
  );
};

export default GoogleAuth;
