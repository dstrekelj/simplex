/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";
	
	function update() {
		var rgxp = new RegExp($('#Expression').val(), 'g'),
			text = $('#Text').val(),
			result = text.replace(rgxp, function (str) {
				return '<span class="highlight">' + str + '</span>';
			});
		$('#Result span').html(result);
	}
	
	$('#Expression').keyup(function () {
		if ($(this).val().length !== 0) {
			update();
		} else {
			$('#Result span').html($('#Text').val());
		}
	});
	
	$('#Text').keyup(function () {
		if ($(this).val().length !== 0) {
			$('#Result span').html($('#Text').val());
			update();
		} else {
			$('#Result span').html('');
		}
	});
});