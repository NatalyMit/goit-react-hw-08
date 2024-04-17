import { NavLink } from 'react-router-dom';
import TitleDocument from '../../components/TitleDocument';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <TitleDocument>Phonebook</TitleDocument>

      <section>
        <div className={style.container}>
          <h1 className={style.mainTitle}>
            My Phone Book: Manage your contacts
          </h1>
          <NavLink className={style.btnContacts} to="/contacts">
            Go to contacts
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
