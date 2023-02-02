// import { useSelector } from 'react-redux';
// import { userSelectors } from 'redux/user/userSelectors';
import scss from './OptionElement.module.scss';
import { months, years } from '../../assets/variables/selectorData';

export const SelectForStatisticMonth = props => {
  const { handleMonth } = props;
  // const categories = useSelector(userSelectors.getCategories);

  return (
    <ul className={scss.menuMonth}>
      {months.map(({ id, name }) => (
        <li
          className={scss.menuItem}
          onClick={() => handleMonth(name)}
          key={id}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export const SelectForStatisticYear = props => {
  const { handleYear } = props;
  // const categories = useSelector(userSelectors.getCategories);

  return (
    <ul className={scss.menuYear}>
      {years.map(({ id, name }) => (
        <li className={scss.menuItem} onClick={() => handleYear(name)} key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
};
