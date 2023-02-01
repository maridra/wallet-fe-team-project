import { useSelector } from 'react-redux';
import { userSelectors } from 'redux/user/userSelectors';
import scss from './ModalAddTransactionFormMenu.module.scss';

const ModalAddTransactionFormMenu = props => {
  const { handleCategory } = props;
  const categories = useSelector(userSelectors.getCategories);

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
