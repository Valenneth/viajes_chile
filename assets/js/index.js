import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

/* tooltips */
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
/* smooth scroll (creo) */
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

/* nav de transparente a negro */
document.addEventListener("scroll", function () {
	var navbar = document.getElementById("navbar");

	var scrollPosition = window.scrollY;

	if (scrollPosition > 10) {
		navbar.style.backgroundColor = "#000";
	} else {
		navbar.style.backgroundColor = "transparent";
	}
});

/* script modal */
var modal = document.getElementById("miModal");
var botonAbrir = document.getElementById("abrirModal");
var botonCerrar = document.getElementsByClassName("cerrar")[0];

botonAbrir.onclick = function () {
	modal.style.display = "block";
};

botonCerrar.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

/* alerta requerida */
document.getElementById("alertButton").addEventListener("click", function() {
	alert("Tu mensaje ha sido enviado.");
  });