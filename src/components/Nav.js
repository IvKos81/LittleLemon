import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Intro from "./Intro";
import Contact from "./Contact";

function Nav() {
  return (
    <BrowserRouter>
    <nav className="desktop__menu">
            <a href="/" className="logo__link">
                <img src="./img/logo.svg" alt="logo" height="50"/>
            </a>
            <ul id='navmenu' className="menu__list mobmenu__hidden">
                <li className="menu__point"><Link to="#intro" className="menu__link">Intro</Link></li>
                <li className="menu__point"><a href="#promo" className="menu__link">Promo</a></li>
                <li className="menu__point"><a href="#menu" className="menu__link">Menu</a></li>
                <li className="menu__point"><Link to="#contact" className="menu__link">Contact</Link></li>
                <li className="menu__point"><button popoverTarget="mypopup" type='button' className="reserve">Reserve
                        table</button></li>
            </ul>
            <button className='mob__menu__button' type="button"></button>
        </nav>
        <Routes>
          <Route path='#intro' element={<Intro/>} />
          <Route path='#contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default Nav;