import LoginForm from 'components/LoginForm/LoginForm';
import s from '../LoginPage/LoginPage.module.scss';
import login_tab from '../../assets/Images/login/Login@1x_tab.png';
import login_tab_2x from '../../assets/Images/login/Login@2x_tab.png';
import login_desk from '../../assets/Images/login/Login@1x_desk.png';
import login_desk_2x from '../../assets/Images/login/Login@2x_desk.png';
import Media from 'react-media';

const LoginPage = () => {
  return (
    <div className={s.back}>
      <div className={s.container}>
        <div className={s.loginContainer}>
          <Media
            queries={{
              tab: '(min-width: 768px) and (max-width: 1279px)',
              desk: '(min-width: 1280px)',
            }}
          >
            {matches => (
              <>
                {matches.tab && (
                  <div className={s.loginImgWrapper}>
                    <img
                      src={login_tab}
                      srcSet={`${login_tab_2x} 2x`}
                      alt="The phone with app on the screen"
                      className={s.loginImg}
                    />
                    <p className={s.appTitle}>Finance App</p>
                  </div>
                )}
                {matches.desk && (
                  <div className={s.loginImgWrapper}>
                    <img
                      src={login_desk}
                      srcSet={`${login_desk_2x} 2x`}
                      alt="The phone with app on the screen"
                      width="435"
                      height="420"
                      className={s.loginImg}
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
