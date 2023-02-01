import Media from 'react-media';
import s from '../CreatePassword/CreatePassword.module.scss';
import register_tab from '../../assets/Images/login/Register@1x_tab.png';
import register_tab_2x from '../../assets/Images/login/Register@2x_tab.png';
import register_desk from '../../assets/Images/login/Register@1x_desk.png';
import register_desk_2x from '../../assets/Images/login/Register@2x_desk.png';
import { useSelector } from 'react-redux';
import { modalSelectors } from 'redux/modal/modalSelectors';
import SuccessRegistrationModal from 'components/Modal/SuccessRegistrationModal/SuccessRegistrationModal';
import CreatePassword from 'components/CreatePassword/CreatePassword';

const CreatePasswordPage = () => {
  const showModalSuccessRegistration = useSelector(
    modalSelectors.showModalSuccessRegistration
  );
  return (
    <div className={s.back}>
      <div className={s.container}>
        {showModalSuccessRegistration && <SuccessRegistrationModal />}
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
                      src={register_tab}
                      srcSet={`${register_tab_2x} 2x`}
                      alt="The phone with app on the screen"
                      className={s.registerImg}
                    />
                    <p className={s.appTitle}>Finance App</p>
                  </div>
                )}
                {matches.desk && (
                  <div className={s.registerImgWrapper}>
                    <img
                      src={register_desk}
                      srcSet={`${register_desk_2x} 2x`}
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

export default CreatePasswordPage;
