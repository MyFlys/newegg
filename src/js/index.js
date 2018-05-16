$('.hot_comment_goods_c').css({'width':'175','overflow':'hidden'});
$('.hot_comment_goods_c:first').css('width','675');
$('.section2B li').mouseenter(function(){
	$(this).stop(true).animate({width:675}).children('.hot_comment_content').css('display','none').end().siblings().stop(true).animate({width:175});
});