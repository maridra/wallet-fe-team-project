import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Datetime from 'react-datetime';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
import { RiCalendar2Line } from 'react-icons/ri';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import getDate from 'utils/getDate';
import scss from './ModalAddTransactionForm.module.scss';
import ModalAddTransactionFormMenu from './ModalAddTransactionFormMenu/ModalAddTransactionFormMenu';
import financeOperation from 'redux/finance/financeOperation';

const schema = yup.object().shape({
  amount: yup.number().min(0.01).max(2500000).required(),
});
const initialValues = {
  amount: '',
  comment: '',
};

const ModalAddTransactionForm = prop => {
  const { checkboxStatus, onClick } = prop;
  const [bekDate, setBekDate] = useState(new Date().toISOString());
  const [date, setDate] = useState(getDate());
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState('10');
  const [categoryValue, setCategoryValue] = useState('Other expenses');

  const dispatch = useDispatch();

  const createDate = ({ _d }) => {
    setBekDate(_d.toISOString());
    setDate(getDate(_d));
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const addValueCategory = (_id, name) => {
    setCategoryId(_id);
    setCategoryValue(name);
  };

  const handleSubmit = (values, { resetForm }) => {
    const { amount, comment } = values;

    if (checkboxStatus) {
      if (comment === '') {
        const formValues = {
          transactionType: checkboxStatus,
          amount: Number(amount),
          date: bekDate,
        };
        dispatch(financeOperation.addTransaction(formValues));
        onClick();
        return;
      }
      const formValues = {
        transactionType: checkboxStatus,
        comment,
        amount: Number(amount),
        date: bekDate,
      };
      dispatch(financeOperation.addTransaction(formValues));
      onClick();
      return;
    }
    if (comment === '') {
      const formValues = {
        transactionType: checkboxStatus,
        category: categoryId,
        amount: Number(amount),
        date: bekDate,
      };
      dispatch(financeOperation.addTransaction(formValues));
      onClick();
      return;
    }
    const formValues = {
      transactionType: checkboxStatus,
      category: categoryId,
      comment,
      amount: Number(amount),
      date: bekDate,
    };
    dispatch(financeOperation.addTransaction(formValues));
    onClick();
    return;
  };

  const renderCalendarInput = (props, openCalendar) => {
    return (
      <div className={scss.dataBox}>
        <Field
          {...props}
          className={scss.addFormInputDate}
          type="text"
          placeholder="date"
          name="date"
          autoComplete="off"
          value={date}
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
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={scss.addForm}>
        <div className={scss.addFormInputContainer}>
          {!checkboxStatus && (
            <label className={scss.categoryLabel}>
              <Field
                className={scss.addFormInputCategory}
                type="text"
                placeholder="Select a category"
                name="category"
                value={categoryValue}
                onClick={handleOpen}
                autoComplete="off"
                readOnly
              ></Field>
              <button
                className={scss.openMenuBtn}
                type="button"
                onClick={handleOpen}
              >
                {!open ? (
                  <FiChevronDown
                    className={scss.openMenuBtnIcon}
                  ></FiChevronDown>
                ) : (
                  <FiChevronUp className={scss.openMenuBtnIcon}></FiChevronUp>
                )}
              </button>
              {open && (
                <ModalAddTransactionFormMenu
                  handleCategory={addValueCategory}
                ></ModalAddTransactionFormMenu>
              )}
            </label>
          )}
          <label className={scss.sumBox}>
            <Field
              className={scss.addFormInputSum}
              type="text"
              placeholder="0.00"
              name="amount"
              autoComplete="off"
            ></Field>
            <ErrorMessage
              className={scss.errorMessage}
              name="amount"
              component="div"
              render={() => (
                <div className={scss.error}>
                  Please, enter an amount from 0.01 to 2500000
                </div>
              )}
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
              className={scss.addFormTextarea}
              name="comment"
              component="textarea"
              placeholder="Comment"
            ></Field>
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
