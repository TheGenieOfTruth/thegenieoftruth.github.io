//Global namespace slots: none
//This makes it so the user can use Left and Right arrow or A and D to control tab movement, if they are a move keyboard oriented user.
$(function() {
	function update() {
		location = tabs.indexOf(GMD.tab_selected) + direction;
		if (location === -1) {
			location = tabs.length - 1;
		} else if (location === tabs.length) {
			location = 0;
		}
		GMD.tab_focus(GMD.tabs[location].name, GMD.tabs[location].color);
	}
	var tabs = GMD.tabs.map(function(val) {
		return val.name;
	});
	var location = tabs.indexOf(GMD.tab_selected);
	var direction = 0;
	var main = setInterval(function() {}, 333);
	GMD.tab_focus(GMD.tabs[location].name, GMD.tabs[location].color);
	$(document).keydown(function() {
		var temp = direction;
		if (event.which === 37 || event.which === 65) {
			direction = -1;
		}
		if (event.which === 39 || event.which === 68) {
			direction = 1;
		}
		//49 which is 1. 97 which is numpad one. Following loop supports up to 9 tabs
		for (i = 0; i < tabs.length; i++) {
			if (event.which === i + 49 || event.which === i + 97) {
				location = i;
				GMD.tab_focus(GMD.tabs[i].name, GMD.tabs[i].color);
				//Interrupt the creation of the main loop
				temp = 1;
			}
		}
		if (temp === 0) {
			update();
			main = setInterval(update, 333);
		}
	});
	$(document).keyup(function(event) {
		if ([37, 39, 65, 68,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105].indexOf(event.which) != -1) {
			clearInterval(main);
			direction = 0;
		}
	});
});
