import './App.css';
import './assets/script.js';
import './assets/style.css';
import HeaderComp from './components/Header';
import MainComp from './components/Main';
import FooterComp from './components/Footer';
import PopupDelivery from './components/PopupDelivery';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <MainComp />
      <FooterComp/>
      <BookingPage/>
      <PopupDelivery />
    </div>
  );
}

export default App;
