'use strict';

var init = function() {
  var carousel = document.getElementById('carousel'),
      navButtons = document.querySelectorAll('#navigation button'),
      panelCount = carousel.children.length,

      theta = 0,
      onNavButtonClick = function( event ){
        var increment = parseInt( event.target.getAttribute('data-increment') );
        theta += ( 360 / panelCount ) * increment;
        carousel.style.transform = 'translateZ( -288px ) rotateY(' + theta + 'deg)';
console.log("theta: ",theta)
      };

  for (var i=0; i < 2; i++) {
    navButtons[i].addEventListener( 'click', onNavButtonClick, false);
  }

};
init();

var shower = document.getElementById('fd');
var feedback = document.querySelector('.thanks');
function showAlert (){
	 feedback.classList.add('show');

}
shower.addEventListener('click', showAlert);
