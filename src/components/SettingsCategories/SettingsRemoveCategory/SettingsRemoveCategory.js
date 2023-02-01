import React from 'react';
import s from './SettingsRemoveCategory.module.scss';
import sprite from '../../../assets/Images/login/symbol-defs.svg';
import { useSelector } from 'react-redux';
import { userSelectors } from 'redux/user/userSelectors';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/userOperations';

const SettingsRemoveCategory = () => {
  const categories = useSelector(userSelectors.getCategories);
  const dispatch = useDispatch();

  function deleteCategory(id) {
    dispatch(userOperations.removeCategory(id));
  }

  function addDeleteButton(item) {
    if (item._id === '10') {
      return;
    }

    return (
      <button
        onClick={() => deleteCategory(item._id)}
        type="button"
        className={s.buttonDelete}
      >
        <svg className={s.svg}>
          <use href={`${sprite}#icon-cancel-circle`}></use>
        </svg>
      </button>
    );
  }

  return (
    <div className={s.removeContainer}>
      <p className={s.advise}>
        Advice: click on the cross if you want to delete
      </p>
      <ul className={s.categoriesList}>
        {categories.map(item => (
          <li key={item._id} className={s.categoriesItem} id={item._id}>
            {item.name}
            {addDeleteButton(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsRemoveCategory;
