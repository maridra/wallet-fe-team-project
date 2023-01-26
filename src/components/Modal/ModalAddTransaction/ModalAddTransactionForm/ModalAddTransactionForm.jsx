import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Datetime from 'react-datetime';
// import { useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import { RiCalendar2Line } from 'react-icons/ri';
import scss from './ModalAddTransactionForm.module.scss';

const schema = yup.object().shape({
  sum: yup.number().min(0.01).max(2500000).required(),
  date: yup.string().required(),
});
const initialValues = {
  category: '',
  sum: '',
};

const ModalAddTransactionForm = prop => {
  const { checkboxStatus } = prop;
  // const [sum, setSum] = useState('');

  // const getDate = e => {
  //   const oldDate = new Date(Date.parse(e._d));
  //   let dd = oldDate.getDate();
  //   if (dd < 10) {
  //     dd = '0' + dd;
  //   }
  //   let mm = oldDate.getMonth() + 1;
  //   if (mm < 10) {
  //     mm = '0' + mm;
  //   }
  //   let yy = oldDate.getFullYear();

  //   const newDate = dd + '.' + mm + '.' + yy;

  //   return setDate(newDate);
  // };

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.elements.category) {
      const formValues = {
        sum: form.elements.sum.value,
        date: form.elements.date.value,
      };
      const isValid = await schema.isValid({
        sum: form.elements.sum.value,
        date: form.elements.date.value,
      });

      console.log(isValid);
      if (isValid) {
        return console.log(formValues);
      }
      return alert('hi');
    } else {
      const formValues = {
        category: form.elements.category.value,
        sum: form.elements.sum.value,
        date: form.elements.date.value,
      };
      return console.log(formValues);
    }
  };

  const renderInput = (props, openCalendar) => {
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
    <Formik initialValues={initialValues} validationSchema={schema}>
      <Form className={scss.calculatorForm} onSubmit={handleSubmit}>
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
              renderInput={renderInput}
              dateFormat="DD.MM.YYYY"
              closeOnSelect={true}
              initialValue={new Date()}
              // onChange={getDate}
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
