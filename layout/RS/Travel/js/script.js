const swiper = new Swiper('.destinations__swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 2,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    centeredSlides: true,
    watchSlidesVisibility: true,





    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    // loopedSlides: 3,

//    Свободнфй режим
    freeMode: true,
});