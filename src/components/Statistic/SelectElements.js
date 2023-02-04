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
    blurHandlerYear,
    blurHandlerMonth,
  } = props;

  return (
    <div className={scss.select}>
      <button
        className={scss.openMenuBtnMonth}
        type="button"
        onClick={onClickMonth}
      >
        {!openMonth ? (
          <IconContext.Provider
            value={{
              size: '25px',
              color: 'black',
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
              color: 'black',
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
              color: 'black',
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
      {/*  */}

      {openMonth && (
        <SelectForStatisticMonth
          handleMonth={handleMonthChange}
          blurHandlerMonth={blurHandlerMonth}
          // onClick={handleClickOutside}
        ></SelectForStatisticMonth>
      )}
      {openYear && (
        <SelectForStatisticYear
          handleYear={handleYearChange}
          blurHandlerYear={blurHandlerYear}
        ></SelectForStatisticYear>
      )}
    </div>
  );
};
