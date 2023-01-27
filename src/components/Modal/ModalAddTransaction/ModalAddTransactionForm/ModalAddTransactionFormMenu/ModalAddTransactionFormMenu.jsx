import scss from './ModalAddTransactionFormMenu.module.scss';

const ModalAddTransactionFormMenu = props => {
  const { onClick } = props;
  return (
    <div className={scss.menu}>
      <div className={scss.menuItem} onClick={onClick}>
        Main expenses
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Products
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Car
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Self care
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Child care
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Household products
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Education
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Leisure
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Other expenses
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Entertainment
      </div>
      <div className={scss.menuItem} onClick={onClick}>
        Other
      </div>
    </div>
  );
};

export default ModalAddTransactionFormMenu;
