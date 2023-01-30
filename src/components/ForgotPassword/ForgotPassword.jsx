import s from './ForgotPassword.module.scss';
import sprite from '../../image/symbol-defs.svg';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as Email } from '../../image/email.svg';
import { Notify } from 'notiflix';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const initialValues = {
    email: '',
  };

  const [email, setEmail] = useState('');
  const [successResponse, setSuccessResponse] = useState('');

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
  });

  const onSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/api/auth/forgot-password', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ email }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        if (data.status === 'success') {
          Notify.success(data.message);
          setSuccessResponse(data.status);
          return;
        }
        Notify.failure(data.message);
      });
  };

  return (
    <div className={s.formContainer}>
      <div className={s.logo}>
        <svg width="120" height="30" className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>
      {successResponse === 'success' ? (
        <div>
          <h1 className={s.title}>
            Check inbox to complete the password reset!
          </h1>
        </div>
      ) : (
        <div>
          <h1 className={s.title}>
            Please enter your E-mail to reset the password:
          </h1>

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

                <button type="submit" className={s.loginBtn}>
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
      <Link to="/login" className={s.BackBtn}>
        Back to login page
      </Link>
    </div>
  );
};

export default ForgotPassword;
