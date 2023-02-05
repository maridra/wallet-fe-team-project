import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { Notify } from 'notiflix';
import classNames from 'classnames';
import * as Yup from 'yup';

import PasswordStrength from '../RegisterForm/PasswordStrength';
import passwordAPI from 'API/passwordRecoveryAPI';

import { ReactComponent as PasswordLock } from '../../assets/Images/login/password_lock.svg';
import sprite from '../../assets/Images/login/symbol-defs.svg';
import s from '../CreatePassword/CreatePassword.module.scss';

const CreatePassword = () => {
  const [status, setStatus] = useState(null);
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const token = searchParams.get('token');

  const initialValues = {
    password: '',
    passwordConfirm: '',
  };

  const onSubmit = ({password}) => {
    passwordAPI
      .createPasswordAPI(id, token, password)
      .then(res => setStatus(res.code))
      .catch(error => Notify.failure(error.message));
  };

  const SignUpSchema = Yup.object().shape({
    password: Yup.string()
      .matches(/(^[a-zA-Z0-9]+$)/, "Can only include numbers and latin letters")
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
        <Formik initialValues={initialValues} validationSchema={SignUpSchema} onSubmit={onSubmit}>
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form className={s.form} onSubmit={handleSubmit}>
              <label className={s.label}>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="true"
                  className={classNames(s.input, {
                    [s.errorInput]: errors.password && touched.password,
                    [s.validInput]: !errors.password && touched.password,
                  })}
                  onChange={handleChange}
                  value={values.password}
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
                  <div className={s.errorField}>{errors.passwordConfirm}</div>
                )}
                <PasswordStrength
                  password={values.password}
                  className={s.passwordStrength}
                />
              </label>
              <button type="submit" className={s.registerBtn}>
                CREATE
              </button>
              <Link to="/login" className={s.loginBtn}>
                BACK TO LOGIN
              </Link>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default CreatePassword;
