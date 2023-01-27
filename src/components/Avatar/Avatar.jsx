import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth/authSelectors';
export default function Avatar() {
  const baseUserAvatar =
    'https://res.cloudinary.com/dpvkleqce/image/upload/v1674652226/wallet_leopards/zn7ur1gmwynrbmnqgzkj.png';

  const avatarURL =
    useSelector(authSelectors.userSelector).avatarURL ?? baseUserAvatar;

  return (
    <div>
      <img src={avatarURL} alt="User avatar" />
    </div>
  );
}
