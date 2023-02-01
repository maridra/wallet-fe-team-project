import React from 'react';
import s from './SettingsAddCategory.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/userOperations';

const SettingsAddCategory = () => {
  const [newCategory, setNewCategory] = useState('');
  const dispatch = useDispatch();

  function setValue(e) {
    setNewCategory(e.currentTarget.value);
  }

  const addCategory = e => {
    e.preventDefault();
    dispatch(userOperations.addCategory(newCategory));
    setNewCategory('');
  };

  return (
    <form className={s.form} onSubmit={addCategory}>
      <label>
        <p className={s.inputText}>Type new category here:</p>
        <div className={s.inputWrapper}>
          <input
            type="text"
            name="newCategory"
            id="New category"
            className={s.inputStyle}
            autoComplete="off"
            value={newCategory}
            onChange={setValue}
          />
          <button type="submit" className={s.submitButton}>
            Add
          </button>
        </div>
      </label>
    </form>
  );
};

export default SettingsAddCategory;
