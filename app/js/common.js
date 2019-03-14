$(function () {
	$('nav').mobileMenu({
		menuIconClassName: ".menu-icon",
		mobileResolution: 770,
		menuType: "custom",
		offsetToSticky: 50,
		closeIconClassName: ".close-menu-icon"
	});

	$('.banner-slider').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		dotsClass: 'my-dots',
		customPaging: function (slider, i) {
			var slideNumber = (i + 1),
				totalSlides = slider.slideCount;
			return '<a class="dot" role="button" title="' + slideNumber + ' из ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
		}
	});

	$('.slider-team-img').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 5,
		autoplay: true,
		asNavFor: '.slider-team-description',
		prevArrow: '<div class="prev"><svg width="20" height="20" fill="#fff"><use xlink: href = "img/sprite.svg#left-arrow-thin" ></use></svg></div>',
		nextArrow: '<div class="next"><svg width="20" height="20" fill="#fff"><use xlink: href = "img/sprite.svg#right-arrow-thin"></use></svg ></div> ',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1,
				}
    		}
  		]

	});

	$('.slider-team-description').slick({
		slidesToShow: 1,
		asNavFor: '.slider-team-img',
		autoplay: true,
		prevArrow: '',
		nextArrow: '',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1,
				}
    		}
  		]
	});

	$video = $('.video-about');
	$('.btn-video').on("click", function () {
		if ($video.get(0).paused) {
			$video.get(0).play();
			$(this).attr('src', 'img/video-pause.svg');
		} else {
			$video.get(0).pause();
			$(this).attr('src', 'img/video-play.svg');
		}
	});
});
