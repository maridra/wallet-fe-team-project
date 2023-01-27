import css from './ModalUniversal.module.scss';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';

const modalRoot = document.querySelector('#modal-root');

const ModalUniversal = prop => {
  return createPortal(
    <div className={css.modal__backdrop} onClick={prop.onClick} type="flipInX">
      <div className={css.modal__content}>
        <button className={css.btnClose} onClick={prop.onClose}>
          <FiX className={css.btnClose__icon} />
        </button>
        {prop.children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalUniversal;
