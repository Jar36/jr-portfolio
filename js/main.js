

$(document).ready(function() {
	// opens and closes overlay nav from animated buttons

	$(".menu-icon").on("click", function() {
		$(".overlay").toggleClass("open");
		$(".contain").toggleClass("change");
	});

	// closes overlay from overlay links

	$(".overlay .overlay-menu li").on("click", function() {
		$(".overlay").toggleClass("open");
		$(".contain").toggleClass("change");
	});

	// Scroll to top button appears

	$(window).scroll(function() {
		if($(this).scrollTop() > 900) {
			$(".btt img").fadeIn(500);
		}

		else {
			$(".btt img").fadeOut(500);
		}
	});
	
	// Scroll to top scrolls up

	$(".btt img").click(function(){
		$("html, body").animate({scrollTop : 0}, 800);
		return false;
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
