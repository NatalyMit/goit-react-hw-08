import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import style from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={style.wrapper}>
      <p className={style.username}>Welcome, {user.name}</p>
      <button
        className={style.btnLogOut}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Sign Out
      </button>
    </div>
  );
};
