import { useDispatch } from 'react-redux';
import { toggleShowModalAddTransaction } from 'redux/modal/modalSlice';
import scss from './ButtonAddTransactions.module.scss';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const handleAddBtn = () => {
    dispatch(toggleShowModalAddTransaction(true));
  };
  return (
    <button className={scss.openBtn} type="button" onClick={handleAddBtn}>
      +
    </button>
  );
};
