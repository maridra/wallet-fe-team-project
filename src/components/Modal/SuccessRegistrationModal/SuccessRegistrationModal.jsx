import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/authOperations";
import { authSelectors } from "redux/auth/authSelectors";
import s from "../SuccessRegistrationModal/SuccessRegistrationModal.module.scss";
import { ReactComponent as SuccessIcon } from "../../../assets/Images/login/success.svg";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');


const SuccessRegistrationModal = () => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');
  
  const email = useSelector(authSelectors.getEmail);

  const resendLetter = () => {
    dispatch(authOperations.resendVerification({ email }))
      .then((response) => {
        if (response.payload.status === "success") {
          setMsg("The link has beeen sent. Check your email.");
        }
        if (response.payload === "Request failed with status code 409") {
          setMsg(`User with email - ${email}, already verified`)
        }
      })
  }

  return createPortal(
    <div className={s.modal__backdrop}>
      <div className={s.modal__content}>
        <div className={s.successBox}>
          <SuccessIcon className={s.successIcon} />
          <h1 className={s.successText}>Registration successful</h1>
          <p className={s.successText}>We have sent you a verification link to your registered e-mail.</p>
          <p className={s.errorText}>If you didn't receive the link, please click below.</p>
          <button type="button" className={s.resendBtn} onClick={resendLetter}>resend</button>
          <p className={s.msg}>{msg}</p>
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export default SuccessRegistrationModal;