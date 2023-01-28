import React from 'react';
import { useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiEdit2 } from 'react-icons/fi';

import { authSelectors } from '../../redux/auth/authSelectors';

import { Link } from 'react-router-dom';

import s from '../SettingsAvatar/SettingsAvatar.module.scss';

export default function SettingsAvatar() {
  const baseUserAvatar =
    'https://res.cloudinary.com/dpvkleqce/image/upload/v1674652226/wallet_leopards/zn7ur1gmwynrbmnqgzkj.png';

  const avatarURL =
    useSelector(authSelectors.userSelector).avatarURL ?? baseUserAvatar;

  console.log(s);

  return (
    <div className={s.user_avatar}>
      <img className={s.user_avatar__img} src={avatarURL} alt="User avatar" />
      <Link to="/settings" className={s.user_avatar__settings}>
        <IconContext.Provider value={{ className: `${s.user_avatar__icon}` }}>
          <FiEdit2 />
        </IconContext.Provider>
      </Link>
    </div>
  );
}
