import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={css.contactsList}>
        {visibleContacts !== null &&
          visibleContacts.map(contact => (
            <li className={css.contactItem} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
