import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';

import { Loader } from 'components';
import PageWrapper from 'components/PageWrapper/PageWrapper';

import { token } from 'redux/tokenSettingsAxios';
import userOperations from 'redux/user/userOperations';
import { googleAuth } from 'redux/auth/authSlice';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentToken = searchParams.get('token');

  if (!currentToken) {
    Notify.failure('Oops, something wrong on server :( Please, try again');
    navigate('/login', { replace: true });
  }

  token.set(currentToken);

  dispatch(userOperations.currentUser())
    .then(() => dispatch(googleAuth(currentToken)))
    .catch(error => {
      Notify.failure(error.message);
      navigate('/login', { replace: true });
    });

  return (
    <PageWrapper>
      <Loader height={'120'} width={'120'} color={'#4A56E2'} center={true} />
    </PageWrapper>
  );
};

export default GoogleAuth;
