import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operation';
import { initialValuesSignIn } from '../../redux/auth/constants';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './LoginForm.module.css';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineMailOutline } from 'react-icons/md';

const validation = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      'Password must contain at least one number, one uppercase and one lowercase letter.'
      // Пароль повинен містити щонайменше одну цифру, одну велику та одну малу літеру.
    ),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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
          <Field type="email" name="email" placeholder=" " />
          <label className={style.formLabel}>Email</label>
          <MdOutlineMailOutline className={style.iconInput} size="20" />
        </div>
        <ErrorMessage
          className={style.errorSpan}
          name="email"
          component="span"
        />
        <div className={style.thumb}>
          <Field type="password" name="password" placeholder=" " />
          <label className={style.formLabel}>Password</label>
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
