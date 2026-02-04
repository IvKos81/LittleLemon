import { useEffect } from "react";


function MobMenuButton() {
useEffect(() => {
  const script = document.createElement('script');
  script.src = '/script.js';
  script.async = true;
  
  document.body.appendChild(script);
  
  return () => {
    document.body.removeChild(script);
  };
}, []);
  return(
    <button className='mob__menu__button' type="button"></button>
  )
}

export default MobMenuButton;