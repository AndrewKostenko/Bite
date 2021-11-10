// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================

const meetVideo = document.querySelector('video');
const meetVideoContent = document.querySelector('.video-meet_content');

meetVideo.addEventListener('playing', function () {
	meetVideoContent.classList.add('active');
})
meetVideo.addEventListener('pause', function () {
	meetVideoContent.classList.remove('active');
});


jQuery('.meet_items').slick({
	arrows: false,
	dots: true,
});

jQuery('.smile_slider').slick();