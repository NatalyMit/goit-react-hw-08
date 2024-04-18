import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts, selectError, selectLoading } from './redux/selectors';
import { lazy, useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import Loader from './components/Loader/Loader';
import { selectIsRefreshing } from './redux/auth/selectors';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';

const Home = lazy(() => import('./pages/Home/Home'));
const Registration = lazy(() => import('./pages/Registration'));
const Login = lazy(() => import('./pages/Login'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <b>Refreshing user...</b>
      <Loader />
    </div>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Registration />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
export default App;
