import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';

const initialFormData = {
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
      initialValues={initialFormData}
      onSubmit={handleSubmit}
      validationSchema={UserRegisterSchema}
    >
      <Form className={style.containerForm}>
        <label className={style.formLabel}>
          Name
          <div className={style.thumb}>
            <Field className={style.formInput} name="name" type="text" />
            <CgProfile className={style.iconInput} size="20" />
          </div>
        </label>
        <ErrorMessage
          name="name"
          component="span"
          className={style.errorSpan}
        />
        <label className={style.formLabel}>
          Email
          <div className={style.thumb}>
            <Field className={style.formInput} name="email" type="email" />
            <MdOutlineMailOutline className={style.iconInput} size="20" />
          </div>
          <ErrorMessage
            name="email"
            component="span"
            className={style.errorSpan}
          />
        </label>
        <label className={style.formLabel}>
          Password
          <div className={style.thumb}>
            <Field
              className={style.formInput}
              name="password"
              type="password"
            />
            <RiLockPasswordLine className={style.iconInput} size="20" />
          </div>
          <ErrorMessage
            name="password"
            component="span"
            className={style.errorSpan}
          />
        </label>

        <button className={style.buttonLogin} type="submit">
          Sing Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
