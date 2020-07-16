

        // SEARCH BOX
 $(document).ready(function(){
 	$('.search-icon').on('click' , function(){
 		$('.search-overlay, .search-popup').toggleClass('active');
 	});
 });
 $(document).ready(function(){
 	$('.submit-btn').on('click' , function(){
 		$('.search-overlay , .search-popup').removeClass('active');
 	});
 });

         // HOVER BAG

 $(document).ready(function(){
 	$('.shop-bag').on('click' , function(){
 		$('.hover-bag').toggleClass('active');
 	});
 });
  


     // NAV SCROOLTOP
$(function () {
  $(document).scroll(function () {
    var $nav = $(".ixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 100);
  });
});
 
$(window).scroll(function (event) {
        var y = $(this).scrollTop(); //set position from top when to change style in pixels
        if (y >= 100) {
            $('.navbar').addClass('resized');
        } else {
            $('.navbar').removeClass('resized');
        }
    });


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:true
    });
});

