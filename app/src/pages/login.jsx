import '../styles/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLogin } from '../services/API';
import { getToken } from '../features/token';
import { Navigate } from 'react-router-dom';

function Login() {
  // Use State
  let [loginErreur, setLoginErreur] = useState('');
  let [loginStatus, setLoginStatus] = useState(0);

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [remember, setRemember] = useState(false);

  // Use Selector
  const token = useSelector((state) => state.token.value);

  // Use Effect
  useEffect(() => {
    if (token === localStorage.getItem('token')) {
      ajoutToken(localStorage.getItem('token'));
    }
  });

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const login = getLogin({ email: email, password: password });

    login.then((res) => {
      if (res.status !== 400) {
        setLoginStatus(res.status);
        ajoutToken(res.token);
      } else {
        setLoginErreur(res.message);
      }
    });
  };
  // Handle Remember
  const handleRemember = (event) => {
    setRemember(event.target.checked);
  };

  // Add the token
  const dispatch = useDispatch();

  const ajoutToken = (token) => {
    if (remember === true) {
      localStorage.setItem('token', token);
    }
    dispatch(getToken(token));
  };

  // Redirection
  if (
    token !== 0 ||
    loginStatus === 200 ||
    token === localStorage.getItem('token')
  )
    return <Navigate to='/profil' />;

  return (
    <main className='bg-dark'>
      <section className='sign-in-content'>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='input-remember'>
            <input type='checkbox' id='remember-me' onChange={handleRemember} />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <div>{loginErreur}</div>
          <button className='sign-in-button'>Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
