import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectLoading } from './redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {!contacts.length && <b>Create your contact list now</b>}
      {error && <p>Something went wrong. Try again...</p>}
      {loading && <p>Please wait.Loading...</p>}
      <ContactList />
    </div>
  );
};
