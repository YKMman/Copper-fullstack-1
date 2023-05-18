// ? BEST SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
        499: {
            slidesPerView: 2,
            spaceBetweenSlides: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        }
    }
});
