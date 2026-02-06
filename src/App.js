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

  const promoDishes = [
    {
    id: 1,
    title:'Greek salad',
    image:'./img/promobox.jpg',
    description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ad culpa, officiis praesentium quas minima incidunt magnam commodi sin reiciendis necessitatibus delectus neque rerum cumque reprehenderit! Deleniti vel hic soluta!',
    price:'12.75',
  },
    {
    id: 2,
    title:'Turkish salad',
    image:'./img/promobox.jpg',
    description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ad culpa, officiis praesentium quas minima incidunt magnam commodi sin reiciendis necessitatibus delectus neque rerum cumque reprehenderit! Deleniti vel hic soluta!',
    price:'11.55',
  },
    {
    id: 3,
    title:'Spanish salad',
    image:'./img/promobox.jpg',
    description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ad culpa, officiis praesentium quas minima incidunt magnam commodi sin reiciendis necessitatibus delectus neque rerum cumque reprehenderit! Deleniti vel hic soluta!',
    price:'16.35',
  },
    {
    id: 4,
    title:'Italic salad',
    image:'./img/promobox.jpg',
    description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ad culpa, officiis praesentium quas minima incidunt magnam commodi sin reiciendis necessitatibus delectus neque rerum cumque reprehenderit! Deleniti vel hic soluta!',
    price:'15.15',
  },
]

const coldMenu = [
  {
    id: 1,
    title:'Chicken Salad',
    image:'./img/menubox.jpg',
    price:'12.49',
  },
  {
    id: 2,
    title:'Tuna Salad',
    image:'./img/menubox.jpg',
    price:'18.49',
  },
  {
    id: 3,
    title:'Veggy Salad',
    image:'./img/menubox.jpg',
    price:'21.49',
  },
  {
    id: 4,
    title:'Tortillioni',
    image:'./img/menubox.jpg',
    price:'14.25',
  },
  {
    id: 5,
    title:'Chiabatta',
    image:'./img/menubox.jpg',
    price:'9.55',
  },
];

const hotMenu = [
  {
    id: 1,
    title:'Pasta Carbonara',
    image:'./img/menubox.jpg',
    price:'18.49',
  },
  {
    id: 2,
    title:'Pasta Bolognese',
    image:'./img/menubox.jpg',
    price:'22.49',
  },
  {
    id: 3,
    title:'Pasta Fettucini',
    image:'./img/menubox.jpg',
    price:'15.49',
  },
  {
    id: 4,
    title:'Pasta Fokkacha',
    image:'./img/menubox.jpg',
    price:'19.25',
  },
  {
    id: 5,
    title:'Pasta Salmon',
    image:'./img/menubox.jpg',
    price:'23.55',
  },
];

  const [bookingData, setBookingData] = useState(null);
  return (
    <BrowserRouter>
    <div className="App">
          <HeaderComp />
          <Routes>
            <Route path='/' element={<MainComp/>} />
            <Route path='/intro' element={<Intro/>} />
            <Route path='/promo' element={<Promo promoDishes={promoDishes}/>} />
            <Route path='/menu' element={<Menu coldMenu={coldMenu} hotMenu={hotMenu}/>} />
            <Route path='/bookingpage' element={<BookingPage onBookingSubmit={setBookingData}/>} />
            <Route path='/confirmationpage' element={<ConfirmationPage bookingData={bookingData}/>} />
          </Routes>
          <FooterComp />
        </div>
    </BrowserRouter>
  );
}

export default App;
