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
        $('.js-open-filter').removeClass('open');
        $('.sidebar-cont_filter').removeClass('open'); 
        $('.sidebar-cont_catalog').removeClass('open'); 
        $('body').removeClass('open-catalog');
        $('body').removeClass('open-filter');
		return false;
	});
    
    /* open catalog */
    $('.js-open-catalog').click(function(){
		$(this).toggleClass('open'), 
		$('.sidebar-cont_catalog').toggleClass('open'); 
        $('.menu').removeClass('open'); 
        $('.js-nav').removeClass('open');
        $('.js-open-filter').removeClass('open');
        $('.sidebar-cont_filter').removeClass('open'); 
        $('body').toggleClass('open-catalog');
        $('body').removeClass('open-filter');
		return false;
	});
    
    /* open ашдеук */
    $('.js-open-filter').click(function(){
		$(this).toggleClass('open'), 
		$('.sidebar-cont_filter').toggleClass('open'); 
        $('.menu').removeClass('open'); 
        $('.js-open-catalog').removeClass('open');
        $('.sidebar-cont_catalog').removeClass('open'); 
        $('body').toggleClass('open-filter');
        $('body').removeClass('open-catalog');
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
    };
    if($(".styled").length){
    	$('.styled').styler();
    };
    
    $('.button-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.button-plus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) + 1;
        count = count > ($input.attr("maxlength")) ? ($input.attr("maxlength")) : count;
        $input.val(count);
        $input.change();
        return false;
    });
    
    $('.list-basket__close').click(function(){
        $(this).parent().remove();
		return false;
	});

	$(".js-show-toggle").toggle(function() {
		$('.text-show-toggle').slideToggle();
		$(this).text("Свернуть");
	 }, function() {
		$('.text-show-toggle').slideToggle();
		$(this).text("Развернуть, чтобы узнать подробности");
	});
    
    if($("#slider_price").length){
        $("#slider_price").slider({
            min: 0,
            max: 100000,
            step:1,
            values: [0,46000],
            range: true,
            stop: function(event, ui) {
                jQuery("input#min_cost_1").val(jQuery("#slider_price").slider("values",0));
                jQuery("input#max_cost_1").val(jQuery("#slider_price").slider("values",1));
            },
            slide: function(event, ui){
                jQuery("input#min_cost_1").val(jQuery("#slider_price").slider("values",0));
                jQuery("input#max_cost_1").val(jQuery("#slider_price").slider("values",1));
            }
         });
    };
    
    $(".js-show-text").toggle(function () {
        $(this).parents('.js-parents-toggle').find('.js-toggle').slideUp();
        $(this).text("Развернуть, чтобы узнать подробности");
        $(this).addClass('active');
    }, function () {
        $(this).parents('.js-parents-toggle').find('.js-toggle').slideDown();
        $(this).text("Свернуть, чтоб не мешало");
        $(this).removeClass('active');
    });
    
    $(".js-scrool-to").click(function () {
        var target_scroll3 = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target_scroll3).offset().top}, 1000);
    });
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



