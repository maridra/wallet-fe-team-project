import React from 'react';
import s from './SettingsRemoveCategory.module.scss';
import sprite from '../../image/symbol-defs.svg';

const categoriesBackend = [
  'Main expenses',
  'Products',
  'Car',
  'Self care',
  'Child care',
  'Household products',
  'Education',
  'Leisure',
  'Other expenses',
];

const SettingsRemoveCategory = () => {
  return (
    <>
      <h2>Category List:</h2>
      <ul className={s.categoriesList}>
        {categoriesBackend.map(item => (
          <li className={s.categoriesItem}>
            {item}
            <button type="button" className={s.buttonDelete}>
              <svg className={s.svg}>
                <use href={`${sprite}#icon-cancel-circle`}></use>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SettingsRemoveCategory;
