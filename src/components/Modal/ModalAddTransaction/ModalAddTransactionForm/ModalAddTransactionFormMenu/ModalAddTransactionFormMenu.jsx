import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import scss from './ModalAddTransactionFormMenu.module.scss';

const ModalAddTransactionFormMenu = props => {
  const { handleCategory } = props;
  const user = useSelector(authSelectors.userSelector);

  const { categories } = user;

  return (
    <ul className={scss.menu}>
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
