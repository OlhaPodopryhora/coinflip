(function (){
	'use strict';

function genRand(min, max) {
		return Math.round(Math.random() * (max - min)) + min;
	}

	let backSide = document.querySelector('.coin__side--tails'),
		coin = document.querySelector('.coin');

	coin.addEventListener('click', function(){
		let result = genRand(0, 1);
		backSide.style.zIndex = --result;
	});

	setInterval(function(){
		setZIndex()
	}, 1000);

	/*if (genRand(0, 1)) {
		backSide.style.zIndex = 0;
	} else {
		backSide.style.zIndex = -1;
	}*/


	function setZIndex() {
		let result = genRand(0, 1);
		backSide.style.zIndex = --result;
	}

})();