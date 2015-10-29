// Deals tabs
$('.tab1').click(function(){
    $('.deal-tab').addClass('show-me');
    $('.need-help').addClass('show-me');     
    $('.details').removeClass('show-me');
    $('.reviews').removeClass('show-me'); 
    $('.tab1').addClass('active-tab');
    $('.tab2').removeClass('active-tab');
    $('.tab3').removeClass('active-tab');     
});
$('.tab2').click(function(){
    $('.deal-tab').removeClass('show-me');
    $('.need-help').removeClass('show-me');
    $('.details').addClass('show-me');
    $('.reviews').removeClass('show-me');
    $('.tab1').removeClass('active-tab');
    $('.tab2').addClass('active-tab');
    $('.tab3').removeClass('active-tab');     
});
$('.tab3').click(function(){
    $('.deal-tab').removeClass('show-me');
    $('.need-help').removeClass('show-me');
    $('.details').removeClass('show-me');
    $('.reviews').addClass('show-me');
    $('.tab1').removeClass('active-tab');
    $('.tab2').removeClass('active-tab');
    $('.tab3').addClass('active-tab');     
});

 // Waypoint
jQuery(function ($) {
    $('.action-bar').waypoint(function() {
        $('.lockbar').toggleClass( 'animate' );
    },
    {
        // offset: '-15%',
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
          scrollTop: target.offset().top -80
        }, 600);
        return false;
      }
    }
  });
});

// Sort-by dropdown 
$('.sort-by').click(function(){
    $('.dropdown').toggleClass('show-dropdown')
});

// Footer option
$('.todays-top-deals, .more-deals').click(function(){
    $('footer, .big-deal .internal-ad').toggleClass('footer-option')
});

// Grid on
$('a.flag').click(function(){
    $('.grid-overlay').toggleClass('grid-on')
});

//interior nav fpo 
$('div.input1').click(function(){
    // $('div.input1 span').toggleClass('hide');
    $('.paris-fpo').toggleClass('show');
});
