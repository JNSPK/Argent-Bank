import './styles/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Accueil from './pages/accueil';
import Login from './pages/login';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/profil' element={<Profil />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Erreur404 />} /> */}
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
