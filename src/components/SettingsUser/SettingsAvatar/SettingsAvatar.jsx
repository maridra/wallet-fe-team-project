import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiEdit2 } from 'react-icons/fi';

import { authSelectors } from '../../../redux/auth/authSelectors';
import authOperations from '../../../redux/auth/authOperations';

import s from '../SettingsAvatar/SettingsAvatar.module.scss';
import { useRef } from 'react';
import { Notify } from 'notiflix';
import { Loader } from 'components';

export default function SettingsAvatar() {
  // Set base avatar URL
  const baseUserAvatar =
    'https://res.cloudinary.com/dpvkleqce/image/upload/v1674652226/wallet_leopards/zn7ur1gmwynrbmnqgzkj.png';

  // Create base variables
  const refForm = useRef();
  const dispatch = useDispatch();
  const updateAvatar = authOperations.updateAvatar;

  const avatarURL =
    useSelector(authSelectors.userSelector).avatarURL ?? baseUserAvatar;
  const isLoading = useSelector(authSelectors.isLoading);

  // Handle events
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

    if (
      avatarFormat !== 'png' &&
      avatarFormat !== 'jpeg' &&
      avatarFormat !== 'jpg'
    ) {
      Notify.failure('Wrong format! Format have to be: png jpeg or jpg', {
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
        {isLoading ? (
          <Loader height={'80'} width={'80'} />
        ) : (
          <img
            className={s.user_avatar__img}
            src={avatarURL}
            alt="User avatar"
          />
        )}
        <form
          ref={refForm}
          encType="multipart/form-data"
          onSubmit={handleOnSubmit}
        >
          <label className={s.user_avatar__settings}>
            <IconContext.Provider
              value={{ className: `${s.user_avatar__icon}` }}
            >
              <FiEdit2 />
            </IconContext.Provider>
            <input
              className={s.isHidden}
              type="file"
              name="avatar"
              onChange={handleOnChange}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
