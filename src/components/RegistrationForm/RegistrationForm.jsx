import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  password: '',
};

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('User name is rerquired!')
    .min(2, 'User name must be at least two characters!')
    .max(50, 'User name must be less than 50 characters!'),
  email: Yup.string()
    .required('Email is required!')
    .email('Must be a valid email!'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters!'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    dispatch(register(data));
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
      validationSchema={UserRegisterSchema}
    >
      <Form className={css.formWrapper}>
        <label className={css.formLabel}>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.formLabel}>
          Email
          <Field name="email" type="text" />
          <ErrorMessage name="email" component="span" className={css.error} />
        </label>
        <label className={css.formLabel}>
          Password
          <Field name="password" type="password" />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </label>

        <button className={css.formBtn} type="submit">
          Sing Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
