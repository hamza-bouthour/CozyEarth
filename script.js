$(document).ready(() => {
    
    $('#close-explore-button').on('click', function() {
        $(this).parent('div').addClass('hidden');
        $('.header-box').removeClass('hidden');
    })

    $('.header-details-box').on('click', () => {
        $('.header-box').addClass('hidden');
        $('.explore-box').removeClass('hidden');
    })
})