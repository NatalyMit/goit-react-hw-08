import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

// import { selectNameFilter } from '../../redux/filtersSlice';
import { selectFilteredContacts } from '../../redux/selectors';

// const getFilterContacts = (contacts, filters) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filters.toLowerCase())
//   );
// };
const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filters = useSelector(selectNameFilter);
  const visibleContacts = useSelector(selectFilteredContacts);
  // const visibleContacts = selectFilteredContacts(contacts, filters);
  return (
    <ul className={css.contactsList}>
      {visibleContacts !== null &&
        visibleContacts.map(contact => (
          <li className={css.contactItem} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
