import { NavLink } from 'react-router-dom';
import TitleDocument from '../../components/TitleDocument';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <TitleDocument>Phonebook</TitleDocument>

      <div className={style.container}>
        <h1 className={style.mainTitle}>My Phone Book: Manage your contacts</h1>
        <NavLink className={style.btnContacts} to="/contacts">
          Go to contacts
        </NavLink>
      </div>
    </>
  );
};

export default HomePage;
