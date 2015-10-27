// Show menu

$('.input, .find-deals .x').click(function(){
	$('.menu').toggleClass('show-menu')
	$('html, body, .menu').toggleClass('no-overflow')
	$('.find-deals').removeClass('opacity-zero')	
});

$('.find-deals .deals').click(function(){
	$('.find-deals').addClass('slide-off')
	$('.find-deals2').addClass('slide-on')
	$('.find-deals2').removeClass('opacity-zero')	
	setTimeout(
	    function() {
			$('.find-deals').addClass('opacity-zero')	
	    },
	300); 	
});

// $('.search-for-deals').click(function(){
// 	$('.find-deals2').removeClass('slide-on')	
// 	$('.find-deals2').addClass('slide-off')
// 	$('.find-deals3').addClass('slide-on')
// 	$('.find-deals3').removeClass('opacity-zero')	
// 	setTimeout(
// 	    function() {
// 			$('.find-deals2').addClass('opacity-zero')	
// 	    },
// 	300); 	
// });

$('.find-deals .x').click(function(){
    setTimeout(
	    function() {
			$('.find-deals').removeClass('slide-off')
			$('.find-deals').removeClass('opacity-zero')
			$('.find-deals2').removeClass('slide-on')	
	    },
	300);   
});

$('.find-deals2 .x').click(function(){
	$('.find-deals').removeClass('slide-off')
	$('.find-deals').removeClass('opacity-zero')
	$('.find-deals2').removeClass('slide-on')
	setTimeout(
	    function() {
			$('.find-deals2').addClass('opacity-zero')
	    },
	300);   	
});

$('.find-deals3 .x').click(function(){
	$('.find-deals2').removeClass('slide-off')
	$('.find-deals2').addClass('slide-on')
	$('.find-deals2').removeClass('opacity-zero')
	$('.find-deals3').removeClass('slide-on')
	setTimeout(
	    function() {
			$('.find-deals3').addClass('opacity-zero')
	    },
	300);   	
});

$('.find-deals3 .search-arrow').click(function(){
	$('.find-deals3').removeClass('slide-on')
	$('.find-deals4').addClass('slide-on')
	$('.find-deals4').removeClass('opacity-zero')
	setTimeout(
	    function() {
			$('.find-deals3').addClass('opacity-zero')
	    },
	300);   	
});

$('.find-deals4 .x').click(function(){
	$('.menu').toggleClass('show-menu')
	$('html, body, .menu').toggleClass('no-overflow')	
	setTimeout(
	    function() {
	    	$('.find-deals').removeClass('opacity-zero')
	    	$('.find-deals').removeClass('slide-off')
	    	$('.find-deals2').removeClass('slide-off')
	    	$('.find-deals4').removeClass('slide-on')
	    	$('.find-deals4').addClass('opacity-zero')
	    	$('.search-field').val('');
	    },
	300);   	
});

// $('.find-deals2 li:not(.search-for-deals)').click(function(){
// 	$('.find-deals2').removeClass('slide-on')
// 	$('.find-deals5').addClass('slide-on')
// 	setTimeout(
// 	    function() {
// 			$('.find-deals2').addClass('opacity-zero')
// 			$('.find-deals').removeClass('slide-off')
// 	    },
// 	300);   	
// });

$('.find-deals5 .x').click(function(){
	$('.find-deals5').addClass('opacity-zero')	
	$('.menu').removeClass('show-menu')
	$('html, body, .menu').removeClass('no-overflow')	
	setTimeout(
	    function() {
			$('.find-deals5').addClass('opacity-zero')
			$('.find-deals5').removeClass('slide-on')	
	    },
	300); 	
});

$('.flights').click(function(){
	$('.find-deals2').addClass('slide-off')
	$('.find-deals6').addClass('slide-on')
	$('.find-deals6').removeClass('opacity-zero')
	$('.find-deals2').removeClass('slide-on')		
	setTimeout(
	    function() {
			$('.find-deals2').addClass('opacity-zero')	
	    },
	300); 	
});

$('.find-deals6 .x').click(function(){
	$('.find-deals2').addClass('slide-on')
	$('.find-deals6').removeClass('slide-on')
	$('.find-deals2').removeClass('opacity-zero')
	$('.find-deals2').removeClass('slide-off')		
	setTimeout(
	    function() {
			$('.find-deals6').addClass('opacity-zero')	
	    },
	300); 	
});

$('.hotels').click(function(){
	$('.find-deals2').addClass('slide-off')
	$('.find-deals7').addClass('slide-on')
	$('.find-deals7').removeClass('opacity-zero')
	$('.find-deals2').removeClass('slide-on')		
	setTimeout(
	    function() {
			$('.find-deals2').addClass('opacity-zero')	
	    },
	300); 	
});

$('.find-deals7 .x').click(function(){
	$('.find-deals2').addClass('slide-on')
	$('.find-deals7').removeClass('slide-on')
	$('.find-deals2').removeClass('opacity-zero')
	$('.find-deals2').removeClass('slide-off')		
	setTimeout(
	    function() {
			$('.find-deals7').addClass('opacity-zero')	
	    },
	300); 	
});

$('.find-deals6 .dates').click(function(){
	$('.find-deals6').addClass('slide-off')
	$('.dates-screen2').addClass('slide-on')
	$('.dates-screen2').removeClass('opacity-zero')
	$('.find-deals6').removeClass('slide-on')		
	setTimeout(
	    function() {
			$('.find-deals6').addClass('opacity-zero')	
	    },
	300); 	
});

$('.dates-screen2 .x').click(function(){
	$('.find-deals6').addClass('slide-on')
	$('.dates-screen2').removeClass('slide-on')
	$('.find-deals6').removeClass('opacity-zero')
	$('.find-deals6').removeClass('slide-off')		
	setTimeout(
	    function() {
			$('.dates-screen2').addClass('opacity-zero')	
	    },
	300); 	
});

$('.find-deals7 .dates').click(function(){
	$('.find-deals7').addClass('slide-off')
	$('.dates-screen').addClass('slide-on')
	$('.dates-screen').removeClass('opacity-zero')
	$('.find-deals7').removeClass('slide-on')		
	setTimeout(
	    function() {
			$('.find-deals7').addClass('opacity-zero')	
	    },
	300); 	
});

$('.dates-screen .x').click(function(){
	$('.find-deals7').addClass('slide-on')
	$('.dates-screen').removeClass('slide-on')
	$('.find-deals7').removeClass('opacity-zero')
	$('.find-deals7').removeClass('slide-off')		
	setTimeout(
	    function() {
			$('.dates-screen').addClass('opacity-zero')	
	    },
	300); 	
});

$('.search-field').click(function(){
	$('.search-icon').addClass('opacity-zero')
});

// Search input
$(function(){
    $('.search-field').autoComplete({
        minChars: 1,
        source: function(term, suggest){
            term = term.toLowerCase();
            var choices = [
            	'Disney',
            	'Family-friendly', 
            	'Luxury' 
            	];
            var suggestions = [];
            for (i=0;i<choices.length;i++)
                if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
            suggest(suggestions);
        }
	    // renderItem: function (item, search){
	    //     search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    //     var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
	    //     return '<div class="autocomplete-suggestion" data-langname="'+item[0]+'" data-lang="'+item[1]+'" data-val="'+search+'"><img src="img/'+item[1]+'.png"> '+item[0].replace(re, "<b>$1</b>")+'</div>';
	    // }        

    });
});
