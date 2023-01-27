import { toggleShowModalLogout } from 'redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import ModalUniversal from '../ModalUniversal';
import scss from './ModalLogout.module.scss';
import logo from '../../../assets/Images/NotFoundPage/sad_leopard.png';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    dispatch(toggleShowModalLogout(false));
  };

  return (
    <ModalUniversal onClose={handleCloseModal} onClick={handleBackdropClick}>
      <div className={scss.box}>
        <img className={scss.logo} src={logo} alt="logo"></img>
        <h2 className={scss.title}>Do you want to exit?</h2>
        <div className={scss.btnBox}>
          <button
            className={scss.yesBtn}
            type="button"
            onClick={handleCloseModal}
          >
            yes
          </button>
          <button
            className={scss.noBtn}
            type="button"
            onClick={handleCloseModal}
          >
            no
          </button>
        </div>
      </div>
    </ModalUniversal>
  );
};

export default ModalLogout;
