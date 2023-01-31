import Media from 'react-media';
import s from '../CreatePassword/CreatePassword.module.scss';
import registerDeskImg from '../../image/registerDeskImg.png';
import registerTabImg from '../../image/registerTabImg.png';
import CreatePassword from 'components/CreatePassword/CreatePassword';

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
            <CreatePassword />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
