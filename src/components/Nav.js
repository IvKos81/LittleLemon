import { Link } from 'react-router-dom';
import MobMenuButton from './mobmenubutton/MobMenuButton.js';

function Nav() {

  return (
    <nav className="desktop__menu">
            <a href="/" className="logo__link" aria-label="On Click">
                <img src="./img/logo.svg" alt="logo" height="50"/>
            </a>
            <ul id='navmenu' className="menu__list mobmenu__hidden">
                <li className="menu__point"><Link to="/intro" className="menu__link" aria-label="On Click">Intro</Link></li>
                <li className="menu__point"><Link to="/promo" className="menu__link" aria-label="On Click">Promo</Link></li>
                <li className="menu__point"><Link to="/menu" className="menu__link" aria-label="On Click">Menu</Link></li>
                <li className="menu__point"><Link to='/bookingpage' type='button' className="reserve" aria-label="On Click">Reserve table</Link></li>
            </ul>
            <MobMenuButton/>
        </nav>
  );
}

export default Nav;