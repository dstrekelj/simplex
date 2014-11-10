/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";
	
	$('#Expression').keyup(function () {
		if ($(this).val().length !== 0) {
			var rgxp = new RegExp($(this).val(), 'g'),
				text = $('#Text').val(),
				result = text.replace(rgxp, function (str) {
					return '<span class="highlight">' + str + '</span>';
				});
			$('#Result span').html(result);
		} else {
			$('#Result span').html($('#Text').val());
		}
	});
	
	$('#Text').keyup(function () {
		if ($(this).val().length !== 0) {
			$('#Result span').html($('#Text').val());
		} else {
			$('#Result span').html('');
		}
	});
});