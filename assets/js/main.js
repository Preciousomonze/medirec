/*	
  EDITED BY Omonzejele Precious O.
	Web Developer @ Jempton
    signature:preyous 
    twitter:@preciousomonze
    http://www.jempton.com  
	*/

jQuery(document).ready(function($) {
/*
    $(".scroll a").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $("li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });



    */

	/*====================================
	 Page a Link Smooth Scrolling
	 ======================================*/
    $('.scroll a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
            $(".scroll li").removeClass('active');
            $(this).parents('.scroll li').toggleClass('active');

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 900);

                return false;
            }
        }


    });



    });



//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length > 0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({
				target: '.scrollspy',
				offset: 152
			});
		}




	//Scroll Menu
/*
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});

	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	*/
	
