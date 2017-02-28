//Global namespace slots: none
$("#content").children().hide();
$("#wrapper").css("background", GMD.tabs.filter(function(val) {
	return val.name === GMD.tab_selected;
})[0].color);
$("#content-" + GMD.tab_selected).show();
$(".tab").removeClass("active");
$("#tab-" + GMD.tab_selected).addClass("active");
