import { useEffect, useRef} from "react";

function MobMenuButton() {

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      let mobMenu = document.querySelector('.mob__menu__button')
      let navMenu = document.querySelector('#navmenu');
      navMenu.classList.toggle('mobmenu__hidden');
      mobMenu.classList.toggle('opened');
    };

    const button = buttonRef.current;
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return(
    <button ref={buttonRef} className='mob__menu__button' type="button"></button>
  )
}

export default MobMenuButton;