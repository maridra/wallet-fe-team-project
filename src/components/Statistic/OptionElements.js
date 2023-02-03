import { useEffect, useRef } from 'react';
// import { userSelectors } from 'redux/user/userSelectors';
import scss from './OptionElement.module.scss';
import { months, years } from '../../assets/variables/selectorData';

export const SelectForStatisticMonth = props => {
  const { handleMonth, blurHandler } = props;
  const ulFocus = useRef(null);
  useEffect(() => ulFocus.current.focus(), []);

  return (
    <ul
      ref={ulFocus}
      tabIndex="1"
      className={scss.menuMonth}
      onBlur={() =>
        setTimeout(() => {
          blurHandler();
        }, 150)
      }
    >
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
  const { handleYear, blurHandler } = props;

  const ulFocus = useRef(null);
  useEffect(() => ulFocus.current.focus(), []);
  return (
    <ul
      ref={ulFocus}
      tabIndex="1"
      onBlur={() =>
        setTimeout(() => {
          blurHandler();
        }, 150)
      }
      className={scss.menuYear}
    >
      {years.map(({ id, name }) => (
        <li className={scss.menuItem} onClick={() => handleYear(name)} key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
};
