import css from './ModalUniversal.module.scss';
import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';

const modalRoot = document.querySelector('#modal-root');

const ModalUniversal = prop => {
  return createPortal(
    <div className={css.modal__backdrop} onClick={prop.onClick} type="flipInX">
      <div className={css.modal__content}>
        <button className={css.btnClose} onClick={prop.onClose}>
          <BsXLg className={css.btnClose__icon} />
        </button>
        {prop.children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalUniversal;
