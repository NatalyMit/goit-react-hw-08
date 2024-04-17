import './App.css';
import { useDispatch } from 'react-redux';
// import { selectContacts, selectError, selectLoading } from './redux/selectors';
import { useEffect } from 'react';
import { useAuth } from './hooks';
import { refreshUser } from './redux/auth/operations';
import Loader from './components/Loader/Loader';
import RouteSection from './components/RouteSection/RouteSection';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div>
      <b>Refreshing user...</b>
      <Loader />
    </div>
  ) : (
    <>
      <RouteSection />
    </>
  );
};
