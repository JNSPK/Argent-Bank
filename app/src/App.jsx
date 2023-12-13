import './styles/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Accueil from './pages/accueil';
import Login from './pages/login';
import Profil from './pages/profil';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profil' element={<Profil />} />
            {/* <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<Erreur404 />} /> */}
          </Routes>
          <Footer />
        </HashRouter>
      </Provider>
    </>
  );
}

export default App;
