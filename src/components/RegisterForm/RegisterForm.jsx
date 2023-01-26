import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import s from "../RegisterForm/RegisterForm.module.scss";
import PasswordStrength from "./PasswordStrength";
import { useState } from "react";
import { Link } from "react-router-dom";
import sprite from "../../image/symbol-defs.svg";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/authOperations";

const RegisterForm = () => {
  const initialValues = {
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: ''
  }

  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = ({ firstName, email, password }) => {
    const user = {
      firstName,
      email,
      password
    }
    dispatch(authOperations.register(user));
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
      .max(12, "Maximum 12")
      .required("Required field"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], "Passwords don't match!")
      .required("Required field"),
    firstName: Yup.string()
      .min(1)
      .max(12, "Too long name")
      .required("Required field")
  })

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <svg  width="120" height="30"className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignUpSchema}>
        <Form className={s.form}>
          <label className={s.label}>
            <Field type="email" name="email" placeholder="E-mail" className={s.input} />
            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-email`}></use>
            </svg>
            <ErrorMessage name="email" component="p" className={s.errorField} />
          </label>
          <label className={s.label}>
            <Field type="password" name="password" placeholder="Password" className={s.input} onInput={e => setPassword(e.target.value)} />
            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-password-lock`}></use>
            </svg>
            <ErrorMessage name="password" component="p" className={s.errorField} />
          </label>
          <label className={s.label}>
            <Field type="password" name="passwordConfirm" placeholder="Confirm password" className={s.input} />
            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-password-lock`}></use>
            </svg>
            <ErrorMessage name="passwordConfirm" component="p" className={s.errorField} />
            <PasswordStrength password={password} />
          </label>
          <label className={s.label}>
            <Field type="text" name="firstName" placeholder="First name" className={s.input} />
            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-name`}></use>
            </svg>
            <ErrorMessage name="firstName" component="p" className={s.errorField} />
          </label>
          <button type="submit" className={s.registerBtn}>REGISTER</button>
          <Link to="/login" className={s.loginBtn}>LOG IN</Link>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterForm;