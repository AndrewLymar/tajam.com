$(function () {
	$('nav').mobileMenu({
		menuIconClassName: ".menu",
		mobileResolution: 770,
		menuType: "sticky",
		offsetToSticky: 50,
		closeIconClassName: ".close-menu-icon"
	});

	$('.banner-slider').slick({
		autoplay: false,
		arrows: false,
		dots: true
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

	$('.slider-team-img').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		autoplay: true,
		asNavFor: '.slider-team-description',
		prevArrow: '<div class="prev"><svg width="32" height="32" viewBox="0 0 32 32"><use xlink: href = "img/sprite.svg#move-to-prev" ></use></svg></div>',
		nextArrow: '<div class="next"><svg width="32" height="32" viewBox="0 0 32 32"><use xlink: href = "img/sprite.svg#move-to-next"></use></svg ></div> ',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1
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
					arrows: true,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1
				}
    		}
  		]
	});
});
