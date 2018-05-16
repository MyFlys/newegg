(function($){
	$('.goodList').css('display','none');
	$('.navLeft h3').mouseover(function(){
		$('.goodList').css('display','block');
	});
	$('.navLeft h3').mouseout(function(){
		$('.goodList').css('display','none');
	});
})(jQuery);
