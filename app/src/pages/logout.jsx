import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getToken } from '../slices/token';
import { Navigate } from 'react-router-dom';

function Logout() {
  // Effacement token au Logout
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken(0));
    localStorage.removeItem('token');
  }, []);

  // Redirection
  return <Navigate to='/' />;
}

export default Logout;
