import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "../LoginForm/LoginForm.module.scss";
import * as Yup from 'yup';
import sprite from "../../image/symbol-defs.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import authOperations from "redux/auth/authOperations";

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: ''
  }

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  }

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/, "Must be a valid email!")
      .email("Must be a valid email!")
      .min(10)
      .max(63)
      .required("Required field"),
    password: Yup.string()
      .min(6, "Minimum 6 characters required")
      .max(12, "Maximum 12 characters")
      .required("Required field")
  })

  return (
    <div className={s.formContainer}>
      <div className={s.logo}>
        <svg width="120" height="30" className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}>
        <Form className={s.form} onSubmit={onSubmit}>
          <label className={s.label}>
            <Field type="email" name="email" placeholder="E-mail" className={s.input} value={email} onInput={e => setEmail(e.target.value)} />
            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-email`}></use>
            </svg>
            <ErrorMessage name="email" component="p" className={s.errorField} />
          </label>
          <label className={s.label}>
            <Field type="password" name="password" placeholder="Password" className={s.input} value={password} onInput={e => setPassword(e.target.value)}/>
            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-password-lock`}></use>
            </svg>
            <ErrorMessage name="password" component="p" className={s.errorField} />
          </label>
          <button type="submit" className={s.loginBtn}>LOG IN</button>
          <Link to="/SignUp" className={s.registerBtn}>REGISTER</Link>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm;