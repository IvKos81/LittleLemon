document.querySelector('.mob__menu__button').addEventListener('click', function(){
  let navMenu = document.querySelector('#navmenu');
  navMenu.classList.toggle('mobmenu__hidden');
  this.classList.toggle('opened');
})