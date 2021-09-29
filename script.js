$(document).ready(() => {
    
    // SHOW DETAILS
    $('.header-details-box svg').on('click', () => {
        $('.header-box').fadeOut(300);
        $('.explore-box').removeClass('d-none hide-explore-box').toggleClass('show-explore-box');
        setTimeout(() => {
            $('.explore-box').css('clip-path', 'inset(0 0 0 0)')
        }, 350);
    });

    // CLOSE DETAILS
    $('#close-explore-button').on('click', () => {
        $('.explore-box').toggleClass('hide-explore-box').removeClass('show-explore-box');
        setTimeout(() => {
            $('.explore-box').toggleClass('d-none').css('clip-path', 'polygon(4% 0, 96% 0, 100% 43%, 100% 58%, 96% 100%, 5% 100%, 0 57%, 0 40%)')
        }, 750); 
        $('.header-box').fadeIn(300);
    });
})