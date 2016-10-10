$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.js-nav').click(function(){
		$(this).toggleClass('open'), 
		$('.menu').toggleClass('open');
        $('.js-open-catalog').removeClass('open');
        $('.sidebar-catalog').removeClass('open'); 
		return false;
	});
    
    /* open catalog */
    $('.js-open-catalog').click(function(){
		$(this).toggleClass('open'), 
		$('.sidebar-catalog').toggleClass('open'); 
        $('.menu').removeClass('open'); 
        $('.js-nav').removeClass('open');
		return false;
	});
    
    /* close-open catalog level2 */
    $('.catalog__link').click(function(){
		$(this).parent().toggleClass('catalog__item_close'), 
		$(this).parent().find('.catalog-lvl2').slideToggle(); 
		return false;
	});
    
    /* close-open catalog level2 */
    $('.catalog-lvl2__link').click(function(){
        $('.catalog-lvl2__item').removeClass('catalog__item_active');
		$(this).parent().toggleClass('catalog__item_active'); 
		return false;
	});
    
    /* slider on main page*/
    if($(".main-slider").length){
        $('.main-slider').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });
    }
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+0});
	
	
	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



