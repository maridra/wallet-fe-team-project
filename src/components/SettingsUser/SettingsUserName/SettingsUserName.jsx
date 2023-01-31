import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import { Notify } from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from 'redux/user/userSelectors';
import userOperations from 'redux/user/userOperations';

import { ReactComponent as Name } from '../../../assets/Images/login/name.svg';

import s from './SettingsUserName.module.scss';

export default function SettingsUserName() {
  const dispatch = useDispatch();
  const firstName = useSelector(userSelectors.getFirstName);

  const initialValues = {
    newFirstName: firstName,
  };

  const onSubmit = ({ newFirstName }) => {
    if (newFirstName !== firstName) {
      dispatch(userOperations.updateUserName({ firstName: newFirstName }));
      return;
    }
    Notify.info('The name remained unchanged!');
  };

  const SignUpSchema = Yup.object().shape({
    newFirstName: Yup.string()
      .matches(/(^[а-яА-ЯёЁa-zA-Z0-9]+$)/, 'Only letters and numbers')
      .min(1)
      .max(12, 'Too long name')
      .required('Required field'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            <Field
              type="text"
              name="newFirstName"
              placeholder="First name"
              className={classNames(s.input, {
                [s.errorInput]: errors.newFirstName && touched.newFirstName,
                [s.validInput]: !errors.newFirstName && touched.newFirstName,
              })}
              value={values.newFirstName}
              onChange={handleChange}
            />
            <Name className={classNames(s.inputIcon, s.validInputIcon)} />
            {errors.newFirstName && touched.newFirstName && (
              <Name className={classNames(s.inputIcon, s.errorInputIcon)} />
            )}
            {errors.newFirstName && touched.newFirstName && (
              <div className={s.errorField}>{errors.newFirstName}</div>
            )}
          </label>
          <button type="submit" className={s.submitBtn}>
            Change
          </button>
        </Form>
      )}
    </Formik>
  );
}
