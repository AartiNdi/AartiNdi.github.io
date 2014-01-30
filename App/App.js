/* Common app functionality */

var app = (function () {
	'use strict';

	var app = {};

	// Common initialization function (to be called from each page)
	app.initialize = function () {
		$('body').append(
			'<div id="notification-message">' +
				'<div class="padding">' +
					'<div id="notification-message-close"></div>' +
					'<div id="notification-message-header"></div>' +
					'<div id="notification-message-body"></div>' +
					'<div id="notification-message-url"</div>' +
				'</div>' +
			'</div>');

		$('#notification-message-close').click(function () {
			$('#notification-message').hide();
		});
		
		$('#notification-message-url')


		// After initialization, expose a common notification function
		app.showNotification = function (header, text, appurls) {
			$('#notification-message-header').text(header);
			$('#notification-message-body').text(text);
//			$('#notification-message').slideDown('fast');
			$('#notification-message-url').text(appurls);
		};
		
	};

	return app;
})();