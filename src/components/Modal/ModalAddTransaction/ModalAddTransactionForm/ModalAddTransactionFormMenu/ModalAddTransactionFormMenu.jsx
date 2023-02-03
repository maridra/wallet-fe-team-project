import { useSelector } from 'react-redux';
import { userSelectors } from 'redux/user/userSelectors';
import { useRef, useEffect } from 'react';
import scss from './ModalAddTransactionFormMenu.module.scss';

const ModalAddTransactionFormMenu = props => {
  const { handleCategory, handleBlur } = props;
  const ulFocus = useRef(null);
  useEffect(() => {
    ulFocus.current.focus();
  }, []);
  const categories = useSelector(userSelectors.getCategories);

  return (
    <ul
      ref={ulFocus}
      className={scss.menu}
      onBlur={() =>
        setTimeout(() => {
          handleBlur();
        }, 150)
      }
      tabIndex="1"
    >
      {categories.map(({ _id, name }) => (
        <li
          className={scss.menuItem}
          onClick={e => {
            e.preventDefault();
            handleCategory(_id, name);
          }}
          key={_id}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default ModalAddTransactionFormMenu;
