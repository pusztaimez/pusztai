
var menu = document.getElementById('menuContainer');
var menuGomb = document.getElementById('menuToggle');
function menuNyitoCsuko () {
  menu.classList.toggle('hide');
}

menuGomb.addEventListener('click', menuNyitoCsuko);

menuNyitoCsuko();

menuContainer.addEventListener('click', menuNyitoCsuko);

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
