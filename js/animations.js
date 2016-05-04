
function hide(elem) {
	elem.className += " hide";
};


document.addEventListener("DOMContentLoaded", function() {


	var portfolio = document.getElementById("portfolio-nav");
	portfolio.addEventListener("click", hide(portfolio));


});