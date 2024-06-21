document
  .getElementById("menu-categories")
  .addEventListener("change", function () {
    "use strict";
    var vis = document.querySelector(".toggle-on.menu-wrapper"),
      target = document.getElementById(this.value);
    if (vis !== null) {
      vis.className = "toggle-off menu-wrapper";
    }
    if (target !== null) {
      target.className = "toggle-on menu-wrapper";
    }
  });
