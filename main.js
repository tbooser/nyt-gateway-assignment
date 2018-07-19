"use strict";

$(document).ready(() => {
	$(".collapse").hide();
	let open = false;
	let current;

	$(".offer-box-mobile-details-button").click(event => {
		if (open === false) {
			current = event.currentTarget.classList[1];
			console.log(current);
			$("." + current).toggle();
			$(".collapse").show();
			$(".expand").hide();
			open = true;
		} else {
			$("." + current).hide();
			$(".collapse").hide();
			$(".expand").show();
			open = false;
		}
	});
});

