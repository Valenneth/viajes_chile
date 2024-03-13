const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {
  $(a).on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

document.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");

  var scrollPosition = window.scrollY;

  if (scrollPosition > 10) {
    navbar.style.backgroundColor = "#000";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
