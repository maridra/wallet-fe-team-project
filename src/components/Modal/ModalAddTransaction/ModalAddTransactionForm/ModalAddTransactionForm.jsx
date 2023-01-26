import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Datetime from 'react-datetime';
import { useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import { RiCalendar2Line } from 'react-icons/ri';
import getDate from 'utils/getDate';
import scss from './ModalAddTransactionForm.module.scss';

const schema = yup.object().shape({
  sum: yup.number().min(0.01).max(2500000).required(),
});
const initialValues = {
  category: '',
  sum: '',
};
const initialValuesTwo = {
  sum: '',
};

const ModalAddTransactionForm = prop => {
  const { checkboxStatus } = prop;
  const [date, setDate] = useState(getDate());

  const createDate = date => {
    setDate(getDate(date));
  };

  const handleSubmit = (values, { resetForm }) => {
    const { category, sum } = values;
    if (category === '') {
      const formValues = { sum, date };
      console.log(formValues);
      return resetForm();
    }
    const formValues = { ...values, date };
    console.log(formValues);
    return resetForm();
  };

  const renderCalendarInput = (props, openCalendar) => {
    return (
      <div className={scss.dataBox}>
        <Field
          {...props}
          className={scss.calculatorFormInput}
          type="text"
          placeholder="date"
          name="date"
          autoComplete="off"
          readOnly
        ></Field>
        <button className={scss.dataBtn} type="button" onClick={openCalendar}>
          <RiCalendar2Line className={scss.dataBtnIcon}></RiCalendar2Line>
        </button>
      </div>
    );
  };

  return (
    <Formik
      initialValues={!checkboxStatus ? initialValues : initialValuesTwo}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={scss.calculatorForm}>
        <div className={scss.calculatorFormInputContainer}>
          {!checkboxStatus && (
            <label>
              <Field
                className={scss.calculatorFormInput}
                type="text"
                placeholder="Select a category"
                name="category"
              ></Field>
              <ErrorMessage
                className={scss.errorMessage}
                name="category"
                component="div"
              ></ErrorMessage>
            </label>
          )}
          <label>
            <Field
              className={scss.calculatorFormInput}
              type="text"
              placeholder="0.00"
              name="sum"
            ></Field>

            <ErrorMessage
              className={scss.errorMessage}
              name="sum"
              component="div"
            ></ErrorMessage>
          </label>
          <label>
            <Datetime
              timeFormat={false}
              renderInput={renderCalendarInput}
              dateFormat="DD.MM.YYYY"
              closeOnSelect={true}
              initialValue={new Date()}
              onChange={createDate}
            />
          </label>
          <label>
            <Field
              className={scss.calculatorFormTextarea}
              name="Comment"
              component="textarea"
              placeholder="Comment"
            ></Field>
            <ErrorMessage
              className={scss.errorMessage}
              name="Comment"
              component="div"
            ></ErrorMessage>
          </label>
        </div>
        <button type="submit" className={scss.addBtn}>
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default ModalAddTransactionForm;
