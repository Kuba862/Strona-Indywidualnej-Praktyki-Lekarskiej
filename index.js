$('#places').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.research-office').offset().top
    }, 500)
})

$('#contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact-section').offset().top
    }, 500)
})

$('#research').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.research-description').offset().top
    }, 500)
})



