import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { IoExitOutline } from 'react-icons/io5';
import { Logo } from '../../image/Logo';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={s.container}>
        <section className={s.header}>
          <Link to="" className={s.link}>
            <Logo svg={s.link__logo} />
            <p className={s.link__title}>Wallet</p>
          </Link>
          <div className={s.wrapper}>
            <div className={s.user}>
              <span className={s.user__name}>Name</span>
            </div>
            <IconContext.Provider
              value={{ className: 'global-class-name', size: '24px' }}
            >
              <button className={s.logout__button} type="button" onClick={null}>
                <IoExitOutline />
                <span className={s.logout__text}>Exit</span>
              </button>
            </IconContext.Provider>
          </div>
        </section>
      </div>
    </header>
  );
};
export default Header;
