import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';
import axios from 'axios';
import * as Yup from 'yup';

import PasswordStrength from '../RegisterForm/PasswordStrength';

import { ReactComponent as PasswordLock } from '../../image/password_lock.svg';
import sprite from '../../image/symbol-defs.svg';
import s from '../CreatePassword/CreatePassword.module.scss';
import { Notify } from 'notiflix';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState(null);
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const token = searchParams.get('token');

  const initialValues = {
    password: '',
    passwordConfirm: '',
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password.length < 6) {
      return Notify.warning('Password is require');
    }
    if (confirmPassword.length < 6) {
      return Notify.warning('Confirm Password is require');
    }
    axios
      .post(`http://localhost:3000/api/auth/reset-password/${id}/${token}`, {
        password,
      })
      .then(res => setStatus(res.status))
      .catch(error => Notify.failure(error.message));
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
      {status === 201 ? (
        <div>
          <h1 className={s.title}>New password created!</h1>
          <Link to="/login" className={s.registerBtn}>
            LOG IN
          </Link>
        </div>
      ) : (
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
                CREATE PASSWORD
              </button>
              <Link to="/login" className={s.loginBtn}>
                LOG IN
              </Link>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default CreatePassword;
