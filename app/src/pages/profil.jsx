import '../styles/profil.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFirstName } from '../slices/firstName';
import { getLastName } from '../slices/lastName';
import { getUser, saveUserProfil } from '../services/API';
import { Navigate } from 'react-router-dom';
import Account from '../components/account';

const Profil = () => {
  // Use State
  let [newFirstName, setNewFirstName] = useState('');
  let [newLastName, setNewLastName] = useState('');
  let [isEditing, setIsEditing] = useState(false);
  let [isSuccessfull, setIsSuccessfull] = useState('');
  let [responseClass, setResponseClass] = useState('response');

  // Use Selector / Use Effect
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.firstName.value);
  const lastName = useSelector((state) => state.lastName.value);

  const token = useSelector((state) => state.token.value);

  useEffect(() => {
    const user = getUser(token);
    user.then((res) => {
      dispatch(getFirstName(res.firstName));
      dispatch(getLastName(res.lastName));
    });
  }, []);

  // Edit name
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Save Edit
  const handleEditSave = async () => {
    setIsEditing(false);
    dispatch(getFirstName(newFirstName));
    dispatch(getLastName(newLastName));
    const fullName = { firstName: newFirstName, lastName: newLastName };
    const res = await saveUserProfil(token, fullName);

    setResponseClass(
      res.status === 200 ? 'response-success' : 'response-failure'
    );
    setIsSuccessfull(res.message);

    setTimeout(() => {
      setResponseClass('response');
      setIsSuccessfull('');
    }, 3000);
  };

  // Cancel Edit
  const handleEditCancel = () => {
    setIsEditing(false);
  };

  // Redirection
  if (!token) return <Navigate to='/login' />;

  return (
    <main className='main-profile'>
      <div className='header'>
        <h1 id='welcome'>
          Welcome back
          <br />
          <span
            id='full-name'
            style={{ display: isEditing ? 'none' : 'block' }}>
            {firstName} {lastName}
          </span>
        </h1>
        <button
          id='edit-button'
          type='button'
          onClick={handleEdit}
          style={{ display: isEditing ? 'none' : '' }}>
          Edit Name
        </button>
        <div
          id='edit-section'
          style={{ display: isEditing ? 'block' : 'none' }}>
          <form name='edit'>
            <div className='profil-input-wrapper'>
              <input
                type='text'
                placeholder={firstName}
                required
                onChange={(e) => setNewFirstName(e.target.value)}
              />
            </div>
            <div className='profil-input-wrapper'>
              <input
                type='text'
                placeholder={lastName}
                required
                onChange={(e) => setNewLastName(e.target.value)}
              />
            </div>
          </form>
          <div className='btn-form'>
            <button
              type='submit'
              className='save-button'
              onClick={handleEditSave}>
              Save
            </button>
            <button
              type='button'
              className='cancel-button'
              onClick={handleEditCancel}>
              Cancel
            </button>
          </div>
        </div>
        <div className={responseClass}>{isSuccessfull}</div>
      </div>
      <h2 className='sr-only'>Accounts</h2>
      <Account
        titre='Argent Bank Checking (x8349)'
        montant='$2,082.79'
        description='Available Balance'
      />
      <Account
        titre='Argent Bank Savings (x6712)'
        montant='$10,928.42'
        description='Available Balance'
      />
      <Account
        titre='Argent Bank Credit Card (x8349)'
        montant='$184.30'
        description='Current Balance'
      />
    </main>
  );
};

export default Profil;
