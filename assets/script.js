let menutoggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');

$(document).ready(function(){
	// Jquery for Toggle Sub-Menu
	$('.sub-btn').click(function(){
		$(this).next('.sub-menu').slideToggle();
		$(this).find('.dropdown').toggleClass('rotate')
	});

	// Jquery for Expand & Collapse The Sidebar
	$('.menu-btn').click(function(){
		$('.side-bar').addClass('active');
		$('.menu-btn').css("visibility", "hidden")
	});

	$('.close-btn').click(function(){
		$('.side-bar').removeClass('active');
		$('.menu-btn').css("visibility", "visible")
	});
});