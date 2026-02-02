let mobMenuButton = document.querySelector('.mob__menu__button');

mobMenuButton.addEventListener('click', function(){
  let navMenu = document.querySelector('#navmenu');
  navMenu.classList.toggle('mobmenu__hidden');
  this.classList.toggle('opened');
})