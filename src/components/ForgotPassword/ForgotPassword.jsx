import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { Notify } from 'notiflix';
import classNames from 'classnames';
import * as Yup from 'yup';

import passwordAPI from 'API/passwordRecoveryAPI';

import { ReactComponent as Email } from '../../assets/Images/login/email.svg';
import sprite from '../../assets/Images/login/symbol-defs.svg';
import s from './ForgotPassword.module.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const initialValues = {
    email: '',
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
  });

  const onSubmit = e => {
    e.preventDefault();

    if (!email.length) {
      Notify.warning('E-mail is require!');
      return;
    }

    passwordAPI
      .forgotPasswordAPI(email)
      .then(res => setStatus(res.code))
      .catch(error =>
        Notify.failure(`User with email: ${email}, not found!`, error)
      );
  };

  return (
    <div className={s.formContainer}>
      <div className={s.logo}>
        <svg width="120" height="30" className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>
      {status === 201 ? (
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
                  SEND
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
      <Link to="/login" className={s.BackBtn}>
        BACK TO LOG IN
      </Link>
    </div>
  );
};

export default ForgotPassword;
