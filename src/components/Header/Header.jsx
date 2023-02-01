import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoExitOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { modalSelectors } from 'redux/modal/modalSelectors';
import { userSelectors } from 'redux/user/userSelectors';

import { Logo } from '../../assets/Images/login/Logo';
import { toggleShowModalLogout } from 'redux/modal/modalSlice';
import HeaderAvatar from '../HeaderAvatar/HeaderAvatar';
import ModalLogout from 'components/Modal/ModalLogout/ModalLogout';
import PageWrapper from 'components/PageWrapper/PageWrapper';

import s from './Header.module.scss';

const Header = () => {
  const showModalLogout = useSelector(modalSelectors.showModalLogout);
  const firstName = useSelector(userSelectors.getFirstName);
  const location = useLocation();
  const locationPath = location.pathname;

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
              <p className={s.user__name}>{firstName ? firstName : 'Name'}</p>
              <HeaderAvatar />
            </div>

            <IconContext.Provider value={{ size: '24px' }}>
              <button
                className={s.logout__button}
                type="button"
                onClick={handleAddBtn}
              >
                <IoExitOutline />
                <p className={s.logout__text}>Exit</p>
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </header>
      {showModalLogout && <ModalLogout />}
      {locationPath === '/' && <ButtonAddTransactions />}
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </>
  );
};
export default Header;
