import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from '../RegisterForm/RegisterForm.module.scss';
import { ReactComponent as Email } from '../../assets/Images/login/email.svg';
import { ReactComponent as PasswordLock } from '../../assets/Images/login/password_lock.svg';
import { ReactComponent as Name } from '../../assets/Images/login/name.svg';
import PasswordStrength from './PasswordStrength';
import { Link } from 'react-router-dom';
import sprite from '../../assets/Images/login/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import classNames from 'classnames';
import { toggleShowModalSuccessRegistration } from 'redux/modal/modalSlice';
import { BiHide, BiShow } from 'react-icons/bi';

import { ReactComponent as Google } from '../../assets/Images/login/google.svg';
import { authSelectors } from 'redux/auth/authSelectors';
import { Loader } from 'components';

const RegisterForm = () => {
  const initialValues = {
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
  };
  const dispatch = useDispatch();
  const loading = useSelector(authSelectors.isLoading);

  const onSubmit = ({ email, password, firstName }) => {
    const user = {
      email,
      password,
      firstName,
    };
    dispatch(authOperations.register(user)).then(response => {
      if (response.payload.status === 'success') {
        dispatch(toggleShowModalSuccessRegistration(true));
      }
    });
  };

  const [type, setType] = useState('password');

  const showPassword = () => {
    setType('text');
  };

  const hidePassword = () => {
    setType('password');
  };

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
        'Must be a valid email (latin letters). For example: example123@example.com'
      )
      .email('Must be a valid email!')
      .min(10)
      .max(63)
      .required('Required field'),
    password: Yup.string()
      .matches(/(^[a-zA-Z0-9]+$)/, 'Only numbers and Latin letters are allowed')
      .min(6, 'Minimum 6 characters required')
      .max(12, 'Maximum 12 characters')
      .required('Required field'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], "Passwords don't match!")
      .required('Required field'),
    firstName: Yup.string()
      .matches(
        /(^[а-яА-Яa-zA-Z0-9а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$)/,
        'Can only include numbers and letters'
      )
      .min(1)
      .max(12, 'Too long name')
      .required('Required field'),
  });

  return (
    <div className={s.formContainer}>
      <div className={s.logo}>
        <svg width="120" height="30" className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
              <Field
                type="email"
                name="email"
                placeholder="E-mail"
                className={classNames(s.input, {
                  [s.errorInput]: errors.email && touched.email,
                  [s.validInput]: !errors.email && touched.email,
                })}
                value={values.email}
                onChange={handleChange}
              />
              <Email className={s.inputIcon} />
              {!errors.email && touched.email && (
                <Email className={s.validInputIcon} />
              )}
              {errors.email && touched.email && (
                <Email className={s.errorInputIcon} />
              )}
              {errors.email && touched.email && (
                <div className={s.errorField}>{errors.email}</div>
              )}
            </label>
            <label className={s.label}>
              <Field
                type={type}
                name="password"
                placeholder="Password"
                autoComplete="true"
                className={classNames(s.input, {
                  [s.errorInput]: errors.password && touched.password,
                  [s.validInput]: !errors.password && touched.password,
                })}
                value={values.password}
                onChange={handleChange}
              />
              <PasswordLock className={s.inputIcon} />
              {!errors.password && touched.password && (
                <PasswordLock className={s.validInputIcon} />
              )}
              {errors.password && touched.password && (
                <PasswordLock className={s.errorInputIcon} />
              )}
              {errors.password && touched.password && (
                <div className={s.errorField}>{errors.password}</div>
              )}
              {type === 'password' ? (
                <span className={s.hideIcon}>
                  <BiHide
                    className={s.icon}
                    onMouseDown={showPassword}
                    onTouchStart={showPassword}
                  />
                </span>
              ) : (
                <span
                  className={s.showIcon}
                  onMouseUp={hidePassword}
                  onTouchEnd={hidePassword}
                >
                  <BiShow className={s.icon} />
                </span>
              )}
            </label>
            <label className={s.label}>
              <Field
                type="password"
                name="passwordConfirm"
                placeholder="Confirm password"
                autoComplete="true"
                className={classNames(s.input, {
                  [s.errorInput]:
                    errors.passwordConfirm && touched.passwordConfirm,
                  [s.validInput]:
                    !errors.passwordConfirm && touched.passwordConfirm,
                })}
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <PasswordLock className={s.inputIcon} />
              {!errors.passwordConfirm && touched.passwordConfirm && (
                <PasswordLock className={s.validInputIcon} />
              )}
              {errors.passwordConfirm && touched.passwordConfirm && (
                <PasswordLock className={s.errorInputIcon} />
              )}
              {errors.passwordConfirm && touched.passwordConfirm && (
                <div className={s.errorFieldConfirmPassword}>
                  {errors.passwordConfirm}
                </div>
              )}
              <PasswordStrength
                password={values.password}
                className={s.passwordStrength}
              />
            </label>
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
              <Name className={s.inputIcon} />
              {!errors.firstName && touched.firstName && (
                <Name className={s.validInputIcon} />
              )}
              {errors.firstName && touched.firstName && (
                <Name className={s.errorInputIcon} />
              )}
              {errors.firstName && touched.firstName && (
                <div className={s.errorField}>{errors.firstName}</div>
              )}
            </label>
            {loading === false ? <button type="submit" className={s.registerBtn}>
              register
            </button> : <button className={s.registerBtnLoading} disabled><Loader width='25' height='25'/>loading</button>}
            <Link to="/login" className={s.loginBtn}>
              log in
            </Link>
            <div className={s.googleBtn}>
              <a href="https://leaopards-team.onrender.com/api/auth/google">
                Continue with
              </a>
              <Google className={s.googleIcon} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
