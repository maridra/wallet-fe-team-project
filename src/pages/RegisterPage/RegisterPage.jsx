import RegisterForm from 'components/RegisterForm/RegisterForm';
import Media from 'react-media';
import s from '../RegisterPage/RegisterPage.module.scss';
import registerDeskImg from '../../assets/Images/login/registerDeskImg.png';
import registerTabImg from '../../assets/Images/login/registerTabImg.png';

const RegisterPage = () => {
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
                      src={registerTabImg}
                      alt="The phone with app on the screen"
                      className={s.registerImg}
                    />
                    <p className={s.appTitle}>Finance App</p>
                  </div>
                )}
                {matches.desk && (
                  <div className={s.registerImgWrapper}>
                    <img
                      src={registerDeskImg}
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
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
