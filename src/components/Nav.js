function Nav() {
  return (
    <nav class="desktop__menu">
            <a href="#" class="logo__link">
                <img src="./img/logo.svg" alt="logo" height="50"/>
            </a>
            <ul id='navmenu' class="menu__list mobmenu__hidden">
                <li class="menu__point"><a href="#intro" class="menu__link">Intro</a></li>
                <li class="menu__point"><a href="#promo" class="menu__link">Promo</a></li>
                <li class="menu__point"><a href="#menu" class="menu__link">Menu</a></li>
                <li class="menu__point"><a href="#contact" class="menu__link">Contact</a></li>
                <li class="menu__point"><button popovertarget="mypopup" type='button' class="reserve">Reserve
                        table</button></li>
            </ul>
            <button class='mob__menu__button' type="button"></button>
        </nav>
  );
}

export default Nav;