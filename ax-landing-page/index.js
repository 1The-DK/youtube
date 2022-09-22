import $ from "jquery";
import slick from "slick-carousel";

// styles
import "./style.scss";
import "slick-carousel/slick/slick.scss";

// hamburger - header

const header__burger = document.querySelector(".header__burger"),
  header__nav = document.querySelector(".header__nav"),
  body = document.querySelector("body"),
  $body = $("body"),
  $slider = $(".slider");

// slider - domino
$slider.slick({
  appendArrows: $body,
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="22.809" height="22.809" viewBox="0 0 22.809 22.809"><path d="M191.2,281.2v1.3h13.936l-13.869,13.869.9.9,13.349-13.356.519-.513v13.929h1.288V281.2Z" transform="translate(-52.235 356.846) rotate(-135)" fill="#fff"/></svg></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="22.809" height="22.809" viewBox="0 0 22.809 22.809"><path d="M191.2,281.2v1.3h13.936l-13.869,13.869.9.9,13.349-13.356.519-.513v13.929h1.288V281.2Z" transform="translate(-52.235 356.846) rotate(-135)" fill="#fff"/></svg></button>'
});

// event listeners
header__burger.addEventListener("click", function() {
  this.classList.toggle("active");
  header__nav.classList.toggle("open");
  body.classList.toggle("overflow-hidden");
});
