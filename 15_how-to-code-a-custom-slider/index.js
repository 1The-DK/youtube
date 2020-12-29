import $ from 'jquery'
import slick from 'slick-carousel'

import 'slick-carousel/slick/slick.css'


const slider = $('.slider');

slider.slick({
    nextArrow:
        '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style=""><svg enable-background="new 0 0 792.033 792.033" version="1.1" viewBox="0 0 792.03 792.03" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m617.86 370.9-396.34-361.19c-13.006-12.94-34.099-12.94-47.105 0-13.006 12.939-13.006 33.934 0 46.874l372.45 339.44-372.41 339.44c-13.006 12.94-13.006 33.935 0 46.874s34.099 12.939 47.104 0l396.35-361.19c6.932-6.898 9.904-16.043 9.441-25.087 0.431-9.078-2.54-18.222-9.474-25.154z"/></svg></button>',
    prevArrow:
        '<button class="slick-prev slick-arrow" aria-label="Next" type="button" style=""><svg enable-background="new 0 0 792.033 792.033" version="1.1" viewBox="0 0 792.03 792.03" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m617.86 370.9-396.34-361.19c-13.006-12.94-34.099-12.94-47.105 0-13.006 12.939-13.006 33.934 0 46.874l372.45 339.44-372.41 339.44c-13.006 12.94-13.006 33.935 0 46.874s34.099 12.939 47.104 0l396.35-361.19c6.932-6.898 9.904-16.043 9.441-25.087 0.431-9.078-2.54-18.222-9.474-25.154z"/></svg></button>'
});