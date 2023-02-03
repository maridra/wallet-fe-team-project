import {
  SelectForStatisticMonth,
  SelectForStatisticYear,
} from './OptionElements';
import scss from './SelectElements.module.scss';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IconContext } from 'react-icons';

export const SelectElements = props => {
  const {
    valueMonth,
    valueYear,
    onClickMonth,
    onClickYear,
    openMonth,
    openYear,
    handleMonthChange,
    handleYearChange,
    blurHandler,
  } = props;

  return (
    <div className={scss.select}>
      <input
        className={scss.selectItem}
        type="text"
        placeholder="Select a month"
        name="month"
        value={valueMonth}
        onClick={onClickMonth}
        autoComplete="off"
        readOnly
      ></input>
      <input
        className={scss.selectItem}
        type="text"
        placeholder="Select a year"
        name="year"
        value={valueYear}
        onClick={onClickYear}
        autoComplete="off"
        readOnly
      ></input>
      <button
        className={scss.openMenuBtnMonth}
        type="button"
        onClick={onClickMonth}
      >
        {!openMonth ? (
          <IconContext.Provider
            value={{
              size: '25px',
            }}
          >
            <FiChevronDown
              className={scss.openMenuBtnMonthIcon}
            ></FiChevronDown>
          </IconContext.Provider>
        ) : (
          <IconContext.Provider
            value={{
              size: '25px',
            }}
          >
            <FiChevronUp className={scss.openMenuBtnMonthIcon}></FiChevronUp>
          </IconContext.Provider>
        )}
      </button>
      <button
        className={scss.openMenuBtnYear}
        type="button"
        onClick={onClickYear}
      >
        {!openYear ? (
          <IconContext.Provider
            value={{
              size: '25px',
            }}
          >
            <FiChevronDown></FiChevronDown>
          </IconContext.Provider>
        ) : (
          <IconContext.Provider
            value={{
              size: '25px',
            }}
          >
            <FiChevronUp></FiChevronUp>
          </IconContext.Provider>
        )}
      </button>
      {openMonth && (
        <SelectForStatisticMonth
          handleMonth={handleMonthChange}
          blurHandler={blurHandler}
          // onClick={handleClickOutside}
        ></SelectForStatisticMonth>
      )}
      {openYear && (
        <SelectForStatisticYear
          handleYear={handleYearChange}
          blurHandler={blurHandler}
        ></SelectForStatisticYear>
      )}
    </div>
  );
};
