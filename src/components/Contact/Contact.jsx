import { ImPhone } from 'react-icons/im';
import { ImUser } from 'react-icons/im';
import css from './Contact.module.css';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.cardsBox}>
      <div className={css.contactBox}>
        <ImUser />
        <p className={css.contactName}>{name}</p>
      </div>

      <div className={css.contactBox}>
        <ImPhone />
        <p className={css.contactName}>{number}</p>
      </div>

      <button
        className={css.btnDelete}
        onClick={handleDeleteContact}
        type="button"
      >
        <MdOutlineDeleteForever className={css.btnDeleteImg} />
        Delete
      </button>
    </div>
  );
};

export default Contact;
