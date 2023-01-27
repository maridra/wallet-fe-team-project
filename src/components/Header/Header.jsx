import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoExitOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Logo } from '../../image/Logo';
import { toggleShowModalLogout } from 'redux/modal/modalSlice';
import Avatar from '../Avatar/Avatar';
import s from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const handleAddBtn = () => {
    dispatch(toggleShowModalLogout(true));
  };
  return (
    <>
      <header className={s.header}>
        <div className={s.box}>
          <Link to="/" className={s.link}>
            <Logo svg={s.link__logo} />
            <p className={s.link__title}>Wallet</p>
          </Link>
          <div className={s.wrapper}>
            <div className={s.user}>
              <span className={s.user__name}>Name</span>
              <Avatar />
            </div>

            <IconContext.Provider value={{ size: '24px' }}>
              <button
                className={s.logout__button}
                type="button"
                onClick={handleAddBtn}
              >
                <IoExitOutline />
                <span className={s.logout__text}>Exit</span>
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default Header;
