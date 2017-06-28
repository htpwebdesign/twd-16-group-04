// Insert JavaScript here...
(function($){
	'use strict';
	const $header = $('header');
	let $window = $(window);

	console.log($window.width());

	$('#mobile-menu').on('click', function(){
		$header.toggleClass('show-mobile-menu');
	});
	$window.on('resize', function(){
		if($window.width() <= 400){
		console.log('sfd');
		
		$('#logo').attr('src', 'images/small_logo.jpg');
	}else{
		$('#logo').attr('src', 'images/logo.png');
		}
	});

	


})(jQuery);