$(document).ready(function() {
	$(".menu-icon").on("click", function() {
		$(".overlay").toggleClass("open");
		$(".contain").toggleClass("change");
	});
});

const yourInstance = new TypeIt("#element1", {
	strings: ["designer", "developer"],
	lifeLike: true,
	breakLines: false,
	nextStringDelay: 3000,
	loopDelay: 3000,
	loop: true
});

const secondInstance = new TypeIt("#element2", {
	strings: ["About Me", "My Skills", "What I Do..."],
	breakLines: false,
	nextStringDelay: 3000,
	loop: false,
	startDelay: 500,
	lifeLike: true,
	autoStart: false
});

const thirdInstance = new TypeIt("#element3", {
	strings: ["Projects", "Recent Work..."],
	breakLines: false,
	nextStringDelay: 3000,
	loop: false,
	startDelay: 500,
	lifeLike: true,
	autoStart: false
});

const fourthInstance = new TypeIt("#element4", {
	strings: ["Contact Me", "Let's Talk..."],
	breakLines: false,
	nextStringDelay: 3000,
	loop: false,
	startDelay: 500,
	lifeLike: true,
	autoStart: false
});

$(window).scroll(function() {
   var hT = $('.scroll-to').offset().top,
       hH = $('.scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
	   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
	   }
});
