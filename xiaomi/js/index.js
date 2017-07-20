var myswiper = new Swiper(".swiper-container", {
	        loop: true,
	        autoplay: 3000,
	        autoplayDisableOnInteraction: false,
	        pagination: ".swiper-pagination",
	        prevButton: '.swiper-button-prev',
	        nextButton: '.swiper-button-next',
	        effect: 'fade',
	        fade: {
	            crossFade: false,
	        }
	    });
$(function () {
	$("#content_one>div>ul>li") .hover(function () {
	    var index=$(this).index()
	    $(".po").eq(index).show().siblings(".po").hide()
	},function () {
	$(".po").hide();
	})
	$(".nav_2 ul li a").mouseover(function () {
		$(this).next().stop().slideDown(1000)
	})
	$(".nav_2 ul li a").mouseout(function () {
		$(this).next().stop().slideUp(1000)
	})
})