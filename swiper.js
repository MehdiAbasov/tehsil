
const swiper = new Swiper('.swiper', {
    // Default parameters
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        720: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        1200: {
            slidesPerView: 5,
            spaceBetween: 25
        },

        200: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
        // when window width is >= 640px
    }
})