import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/authOperations";
import { authSelectors } from "redux/auth/authSelectors";
import ModalUniversal from "../ModalUniversal";
import s from "../SuccessRegistrationModal/SuccessRegistrationModal.module.scss";
import {ReactComponent as SuccessIcon} from "../../../assets/Images/login/success.svg"

const SuccessRegistrationModal = () => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');

  const email = useSelector(authSelectors.getEmail);

  const resendLetter = () => {
    dispatch(authOperations.resendVerification({ email }))
      .then((response) => {
        if (response.payload.status === "success") {
          setMsg("The link has beeen sent. Check your email.")
        }
    })
  }

  return (
    <>
      <ModalUniversal>
        <div className={s.successBox}>
          <SuccessIcon className={s.successIcon} />
          <h1 className={s.successText}>Registration successful</h1>
          <p className={s.successText}>We have sent you a verification link on your registered e-mail.</p>
          <p className={s.errorText}>If you didn't receive the link, please click below.</p>
          <button type="button" className={s.resendBtn} onClick={resendLetter}>resend</button>
          <p className={s.msg}>{msg}</p>
        </div>
      </ModalUniversal>
    </>
  )
}

export default SuccessRegistrationModal;