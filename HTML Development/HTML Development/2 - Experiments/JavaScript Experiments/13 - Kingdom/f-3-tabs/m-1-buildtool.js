//Global namespace slots: Addon to GMD
GMD.tab_focus = function(name, color) {
	$("#content").children().hide();
	$("#wrapper").css("background", color);
	$("#content-" + name).show();
	$(".tab, .tab-mini").removeClass("active");
	$("#tab-" + name).addClass("active");
	GMD.tab_selected = name;
	GMD.update();
};
GMD.tab_build = function(name, color) {
	$("#tab-" + name).click(function() {
		GMD.tab_focus(name, color);
	});
	GMD.tabs.push({
		"name": name,
		"color": color
	});
};
