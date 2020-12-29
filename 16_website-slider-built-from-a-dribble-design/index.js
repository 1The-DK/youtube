// sliders
const sliders = (function () {
    const content = {
        sliderText: $('.slider--text'),
        sliderImage: $('.slider--image')
    }

    const init = function () {
        content.sliderText.slick({
            dots: true,
            arrows: true,
            asNavFor: '.slider--image',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="">Check next workspace</button>',
            prevArrow: '',
            appendDots: $('.sliders__dots-container')
        })

        content.sliderImage.slick({
            arrows: false,
            dots: false,
            asNavFor: '.slider--text'
        })
    }

    return {
        init
    }
})();

sliders.init();