
var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

function moveRight(elem) {
	elem.className += " move-right";
};

function moveLeft(elem) {
	elem.className += " move-left";
};

domReady(function() {

	var portfolio = document.getElementById("portfolio-nav");
	var navWrapper = document.getElementById("nav-wrapper");
	var portfolioWrapper = document.getElementById("portfolio-wrapper");

	var test = document.getElementById("project-one");

	portfolio.addEventListener("click", function() {
		portfolioWrapper.className="";
		navWrapper.className="";
		moveRight(navWrapper);
		moveRight(portfolioWrapper);

	});

	test.addEventListener("click", function() {
		portfolioWrapper.className="";
		navWrapper.className="";
		moveLeft(portfolioWrapper);
		moveLeft(navWrapper);
	});

});
