import { Field, Form, Formik } from 'formik';
import s from '../LoginForm/LoginForm.module.scss';
import * as Yup from 'yup';
import sprite from '../../assets/Images/login/symbol-defs.svg';
import { ReactComponent as Email } from '../../assets/Images/login/email.svg';
import { ReactComponent as PasswordLock } from '../../assets/Images/login/password_lock.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from 'redux/auth/authOperations';
import classNames from 'classnames';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
        'Must be a valid email!'
      )
      .email('Must be a valid email!')
      .min(10)
      .max(63)
      .required('Required field'),
    password: Yup.string()
      .min(6, 'Minimum 6 characters required')
      .max(12, 'Maximum 12 characters')
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
                type="email"
                name="email"
                placeholder="E-mail"
                className={classNames(s.input, {
                  [s.errorInput]: errors.email && touched.email,
                  [s.validInput]: !errors.email && touched.email,
                })}
                value={email}
                onInput={e => setEmail(e.target.value)}
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
                type="password"
                name="password"
                placeholder="Password"
                className={classNames(s.input, {
                  [s.errorInput]: errors.password && touched.password,
                  [s.validInput]: !errors.password && touched.password,
                })}
                value={password}
                onInput={e => setPassword(e.target.value)}
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
            <button type="submit" className={s.loginBtn}>
              LOG IN
            </button>
            <Link to="/SignUp" className={s.registerBtn}>
              REGISTER
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
