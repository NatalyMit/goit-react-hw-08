import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

// import { selectNameFilter } from '../../redux/filtersSlice';
import { selectFilteredContacts } from '../../redux/selectors';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';

// const getFilterContacts = (contacts, filters) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filters.toLowerCase())
//   );
// };
const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filters = useSelector(selectNameFilter);
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  // const visibleContacts = selectFilteredContacts(contacts, filters);
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
