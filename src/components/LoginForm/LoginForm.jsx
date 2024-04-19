import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './LoginForm.module.css';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineMailOutline } from 'react-icons/md';
import { logIn } from '../../redux/auth/operations';

const validation = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required').min(8),
});
const initialValuesSignIn = {
  email: '',
  password: ',',
};
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    dispatch(logIn(data));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValuesSignIn}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={style.containerForm}>
        <div className={style.thumb}>
          <Field className={style.formInput} type="email" name="email" />

          <MdOutlineMailOutline className={style.iconInput} size="20" />
        </div>
        <ErrorMessage
          className={style.errorSpan}
          name="email"
          component="span"
        />
        <div className={style.thumb}>
          <Field className={style.formInput} type="password" name="password" />

          <RiLockPasswordLine className={style.iconInput} size="20" />
        </div>
        <ErrorMessage
          className={style.errorSpan}
          name="password"
          component="span"
        />
        <button className={style.buttonLogin} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
