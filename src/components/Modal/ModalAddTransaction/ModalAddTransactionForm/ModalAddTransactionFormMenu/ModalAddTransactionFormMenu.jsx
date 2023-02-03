import { useSelector } from 'react-redux';
import { userSelectors } from 'redux/user/userSelectors';
import { useRef } from 'react';
import scss from './ModalAddTransactionFormMenu.module.scss';

const ModalAddTransactionFormMenu = props => {
  const { handleCategory, handleBlur } = props;
  const ulFocus = useRef(null);
  const addFocus = () => {
    console.log(ulFocus.current);
    ulFocus.current.focus();
  };

  const categories = useSelector(userSelectors.getCategories);

  return (
    <ul
      ref={ulFocus}
      className={scss.menu}
      onPointerEnter={addFocus}
      // onBlur={handleBlur}
      tabIndex="1"
    >
      {categories.map(({ _id, name }) => (
        <li
          className={scss.menuItem}
          onClick={() => handleCategory(_id, name)}
          key={_id}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default ModalAddTransactionFormMenu;
