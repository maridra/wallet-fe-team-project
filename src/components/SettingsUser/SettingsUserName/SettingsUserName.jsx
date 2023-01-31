import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from 'redux/user/userSelectors';
import userOperations from 'redux/user/userOperations';

import { ReactComponent as Name } from '../../../assets/Images/login/name.svg';

import s from './SettingsUserName.module.scss';

export default function SettingsUserName() {
  const dispatch = useDispatch();
  const firstName = useSelector(userSelectors.getFirstName);

  const initialValues = {
    firstName: firstName,
  };

  const onSubmit = ({ firstName }) => {
    dispatch(userOperations.updateUserName({ firstName }));
  };

  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
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
              name="firstName"
              placeholder="First name"
              className={classNames(s.input, {
                [s.errorInput]: errors.firstName && touched.firstName,
                [s.validInput]: !errors.firstName && touched.firstName,
              })}
              value={values.firstName}
              onChange={handleChange}
            />
            <Name className={classNames(s.inputIcon, s.validInputIcon)} />
            {errors.firstName && touched.firstName && (
              <Name className={classNames(s.inputIcon, s.errorInputIcon)} />
            )}
            {errors.firstName && touched.firstName && (
              <div className={s.errorField}>{errors.firstName}</div>
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
