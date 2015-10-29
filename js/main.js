// Chosen
// $(".deals").chosen({
// 	placeholder_text_single: "Find Deals on Travel"
// });
// $('.deals').on('change', function(evt, params) {
// 	$(".arrow").addClass('arrow-focus');
//     $(".input-arrow").addClass('flip');
// });
// Focus callback failing. Workaround.
// $(".chosen-results").click(function(){
// 	$(".destinations").focus();   
// });
// AutoComplete
$(function(){
    $('.destinations').autoComplete({
        minChars: 0,
        source: function(term, suggest){
            term = term.toLowerCase();
            var choices = [
                'Paris',                                                
                'Thailand', 
                'South America',
                'Near Me',
            	];
            var suggestions = [];
            for (i=0;i<choices.length;i++)
                if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
            suggest(suggestions);
        }       
    });
});

$(".search-arrow").click(function(){
    $(".chosen-container-single .chosen-search input[type='text']").blur();
    $(".chosen-container").toggleClass('chosen-with-drop chosen-container-active');
});

// Input arrow
$(".input-arrow").click(function(){
    $(".input-arrow").toggleClass('flip');
});
$('.destinations').on('focus', function(evt, params) {
    $(".input-arrow").addClass('flip');
});
$('.destinations').on('blur', function(evt, params) {
    $(".input-arrow").removeClass('flip');
    $(".paris").removeClass('paris-show');     
});

$('.destinations').on('change', function(evt, params) {
    $(".input-arrow").removeClass('flip');
    $(".paris").removeClass('paris-show');    
});

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

// Footer option
$('.todays-top-deals, .more-deals').click(function(){
    $('footer, .big-deal .internal-ad').toggleClass('footer-option')
});

// Grid on
$('a.flag').click(function(){
    $('.grid-overlay').toggleClass('grid-on')
});

// Paris
$(".destinations").keypress(function(){
    $('.arrow').addClass('arrow-focus');                    
    setTimeout(
        function() {
            $('.paris').addClass('paris-show');
        },
    800);
});

$(".deals").select2({
  minimumResultsForSearch: Infinity
});
