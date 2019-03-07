$(function () {
	$('nav').mobileMenu({
		menuIconClassName: ".menu",
		mobileResolution: 770,
		menuType: "fixed",
		offsetToSticky: 50,
		closeIconClassName: ".close-menu-icon"
	});

	$('.banner-slider').slick({
		autoplay: false,
		arrows: false,
		dots: true
	});
	//video = document.querySelectorAll('.video-about');
	$video = $('.video-about');
	$('.btn-video').on("click", function () {
		console.log("ghgh");
		if ($video.get(0).paused) {
			console.log("eeeeee");
			$video.get(0).play();
			this.innerHTML = "Pause";
		} else {
			$video.get(0).pause();
			console.log("aaaaaaa")
			this.innerHTML = "Play";
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
