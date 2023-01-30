import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiEdit2 } from 'react-icons/fi';

import { authSelectors } from '../../../redux/auth/authSelectors';
import authOperations from '../../../redux/auth/authOperations';

import { Link } from 'react-router-dom';

import s from '../SettingsAvatar/SettingsAvatar.module.scss';
import { useRef } from 'react';
import { Notify } from 'notiflix';

export default function SettingsAvatar() {
  const baseUserAvatar =
    'https://res.cloudinary.com/dpvkleqce/image/upload/v1674652226/wallet_leopards/zn7ur1gmwynrbmnqgzkj.png';

  const avatarURL =
    useSelector(authSelectors.userSelector).avatarURL ?? baseUserAvatar;

  const refForm = useRef();

  const dispatch = useDispatch();
  const updateAvatar = authOperations.updateAvatar;

  const handleOnChange = () => {
    refForm.current.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true })
    );
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const userAvatar = e.currentTarget.elements.avatar.value;
    const userAvatarFile = e.currentTarget.elements.avatar.files[0];
    const avatarFormat = userAvatar.split('.').at(-1);

    if (avatarFormat !== 'png' && 'jpeg' && 'svg') {
      Notify.failure('Wrong format! Format have to be: png, jpeg or svg', {
        position: 'center-top',
      });
      return;
    }

    const data = new FormData();
    data.append('avatar', userAvatarFile);

    dispatch(updateAvatar(data));
  };

  return (
    <div>
      <h2 className={s.title}>User</h2>
      <div className={s.user_avatar}>
        <img className={s.user_avatar__img} src={avatarURL} alt="User avatar" />
        <Link to="/settings" className={s.user_avatar__settings}>
          <IconContext.Provider value={{ className: `${s.user_avatar__icon}` }}>
            <FiEdit2 />
          </IconContext.Provider>
        </Link>
      </div>
      <form
        ref={refForm}
        encType="multipart/form-data"
        onSubmit={handleOnSubmit}
      >
        <label>
          <input type="file" name="avatar" onChange={handleOnChange} />
        </label>
      </form>
    </div>
  );
}
