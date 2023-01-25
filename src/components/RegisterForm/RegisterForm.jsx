import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import s from "../RegisterForm/RegisterForm.module.scss";
import PasswordStrength from "./PasswordStrength";
import { useState } from "react";

const RegisterForm = () => {
  const initialValues = {
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: ''
  }

  const [password, setPassword] = useState('');

  const onSubmit = (values) => {
    console.log(values);
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
      <div className={s.logo}></div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignUpSchema}>
        <Form className={s.form}>
          <label className={s.label}>
            <Field type="email" name="email" placeholder="E-mail" className={s.input} />
            <ErrorMessage name="email" component="p" className={s.errorField} />
          </label>
          <label className={s.label}>
            <Field type="password" name="password" placeholder="Password" className={s.input} onInput={e => setPassword(e.target.value)} />
            <ErrorMessage name="password" component="p" className={s.errorField} />
          </label>
          <label className={s.label}>
            <Field type="password" name="passwordConfirm" placeholder="Confirm password" className={s.input} />
            <ErrorMessage name="passwordConfirm" component="p" className={s.errorField} />
            <PasswordStrength password={password} />
          </label>
          <label className={s.label}>
            <Field type="text" name="firstName" placeholder="First name" className={s.input} />
            <ErrorMessage name="firstName" component="p" className={s.errorField} />
          </label>
          <button type="submit" className={s.registerBtn}>REGISTER</button>
          <button type="button" className={s.loginBtn}>LOG IN</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterForm;