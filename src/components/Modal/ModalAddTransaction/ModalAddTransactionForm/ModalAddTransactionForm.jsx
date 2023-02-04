import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Datetime from 'react-datetime';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datetime/css/react-datetime.css';

import { RiCalendar2Line } from 'react-icons/ri';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import getDate from 'utils/getDate';
import scss from './ModalAddTransactionForm.module.scss';
import ModalAddTransactionFormMenu from './ModalAddTransactionFormMenu/ModalAddTransactionFormMenu';
import financeOperation from 'redux/finance/financeOperation';

let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

const schema = yup.object().shape({
  amount: yup
    .number()
    .test(val => {
      if (val !== undefined) {
        return patternTwoDigisAfterComma.test(val);
      }
      return true;
    })
    .min(0.01, 'Please, enter an amount min 0.01')
    .max(2500000, 'Please, enter an amount max 2500000!')
    .required('Amount is required'),

  comment: yup
    .string()
    .trim()
    .max(100, 'Maximum 100 symbols')
    .matches(/(^[а-яА-ЯёЁa-zA-ZЇїІіЄєҐґ ]+$)/u, 'Please, enter only letters'),
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

  const today = new Date();
  const lastYear = new Date('December 31, 2018 23:59:59');
  const disableFutureDt = current => {
    return current.isBefore(today) && current.isAfter(lastYear);
  };

  const createDate = ({ _d }) => {
    setBekDate(_d.toISOString());
    setDate(getDate(_d));
  };

  const handleOpen = e => {
    setOpen(true);
  };

  const addValueCategory = (_id, name) => {
    setCategoryId(_id);
    setCategoryValue(name);
    handleClose();
  };

  const handleSubmit = (values, { resetForm }) => {
    const { amount, comment } = values;

    if (checkboxStatus) {
      if (comment === '') {
        const formValues = {
          transactionType: checkboxStatus,
          amount: Number(amount).toFixed(2),
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

  const handleClose = e => {
    setOpen(false);
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

  const createValidateMessageAmount = r => {
    if (
      r === 'Please, enter an amount min 0.01' ||
      r === 'Please, enter an amount max 2500000!' ||
      r === 'Amount is required'
    ) {
      return <div className={scss.errorSum}>{r}</div>;
    }
    return (
      <div className={scss.errorSum}>
        Digits only, no more than two after the decimal point
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
                onClick={open ? handleClose : handleOpen}
                autoComplete="off"
                readOnly
              />
              <button
                className={scss.openMenuBtn}
                type="button"
                onClick={open ? handleClose : handleOpen}
              >
                {!open ? (
                  <HiOutlineChevronDown
                    className={scss.openMenuBtnIcon}
                  ></HiOutlineChevronDown>
                ) : (
                  <HiOutlineChevronUp
                    className={scss.openMenuBtnIcon}
                  ></HiOutlineChevronUp>
                )}
              </button>
              {open && (
                <ModalAddTransactionFormMenu
                  handleCategory={addValueCategory}
                  handleBlur={handleClose}
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
              render={createValidateMessageAmount}
            ></ErrorMessage>
          </label>
          <label className={scss.dateBox}>
            <Datetime
              timeFormat={false}
              renderInput={renderCalendarInput}
              isValidDate={disableFutureDt}
              dateFormat="DD.MM.YYYY"
              closeOnSelect={true}
              initialValue={new Date()}
              onChange={createDate}
            />
          </label>
          <label className={scss.commentBox}>
            <Field
              className={scss.addFormTextarea}
              name="comment"
              component="textarea"
              placeholder="Comment"
              onKeyPress={e => {
                if (e.charCode === 13) {
                  e.preventDefault();
                }
              }}
            ></Field>
            <ErrorMessage
              className={scss.errorMessage}
              name="comment"
              component="div"
              render={r => {
                return <div className={scss.errorComment}>{r}</div>;
              }}
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
