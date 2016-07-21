$(document).ready(function(e) {
		$('.navbar').scrollToFixed();
/*		$('.res-nav_click').click(function(){
				$('.main-nav').slideToggle();
				return false
		});*/
		$('.overlay').click(function() {
			$(this).remove();
		});
		$('.main-nav li a, .footer-logo a, .arrowLink, .mobile_navLogo').bind('click',function(event){
			var $anchor = $(this);			
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 102
			}, 1500,'easeInOutExpo');
			event.preventDefault();
		});
});
wow = new WOW(
	{
		animateClass: 'animated',
		offset: 100
	}
);
wow.init();

$(document).ready(function() {
	$('.whatIKnow').slick({
			autoplay: true,
			dots: true,
			infinite:true,
			autoplaySpeed: 3000,
			pauseOnHover:true,
			slidesToShow:5,
			slidesToScroll:1,
			pauseOnHover: true,
			arrows: true,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 796,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					 dots: true
				}
			},
			{
				breakpoint: 440,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});

});



