import RegisterForm from "components/RegisterForm/RegisterForm";
import Media from "react-media";
import s from "../RegisterPage/RegisterPage.module.scss";
import registerDeskImg from "../../assets/Images/login/registerDeskImg.png";
import registerTabImg from "../../assets/Images/login/registerTabImg.png";
import { useSelector } from "react-redux";
import { modalSelectors } from "redux/modal/modalSelectors";
import SuccessRegistrationModal from "components/Modal/SuccessRegistrationModal/SuccessRegistrationModal";

const RegisterPage = () => {
  
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
