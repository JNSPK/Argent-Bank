import '../styles/profil.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFirstName } from '../slices/firstName';
import { getLastName } from '../slices/lastName';
import { getUser } from '../services/API';
import { Navigate } from 'react-router-dom';
import Account from '../components/account';

const Profil = () => {
  // Use Selector / Use Effect
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.firstName.value);
  const lastName = useSelector((state) => state.lastName.value);

  const token = useSelector((state) => state.token.value);

  const user = getUser(token);
  user.then((res) => {
    dispatch(getFirstName(res.firstName));
    dispatch(getLastName(res.lastName));
  });

  // Redirection
  if (token === 0) return <Navigate to='/login' />;

  return (
    <main className='main-profile'>
      <div className='header'>
        <h1 id='welcome-name'>
          Welcome back
          <br />
          <span id='fullName'>
            {firstName} {lastName}
          </span>
        </h1>
        <button id='edit-button' type='button'>
          Edit Name
        </button>
        <div id='edit-section'>
          <form name='edit'>
            <div className='profil-input-wrapper'>
              <input type='text' placeholder={firstName} required />
            </div>
            <div className='profil-input-wrapper'>
              <input type='text' placeholder={lastName} required />
            </div>
          </form>
          <div className='btn-form'>
            <button type='submit' className='save-button'>
              Save
            </button>
            <button type='button' className='cancel-button'>
              Cancel
            </button>
          </div>
        </div>
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
