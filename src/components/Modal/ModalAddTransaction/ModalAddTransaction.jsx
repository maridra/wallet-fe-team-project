import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toggleShowModalAddTransaction } from 'redux/modal/modalSlice';
import scss from './ModalAddTransaction.module.scss';
import ModalUniversal from '../ModalUniversal';
import ModalAddTransactionCheckbox from './ModalAddTransactionCheckbox/ModalAddTransactionCheckbox';
import ModalAddTransactionForm from './ModalAddTransactionForm/ModalAddTransactionForm';

const ModalAddTransaction = () => {
  const dispatch = useDispatch();

  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const handleCloseModal = () => {
    dispatch(toggleShowModalAddTransaction(false));
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };

  const escKeyDown = e => {
    if (e.code === 'Escape') {
      handleCloseModal();
    }
  };

  const handleCheckbox = e => {
    if (e.currentTarget === e.target) {
      setCheckboxStatus(!checkboxStatus);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', escKeyDown);
      document.body.style.overflow = '';
    };
  });
  return (
    <ModalUniversal onClose={handleCloseModal} onClick={handleBackdropClick}>
      <div className={scss.box}>
        <h2 className={scss.title}>Add transaction</h2>
        <ModalAddTransactionCheckbox
          onHandleCheckbox={handleCheckbox}
          checkboxStatus={checkboxStatus}
        ></ModalAddTransactionCheckbox>
        <ModalAddTransactionForm
          checkboxStatus={checkboxStatus}
          onClick={handleCloseModal}
        ></ModalAddTransactionForm>
        <button
          className={scss.closeBtn}
          type="button"
          onClick={handleCloseModal}
        >
          cancel
        </button>
      </div>
    </ModalUniversal>
  );
};

export default ModalAddTransaction;
