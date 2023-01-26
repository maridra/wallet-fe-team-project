import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import scss from './ModalAddTransactionCheckbox.module.scss';

const ModalAddTransactionCheckbox = prop => {
  const { onHandleCheckbox, checkboxStatus } = prop;
  return (
    <div className={scss.checkboxInfo}>
      <span
        className={scss.checkboxText}
        style={checkboxStatus ? { color: '#24CCA7' } : { color: '#e0e0e0' }}
      >
        Income
      </span>
      <label className={scss.checkboxLabel} onClick={onHandleCheckbox}>
        <input className={scss.checkbox} type="checkbox" />
        <div className={scss.checkboxIconBox} onClick={onHandleCheckbox}>
          {checkboxStatus ? (
            <HiOutlinePlus className={scss.checkboxIcon} />
          ) : (
            <HiOutlineMinus className={scss.checkboxIcon} />
          )}
        </div>
      </label>
      <span
        className={scss.checkboxText}
        style={!checkboxStatus ? { color: '#FF6596' } : { color: '#e0e0e0' }}
      >
        Expense
      </span>
    </div>
  );
};
export default ModalAddTransactionCheckbox;
