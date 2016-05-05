
var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};
function moveRight(elem) {
	elem.className += " move-right";
};


// document.addEventListener("DOMContentLoaded", function() {
domReady(function() {

	var portfolio = document.getElementById("portfolio-nav");
	var navWrapper = document.getElementById("nav-wrapper");

	portfolio.addEventListener("click", function() {
		moveRight(navWrapper);
	});

});


// });