$(document).ready(function(){
	$('.menu-btn').click(function(){
		$('.side-bar').addClass('active');
		$('.menu-btn').css("visibility", "hidden")
	});

	$('.close-btn').click(function(){
		$('.side-bar').removeClass('active');
		$('.menu-btn').css("visibility", "visible")
	});
});