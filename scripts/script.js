
var menu = document.getElementById('menuContainer');
var menuGomb = document.getElementById('menuToggle');
function menuNyitoCsuko () {
  menu.classList.toggle('hide');
}

menuGomb.addEventListener('click', menuNyitoCsuko);
if (window.innerWidth < 500) {
menuNyitoCsuko();
}
