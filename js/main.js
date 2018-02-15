$(document).ready(function() {
	$(".menu-icon").on("click", function() {
		$(".overlay").toggleClass("open");
		$(".contain").toggleClass("change");
	});
});

const yourInstance = new TypeIt("#element", {
	strings: ["designer", "developer"],
	breakLines: false,
	nextStringDelay: 3000,
	loopDelay: 3000,
	loop: true
});
