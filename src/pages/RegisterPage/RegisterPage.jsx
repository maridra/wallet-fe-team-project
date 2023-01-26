import RegisterForm from "components/RegisterForm/RegisterForm";
import Media from "react-media";
import s from "../RegisterPage/RegisterPage.module.scss";
import registerDeskImg from "../../image/registerDeskImg.png";
import registerTabImg from "../../image/registerTabImg.png";

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Media queries={{
          tab: "(min-width: 768px) and (max-width: 1279px)",
          desk: "(min-width: 1280px)"
        }}>
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
      </div>
      <div className={s.form}>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage;