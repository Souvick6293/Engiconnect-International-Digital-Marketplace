$(document).ready(function() {
	// Conter Jquery
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 40);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }


	$('.mobile-nav-bar').click(function(){
		$('.main-menu-bar').toggleClass('active');
		$('body').toggleClass('stop-scroll');
		$('html').toggleClass('stop-scroll');
	})

	var swiper = new Swiper('.promotion-slider-area .swiper-container', {
		pagination: {
			el: '.promotion-slider-area .swiper-pagination',
			clickable: true,
		},
    });

	var swiper = new Swiper('.sellers-result .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 0,
		navigation: {
			nextEl: '.sellers-result .swiper-button-next',
			prevEl: '.sellers-result .swiper-button-prev',
		},
		breakpoints: {
			768: {
			  slidesPerView: 3,
			  spaceBetween: 0,
			},
			1024: {
			  slidesPerView: 4,
			  spaceBetween: 0,
			},
			1300: {
			  slidesPerView: 5,
			  spaceBetween: 0,
			},
		}
    });

	var swiper = new Swiper('.best-selling-product-slider-area .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 15,
		navigation: {
			nextEl: '.best-selling-product-slider-area .swiper-button-next',
			prevEl: '.best-selling-product-slider-area .swiper-button-prev',
		},
		breakpoints: {
			768: {
			  slidesPerView: 3,
			  spaceBetween: 15,
			},
			1024: {
			  slidesPerView: 4,
			  spaceBetween: 15,
			},
			1300: {
			  slidesPerView: 5,
			  spaceBetween: 15,
			},
		}
    });

	var swiper = new Swiper('.product-listing-slider-area .swiper-container', {
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,
		allowTouchMove: false,
		disableOnInteraction: true,
		pagination: {
			el: '.product-listing-slider-area .swiper-pagination',
			clickable: true,
		},
		/*breakpoints: {
			768: {
			  slidesPerView: 3,
			  spaceBetween: 15,
			},
		}*/
    });
	$('.m-num').click(function(){
		$('.open-iec').show();
	})
	$('.cancel-product').click(function(){
		$(this).parents('.each-selling-product').hide();
	})

	$('.each-dropdown-category-wrapper h5').click(function(){
		$(this).toggleClass('active');
		$(this).next('.related-dropdown').toggleClass('active');
	})

	$('.mobile-filter-area h4').click(function(){
		$(this).parents('.mobile-short-by-area').find('.filter-area').addClass('active');
		$('body').toggleClass('stop-scroll');
		$('html').toggleClass('stop-scroll');
	})
	$('.close-filter').click(function(){
		$(this).parents('.mobile-short-by-area').find('.filter-area').removeClass('active');
		$('body').removeClass('stop-scroll');
		$('html').removeClass('stop-scroll');
	});
	$('.wishlist-icon').click(function(){
		$(this).toggleClass('active')
	});

	$('.chat-button').click(function(){
		$('body').addClass('stop-scroll');
		$('html').addClass('stop-scroll');
		$('.msger').addClass('active');
	})
	$('.close-chat').click(function(){
		$('body').removeClass('stop-scroll');
		$('html').removeClass('stop-scroll');
		$('.msger').removeClass('active');
	});
	$('.close-convertion').click(function(){
		$('.close-convertion-popup-wrapper').addClass('active')
	})
	$('.chat-button-continue').click(function(){
		$('.close-convertion-popup-wrapper').removeClass('active')
		$('.msger-inputarea').removeClass('hide');
		$('.inactive-message-send-area').removeClass('active');
	})
	$('.chat-end-button').click(function(){
		$('.feedback-popup').addClass('active');
		$('.msger-inputarea').addClass('hide');
		$('.inactive-message-send-area').addClass('active');
	})
	$('.feedback-no').click(function(){
		$('.msger-inputarea').removeClass('hide');
		$('.inactive-message-send-area').removeClass('active');
	})
	$('.feedback-no').click(function(){
		$('.feedback-popup').removeClass('active');
	})
	$('.add-interest-button').click(function(){
		$(this).hide();
		$('.add-interest-add-feild').addClass('active');
	});
	$('.left-nav-area li a').click(function(){
		//alert();
		$(this).next('ul').toggleClass('active');
	})
	$( ".datepicker" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
	// product Gallery and Zoom

	// activation carousel plugin
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 15,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			0: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
		}
	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		},
	});
	// change carousel item height
});

$(window).on("load resize",function(e){
    if ($(window).width() < 991) {
		$(".dextop-menu > li.has-submenu > a").each(function(){
			$(this).attr("href","javascript:void(0)")
		});
		$( ".dextop-menu > li.has-submenu > a").click(function(){
		$('.dextop-menu > li.has-submenu').removeClass('active');
			$(this).parent('.has-submenu').addClass('active');		
		});
	}
});