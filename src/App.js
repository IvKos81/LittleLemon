import './App.css';
// import './assets/style.css';
import { useState } from 'react';
import HeaderComp from './components/Header';
import MainComp from './components/Main';
import FooterComp from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Promo from './components/Promo';
import BookingPage from './components/BookingPage';
import ConfirmationPage from './components/ConfirmationPage';


function App() {
  const [bookingData, setBookingData] = useState(null);
  return (
    <BrowserRouter>
    <div className="App">
          <HeaderComp />
          <Routes>
            <Route path='/' element={<MainComp/>} />
            <Route path='/intro' element={<Intro/>} />
            <Route path='/promo' element={<Promo/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/bookingpage' element={<BookingPage onBookingSubmit={setBookingData}/>} />
            <Route path='/confirmationpage' element={<ConfirmationPage bookingData={bookingData}/>} />
          </Routes>
          <FooterComp />
        </div>
    </BrowserRouter>
  );
}

export default App;
