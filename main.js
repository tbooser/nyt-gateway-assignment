"use strict";

$(document).ready(() => {
	let current;

	$(".offer-box-mobile-details-button").click(event => {
		current = event.currentTarget.parentElement.className; // Grabs the unique class name from the parent of the click
		$("#" + current).toggle(); // Toggles the id that matches the class name
		$(".collapse-" + current).toggle(); // Toggles the collapse button that matches the class name
		$(".expand-" + current).toggle(); // Toggles the expand button that matches the class name
	});
});
