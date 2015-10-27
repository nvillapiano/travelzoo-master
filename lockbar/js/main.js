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