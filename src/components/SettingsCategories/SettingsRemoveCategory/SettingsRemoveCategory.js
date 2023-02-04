import React, { useState } from 'react';
import s from './SettingsRemoveCategory.module.scss';
import sprite from '../../../assets/Images/login/symbol-defs.svg';
import { useSelector } from 'react-redux';
import { userSelectors } from 'redux/user/userSelectors';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/userOperations';
import { Loader } from 'components';

const SettingsRemoveCategory = () => {
  const categories = useSelector(userSelectors.getCategories);
  const itemToReplace = categories.findIndex(i => i.name === 'Other expenses');
  const sortedCategory = [
    ...categories,
    [...categories].splice(itemToReplace, 1).pop(),
  ];
  sortedCategory.splice(itemToReplace, 1);

  const removeLoading = useSelector(userSelectors.removeLoading);
  const [deletingItem, setDeletingItem] = useState('');

  const dispatch = useDispatch();
  const itemStyle = item => ({
    backgroundColor: `${item?.color}`,
    borderRadius: `25px`,
  });

  function deleteCategory(id) {
    setDeletingItem(id);
    dispatch(userOperations.removeCategory(id));
  }

  return (
    <div className={s.removeContainer}>
      <p className={s.advise}>
        Advice: click on the cross if you want to delete
      </p>
      <ul className={s.categoriesList}>
        {sortedCategory.map(item => (
          <li key={item._id} style={itemStyle(item)}>
            <div
              className={
                item._id !== '10'
                  ? `${s.categoriesItem}`
                  : `${s.otherExpenses} ${s.categoriesItem}`
              }
              id={item._id}
            >
              <p>{item.name}</p>
              {item._id !== '10' ? (
                item._id === deletingItem && removeLoading === true ? (
                  <div className={s.loader}>
                    <Loader height={'22'} width={'22'} />
                  </div>
                ) : (
                  <button
                    onClick={() => deleteCategory(item._id)}
                    type="button"
                    className={s.buttonDelete}
                  >
                    <svg className={s.svg}>
                      <use href={`${sprite}#icon-cancel-circle`}></use>
                    </svg>
                  </button>
                )
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsRemoveCategory;
