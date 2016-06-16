
var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

function moveRight(elem) {
	elem.className = " move-right";
};

function moveLeft(elem) {
	elem.className = " move-left";
};

function moveToContactPage(elem) {
	elem.className = " move-left-to-contact"
};

function moveDown(elem) {
	elem.className = " move-down"
};

function moveUp(elem) {
        elem.className = " move-up";    
};

domReady(function() {
	var portfolioNav = document.getElementById("portfolio-nav");
	var contactNav = document.getElementById("contact-nav");
	var aboutNav = document.getElementById("about-nav");
	var navWrapper = document.getElementById("nav-wrapper");
	var portfolioWrapper = document.getElementById("portfolio-wrapper");
	var contactWrapper = document.getElementById("contact-wrapper");
	var aboutWrapper = document.getElementById("about-wrapper");
	var homeBtn = document.getElementById("home-btn");
	var homeBtnContactsPage = document.getElementById("home-btn-contacts");
        var homeBtnAboutPage = document.getElementById("home-btn-about");

	portfolioNav.addEventListener("click", function() {
		moveRight(navWrapper);
		moveRight(portfolioWrapper);
		moveRight(contactWrapper);
	});

	homeBtn.addEventListener("click", function() {
		moveLeft(portfolioWrapper);
		moveLeft(navWrapper);
		moveLeft(contactWrapper);	
	});

	contactNav.addEventListener("click", function() {
		moveToContactPage(portfolioWrapper);
		moveToContactPage(navWrapper);
		moveToContactPage(contactWrapper);	
	});

	homeBtnContactsPage.addEventListener("click", function() {
		moveLeft(portfolioWrapper);
		moveLeft(navWrapper);
		moveLeft(contactWrapper);		
	});

	aboutNav.addEventListener("click", function() {
		moveDown(portfolioWrapper);
		moveDown(navWrapper);
		moveDown(contactWrapper);
		moveDown(aboutWrapper);
	});

        homeBtnAboutPage.addEventListener("click", function() {
                moveUp(portfolioWrapper);
                moveUp(navWrapper);
                moveUp(contactWrapper);
                moveUp(aboutWrapper);
        });        

});
