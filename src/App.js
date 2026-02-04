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
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js';
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
