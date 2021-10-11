let menutoggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let linkUrl = document.getElementsByClassName('link');
let x=false;
for (let i = 0; i < linkUrl.length; i++) {
	linkUrl[i].onclick = function(){
		if (x){
			menutoggle.classList.toggle('active');
			navigation.classList.toggle('active');
			x=!(x);
		}
	}
}
menutoggle.onclick = function(){
	menutoggle.classList.toggle('active');
	navigation.classList.toggle('active');
	x=!(x);
}

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