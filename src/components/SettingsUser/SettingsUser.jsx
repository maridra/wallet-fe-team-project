import React from 'react';

import SettingsAvatar from './SettingsAvatar/SettingsAvatar';
import SettingsUserName from './SettingsUserName/SettingsUserName';

import s from './SettingsUser.module.scss';

export default function SettingsUser() {
  return (
    <div className={s.wrapper}>
      <SettingsAvatar />
      <SettingsUserName />
    </div>
  );
}
