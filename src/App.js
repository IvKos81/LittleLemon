import './App.css';
import './assets/style.css';
import HeaderComp from './components/Header';
import MainComp from './components/Main';
import FooterComp from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Promo from './components/Promo';
import BookingPage from './components/BookingPage';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
          <HeaderComp />
          <Routes>
            <Route path='/intro' element={<Intro/>} />
            <Route path='/promo' element={<Promo/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/bookingpage' element={<BookingPage/>} />
          </Routes>
          <MainComp />
          <FooterComp />
        </div>
    </BrowserRouter>
  );
}

export default App;
