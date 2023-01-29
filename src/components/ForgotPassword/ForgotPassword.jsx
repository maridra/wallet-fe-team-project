import s from './ForgotPassword.module.scss';
import sprite from '../../image/symbol-defs.svg';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as Email } from '../../image/email.svg';

const ForgotPassword = () => {
  const initialValues = {
    email: '',
  };

  //   const dispatch = useDispatch();
  const [email, setEmail] = useState('');

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
    // dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <div className={s.formContainer}>
      <div className={s.logo}>
        <svg width="120" height="30" className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>
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
            {/* <Link to="/SignUp" className={s.registerBtn}>
              REGISTER
            </Link> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
