import React from 'react';
import { useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { AiOutlineSetting } from 'react-icons/ai';

import { userSelectors } from 'redux/user/userSelectors';

import { Link } from 'react-router-dom';

import s from '../HeaderAvatar/HeaderAvatar.module.scss';

export default function HeaderAvatar() {
  const baseUserAvatar =
    'https://res.cloudinary.com/dpvkleqce/image/upload/v1674652226/wallet_leopards/zn7ur1gmwynrbmnqgzkj.png';

  const avatarURL = useSelector(userSelectors.getAvatarURL) ?? baseUserAvatar;

  return (
    <div className={s.user_avatar}>
      <img className={s.user_avatar__img} src={avatarURL} alt="User avatar" />
      <Link to="/settings" className={s.user_avatar__settings}>
        <IconContext.Provider value={{ className: `${s.user_avatar__icon}` }}>
          <AiOutlineSetting />
        </IconContext.Provider>
      </Link>
    </div>
  );
}
