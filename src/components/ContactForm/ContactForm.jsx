import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup';
import { MdOutlineGroupAdd } from 'react-icons/md';
import css from './ContactForm.module.css';

import { addContact } from '../../redux/contacts/operations';

import { useDispatch, useSelector } from 'react-redux';

import toast, { Toaster } from 'react-hot-toast';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const isAdded = visibleContacts.find(
      item =>
        item.name.trim().toLowerCase() === values.name.trim().toLowerCase() ||
        item.number === values.number
    );
    if (isAdded) {
      toast('This contact is already added to your contacts!');
      return;
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: 'pink',
            color: 'black',
          },
        }}
      />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.formBox}>
          <label className={css.formLabel}>Name</label>
          <Field
            className={css.formField}
            name="name"
            type="text"
            placeholder="Anna Schmidt"
          />
          <div>
            <ErrorMessage name="name" as="span" />
          </div>

          <label className={css.formLabel}>Number</label>
          <Field
            className={css.formField}
            name="number"
            type="number"
            placeholder="123-45-67"
          />
          <div>
            <ErrorMessage name="number" as="span" />
          </div>

          <button className={css.buttonAdd} type="submit">
            <MdOutlineGroupAdd className={css.btnImg} />
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
