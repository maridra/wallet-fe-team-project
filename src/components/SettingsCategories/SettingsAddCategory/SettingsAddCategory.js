import React from 'react';
import s from './SettingsAddCategory.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/userOperations';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { userSelectors } from 'redux/user/userSelectors';
import { Loader } from 'components';

const SettingsAddCategory = () => {
  const [newCategory, setNewCategory] = useState('');
  const loading = useSelector(userSelectors.addLoading);
  const dispatch = useDispatch();
  const lengthCheck = newCategory.length > 18;

  function setValue(e) {
    setNewCategory(e.currentTarget.value);
  }

  const addCategory = e => {
    e.preventDefault();
    if (newCategory.trim() === '') {
      return Notify.failure('The category is not allowed to be empty');
    }
    dispatch(userOperations.addCategory(newCategory.trim()));
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
            className={
              lengthCheck ? `${s.inputStyle} ${s.inputStyleRed}` : s.inputStyle
            }
            autoComplete="off"
            value={newCategory}
            onChange={setValue}
          />
          <button
            type="submit"
            disabled={loading || lengthCheck}
            className={s.submitButton}
          >
            {loading ? (
              <div className={s.loader}>
                <Loader height={'30'} width={'30'} />
              </div>
            ) : (
              <p>Add</p>
            )}
          </button>
          {lengthCheck && (
            <div className={s.notification}>Too long category</div>
          )}
        </div>
      </label>
    </form>
  );
};

export default SettingsAddCategory;
