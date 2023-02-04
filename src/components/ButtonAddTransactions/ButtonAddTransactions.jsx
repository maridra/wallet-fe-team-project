import { useDispatch } from 'react-redux';
import { HiOutlinePlus } from 'react-icons/hi';
import { toggleShowModalAddTransaction } from 'redux/modal/modalSlice';
import scss from './ButtonAddTransactions.module.scss';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const handleAddBtn = () => {
    dispatch(toggleShowModalAddTransaction(true));
  };
  return (
    <div>
      <button className={scss.openBtn} type="button" onClick={handleAddBtn}>
        <div className={scss.buttonInsideBox}>
          <HiOutlinePlus className={scss.openBtnIcon}></HiOutlinePlus>
        </div>
      </button>
    </div>
  );
};
