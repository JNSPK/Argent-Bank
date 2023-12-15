import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getToken } from '../slices/token';
import { getUser } from '../services/API';
import { getFirstName } from '../slices/firstName';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // Use Selector
  const firstName = useSelector((state) => state.firstName.value);
  const token = useSelector((state) => state.token.value);

  // Use Effect
  const dispatch = useDispatch();
  useEffect(() => {
    if (token === localStorage.getItem('token')) {
      dispatch(getToken(localStorage.getItem('token')));
      const user = getUser(token);
      user.then((obj) => {
        dispatch(getFirstName(obj.firstName));
      });
    }
  });

  return (
    <nav className='main-nav'>
      <NavLink className='main-nav-logo' to='/'>
        <img
          className='main-nav-logo-image'
          src='../src/assets/img/argentBankLogo.png'
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </NavLink>
      <div>
        {/* Non Connecté */}
        {token === 0 && (
          <>
            <NavLink to='/login' className='main-nav-item'>
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </NavLink>
          </>
        )}

        {/* Connecté */}
        {token !== 0 && (
          <>
            <NavLink to='/profil' className='main-nav-item'>
              <FontAwesomeIcon icon={faCircleUser} />
              {firstName}
            </NavLink>
            <NavLink to='/logout' className='main-nav-item'>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
