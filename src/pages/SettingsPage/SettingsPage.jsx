import React from 'react';

import SettingsUser from 'components/SettingsUser/SettingsUser';
import SettingsWrapper from 'components/SettingsWrapper/SettingsWrapper';
import CategoriesField from 'components/SettingsCategories/CategoriesField/CategoriesField';

import s from './SettingsPage.module.scss';

export default function SettingsPage() {
  return (
    <div className={s.wrapper}>
      <SettingsWrapper>
        <SettingsUser />
      </SettingsWrapper>
      <SettingsWrapper>
        <CategoriesField />
      </SettingsWrapper>
    </div>
  );
}
