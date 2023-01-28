import React from 'react';
import s from './SettingsAddCategory.module.scss';

const SettingsAddCategory = () => {
  return (
    <form className={s.form}>
      <p className={s.inputText}>Type new category here:</p>
      <input
        type="text"
        name="newCategory"
        id="New category"
        className={s.inputStyle}
        autoComplete="off"
      />

      <button type="submit" className={s.submitButton}>
        Add category
      </button>
    </form>
  );
};

export default SettingsAddCategory;
