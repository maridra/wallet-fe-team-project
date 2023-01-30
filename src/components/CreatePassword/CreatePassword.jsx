import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from '../CreatePassword/CreatePassword.module.scss';
import sprite from '../../image/symbol-defs.svg';
import { ReactComponent as PasswordLock } from '../../image/password_lock.svg';

import PasswordStrength from '../RegisterForm/PasswordStrength';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
// import { Notify } from 'notiflix';
import axios from 'axios';

const CreatePassword = () => {
  const initialValues = {
    password: '',
    passwordConfirm: '',
  };

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const userData = () => {
      const data = axios
        .get(`http://localhost:3000/api/auth/reset-password/`)
        .then(data => console.log('data', data));
    };

    userData();
    // fetch(`http://localhost:3000/api/auth/reset-password/`, {
    //   method: 'Get',
    //   crossDomain: true,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: JSON.stringify({ password }),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('data', data);
    //     if (data.status === 'success') {
    //       Notify.success(data.message);
    //       //   setSuccessResponse(data.status);
    //       return;
    //     }
    //     Notify.failure(data.message);
    //   });
  };

  const SignUpSchema = Yup.object().shape({
    password: Yup.string()
      .matches(
        /(?=.*[a-z])/,
        'Must contain at least 1 lowerCase alphabetical character'
      )
      .matches(
        /(?=.*[A-Z])/,
        'Must contain at least 1 UpperCase alphabetical character'
      )
      .matches(/(?=.*[0-9])/, 'Must contain at least 1 numeric character')
      .min(6, 'Minimum 6 characters required')
      .max(12, 'Maximum 12 characters')
      .required('Required field'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], "Passwords don't match!")
      .required('Required field'),
  });

  return (
    <div className={s.formContainer}>
      <div className={s.logo}>
        <svg width="120" height="30" className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>
      <Formik initialValues={initialValues} validationSchema={SignUpSchema}>
        {({ errors, touched }) => (
          <Form className={s.form} onSubmit={onSubmit}>
            <label className={s.label}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={classNames(s.input, {
                  [s.errorInput]: errors.password && touched.password,
                  [s.validInput]: !errors.password && touched.password,
                })}
                onInput={e => setPassword(e.target.value)}
                value={password}
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
            </label>
            <label className={s.label}>
              <Field
                type="password"
                name="passwordConfirm"
                placeholder="Confirm password"
                className={classNames(s.input, {
                  [s.errorInput]:
                    errors.passwordConfirm && touched.passwordConfirm,
                  [s.validInput]:
                    !errors.passwordConfirm && touched.passwordConfirm,
                })}
                value={confirmPassword}
                onInput={e => setConfirmPassword(e.target.value)}
              />
              <PasswordLock className={s.inputIcon} />
              {!errors.passwordConfirm && touched.passwordConfirm && (
                <PasswordLock className={s.validInputIcon} />
              )}
              {errors.passwordConfirm && touched.passwordConfirm && (
                <PasswordLock className={s.errorInputIcon} />
              )}
              {errors.passwordConfirm && touched.passwordConfirm && (
                <div className={s.errorField}>{errors.passwordConfirm}</div>
              )}
              <PasswordStrength
                password={password}
                className={s.passwordStrength}
              />
            </label>
            <button type="submit" className={s.registerBtn}>
              Create password
            </button>
            <Link to="/login" className={s.loginBtn}>
              Back to Login
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePassword;
