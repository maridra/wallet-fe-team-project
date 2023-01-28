import React from 'react';

import SettingsAvatar from 'components/SettingsAvatar/SettingsAvatar';
import SettingsWrapper from 'components/SettingsWrapper/SettingsWrapper';

import s from './SettingsPage.module.scss';

export default function SettingsPage() {
  return (
    <div className={s.wrapper}>
      <SettingsWrapper>
        <SettingsAvatar />
      </SettingsWrapper>
      <SettingsWrapper>
        <SettingsAvatar />
      </SettingsWrapper>
      <SettingsWrapper>
        <SettingsAvatar />
      </SettingsWrapper>
    </div>
  );
}
