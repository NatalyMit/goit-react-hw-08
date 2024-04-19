import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={style.navMenu}>
      <NavLink to="/" className={style.navLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={style.navLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
