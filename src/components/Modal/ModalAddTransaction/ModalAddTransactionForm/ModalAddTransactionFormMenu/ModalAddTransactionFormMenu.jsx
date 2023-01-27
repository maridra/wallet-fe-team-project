import scss from './ModalAddTransactionFormMenu.module.scss';

const ModalAddTransactionFormMenu = props => {
  const categories = [
    'Main expenses',
    'Products',
    'Car',
    'Self care',
    'Child care',
    'Household products',
    'Education',
    'Leisure',
    'Other expenses',
    'Entertainment',
  ];
  const { onClick } = props;
  return (
    <ul className={scss.menu}>
      {categories.map(category => (
        <li className={scss.menuItem} onClick={onClick} key={category}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default ModalAddTransactionFormMenu;
