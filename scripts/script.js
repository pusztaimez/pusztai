
var menu = document.getElementById('menuContainer');
var menuGomb = document.getElementById('menuToggle');
function menuNyitoCsuko (e) {
  e.preventDefault();
  menu.classList.toggle('hide');
}

function menuNyitoCsuko2 () {
  menu.classList.toggle('hide');
}

menuGomb.addEventListener('click', menuNyitoCsuko, false);

menuNyitoCsuko2();

menuContainer.addEventListener('click', menuNyitoCsuko, false);

/*
$('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});
*/
