import { Fragment } from 'react';
import Media from 'react-media';
import s from './Navigation.module.scss';
import sprite from '../../image/symbol-defs.svg';
import { NavLink } from 'react-router-dom';

const toggle = ({ isActive }) => {
  return isActive ? s.active__link : s.nav__link;
};

const Navigation = ({ children }) => {
  return (
    <>
      <Media
        queries={{ small: '(max-width:767px)', medium: '(min-width:768px)' }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <>
                <nav className={s.nav}>
                  <NavLink to="/" className={toggle}>
                    <div className={s.icon__wrapper}>
                      <svg className={s.svg}>
                        <use href={`${sprite}#icon-home`}></use>
                      </svg>
                    </div>
                  </NavLink>
                  <NavLink to="/statistic" className={toggle}>
                    <div className={s.icon__wrapper}>
                      <svg className={s.svg}>
                        <use href={`${sprite}#icon-statistics`}></use>
                      </svg>
                    </div>
                  </NavLink>
                  <NavLink to="/currency" className={toggle}>
                    <div className={s.icon__wrapper}>
                      <svg className={s.svg}>
                        <use href={`${sprite}#icon-currency`}></use>
                      </svg>
                    </div>
                  </NavLink>
                </nav>
                {children}
              </>
            )}
            {matches.medium && (
              <>
                <nav className={s.nav}>
                  <NavLink to="/" className={toggle}>
                    <div className={s.icon__wrapper}>
                      <svg className={s.svg}>
                        <use href={`${sprite}#icon-home`}></use>
                      </svg>
                    </div>
                    <p className={s.text}>Home</p>
                  </NavLink>
                  <NavLink to="/statistic" className={toggle}>
                    <div className={s.icon__wrapper}>
                      <svg className={s.svg}>
                        <use href={`${sprite}#icon-statistics`}></use>
                      </svg>
                    </div>

                    <p className={s.text}>Statistics</p>
                  </NavLink>
                </nav>
                {children}
              </>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
};
export default Navigation;
