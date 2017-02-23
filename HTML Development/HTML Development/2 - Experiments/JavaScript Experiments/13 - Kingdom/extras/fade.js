//Fade, by me. Not needed but still pretty dank
(function($) {
	$.fn.fade = function(type, duration, wait) {
		var elems = $(this);
		setTimeout(function() {
			switch (type.toLowerCase()) {
				case 'in':
					elems.fadeIn(duration);
					break;
				case 'out':
					elems.fadeOut(duration);
			}
		}, wait);
		return this;
	};
})(jQuery);
