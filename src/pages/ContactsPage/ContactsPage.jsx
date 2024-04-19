import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import TitleDocument from '../../components/TitleDocument';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { LoaderIcon } from 'react-hot-toast';
import style from './ContactsPage.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <section>
        <TitleDocument>Your contacts page</TitleDocument>
        <div className={style.positionSection}>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
        {loading && <LoaderIcon />}
        {error && <p>Something wonts wrong. Please try again later</p>}
      </section>
    </>
  );
};

export default ContactsPage;
