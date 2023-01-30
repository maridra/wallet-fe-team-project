import LoginForm from 'components/LoginForm/LoginForm';
import s from '../LoginPage/LoginPage.module.scss';
import loginDeskImg from '../../assets/Images/login/loginDesk.png';
import loginTabImg from '../../assets/Images/login/loginTab.png';
import Media from 'react-media';

const LoginPage = () => {
  return (
    <div className={s.back}>
      <div className={s.container}>
        <div className={s.registerContainer}>
          <Media
            queries={{
              tab: '(min-width: 768px) and (max-width: 1279px)',
              desk: '(min-width: 1280px)',
            }}
          >
            {matches => (
              <>
                {matches.tab && (
                  <div className={s.registerImgWrapper}>
                    <img
                      src={loginTabImg}
                      alt="The phone with app on the screen"
                      className={s.registerImg}
                    />
                    <p className={s.appTitle}>Finance App</p>
                  </div>
                )}
                {matches.desk && (
                  <div className={s.registerImgWrapper}>
                    <img
                      src={loginDeskImg}
                      alt="The phone with app on the screen"
                      className={s.registerImg}
                    />
                    <p className={s.appTitle}>Finance App</p>
                  </div>
                )}
              </>
            )}
          </Media>
          <div className={s.form}>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
