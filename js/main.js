

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

	$(".footer-menu").find("a").click (function(e){
		e.preventDefault();
		var section = $(this).attr("href");
		$("html, body").animate({scrollTop: $(section).offset().top});
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
	strings: ["Let's Talk..."],
	breakLines: false,
	nextStringDelay: 3000,
	loop: false,
	startDelay: 500,
	lifeLike: true,
	autoStart: false
});

// Select all links with hashes

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  /*$(window).scroll(function() {
     var hT = $('.scroll-to').offset().top,
         hH = $('.scroll-to').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
  	   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
  	   }
  });*/
