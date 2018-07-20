"use strict";

$(document).ready(() => {
  let active = {}; // Object to keep track of which dropdowns are open/closed

  $(".offer-box-mobile-details-button").click(event => {
    let current = null; // Stores the class name of the clicked box
    current = event.currentTarget.parentElement.className; // Grabs the unique class name from the parent of the click
    if (!active[current] || active[current] === false) {
      $("#" + current).removeClass("hidden"); // Removes hidden class from the matching text container
      $("#" + current).addClass("mobile"); // Adds the active class to the matching text container
      $(".collapse-" + current).toggle(); // Toggles the collapse button that matches the class name
      $(".expand-" + current).toggle(); // Toggles the expand button that matches the class name
      active[current] = true; // Sets the current box's active state to true
    } else if (active[current] === true) {
      $("#" + current).removeClass("mobile");
      $("#" + current).addClass("hidden");
      $(".collapse-" + current).toggle();
      $(".expand-" + current).toggle();
      active[current] = false;
    }
  });

  $("a").click(e => {
    e.preventDefault();
  });
});
