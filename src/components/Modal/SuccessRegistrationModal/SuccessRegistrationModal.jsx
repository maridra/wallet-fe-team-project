import { useDispatch } from "react-redux";
import { toggleShowModalSuccessRegistration } from "redux/modal/modalSlice";
import ModalUniversal from "../ModalUniversal";

const SuccessRegistrationModal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleShowModalSuccessRegistration(false));
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };

  return (
    <>
      <ModalUniversal onClose={handleCloseModal} onClick={handleBackdropClick}>
        <div>
          <h1>Registration successfull!</h1>
          <h2>We send you a letter on your mail to confirm your email.</h2>
        </div>
      </ModalUniversal>
    </>
  )
}

export default SuccessRegistrationModal;