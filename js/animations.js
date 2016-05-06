
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

	var portfolioNav = document.getElementById("portfolio-nav");
	var contactNav = document.getElementById("contact-wrapper");
	var navWrapper = document.getElementById("nav-wrapper");
	var portfolioWrapper = document.getElementById("portfolio-wrapper");
	var homeBtn = document.getElementById("home-btn");

	portfolioNav.addEventListener("click", function() {
		portfolioWrapper.className="";
		navWrapper.className="";
		moveRight(navWrapper);
		moveRight(portfolioWrapper);

	});

	homeBtn.addEventListener("click", function() {
		portfolioWrapper.className="";
		navWrapper.className="";
		moveLeft(portfolioWrapper);
		moveLeft(navWrapper);
	});

	contactNav.addEventListener("click", function() {
		portfolio.wrapper.className = "";
		navWrapper.className = "";
	});


});
