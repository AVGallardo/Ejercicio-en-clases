$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide').length;

    function showSlide(index) {
        const newLeft = index * -100;
        $('.slides').css('transform', `translateX(${newLeft}%)`);
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides - 1;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides;
        showSlide(currentIndex);
    }

    function initSlider() {
        $('.prev').click(prevSlide);
        $('.next').click(nextSlide);    
    }

    initSlider();
});