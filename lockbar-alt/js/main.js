 // Waypoint
jQuery(function ($) {
	$('.deal').waypoint(function() {
		$('.header').toggleClass( 'animate' );
	},
	{
		offset: '-2%',
		triggerOnce: false
	});
});

// Smooth scroll

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -60
        }, 1000);
        return false;
      }
    }
  });
});