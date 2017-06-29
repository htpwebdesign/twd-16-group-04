// Insert JavaScript here...
(function($){
	'use strict';
	const $header = $('header');
	let $window = $(window);

	$('#mobile-menu').on('click', function(){
		$header.toggleClass('show-mobile-menu');
	});
	$window.on('resize', function(){
		let $windowWidth = $window.width();
		if($windowWidth <= 560){
			$('#mussel').attr('src', 'images/mussel_small.jpg');

		}else{
			$('#mussel').attr('src', 'images/mussel.jpg');

		}

		if($windowWidth <= 400){
			$('#logo').attr('src', 'images/small_logo.jpg');
		}else{
			$('#logo').attr('src', 'images/logo.png');
		}
	});

	
})(jQuery);