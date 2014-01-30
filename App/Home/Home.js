/// <reference path="../App.js" />
/*global app*/

(function () {
	'use strict';

	// The Office initialize function must be run each time a new page is loaded
	Office.initialize = function (reason) {
		$(document).ready(function () {
			app.initialize();

			displayItemDetails();
		});
	};

	// Displays the "Subject" and "From" fields, based on the current mail item
	function displayItemDetails() {
		var item = Office.context.mailbox.item;
		var entities = Office.context.mailbox.item.getEntities();
		var appurls = entities.urls;
		var idname = 'notification-message-url-';
		var urldisplay = '<div id="notification-message-url">';
		var urlid = '';
		var urlhref = '';
		var temp = '';
		for(var i=0; i<appurls.length; i++){
			var urlid = idname + i.toString();
			urlhref = appurls[i];
			temp = '<a id=url'+urlid+ 'href="'+ urlhref + '">'+ urlhref+ '</a><br>';
			urldisplay += temp;
			$('#links').append(temp);
		}
		urldisplay += "</div>"


		var from;
		if (item.itemType === Office.MailboxEnums.ItemType.Message) {
			from = item.from;
		} else if (item.itemType === Office.MailboxEnums.ItemType.Appointment) {
			from = item.organizer;
		}
		app.showNotification(from.displayName, from.emailAddress, urldisplay);

		if (from) {
		//	$('#from').text(from.displayName);
			$('#from').click(function () {
				app.showNotification(from.displayName, from.emailAddress, urldisplay);
			});
		}
	}
})();