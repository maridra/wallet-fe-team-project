import React from 'react';

import s from './SettingsWrapper.module.scss';

export default function SettingsWrapper({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}
