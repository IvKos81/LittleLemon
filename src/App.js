import './App.css';
// import './assets/script.js';
import './assets/style.css';
import HeaderComp from './components/Header';
import MainComp from './components/Main';
import FooterComp from './components/Footer';
import PopupDelivery from './components/PopupDelivery';
import PopupReservation from './components/PopupReservation';

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <MainComp />
      <FooterComp/>
      <PopupReservation />
      <PopupDelivery />
    </div>
  );
}

export default App;
