(function init() {
    "use strict";

    const elements = document.querySelectorAll("p");

    elements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.classList.add("mark");
      });
      element.addEventListener("mouseleave", () => {
        element.classList.remove("mark");
      });
    });



})();