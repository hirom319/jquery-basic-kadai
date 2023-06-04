$('#change-color').on('click', function() {
    $('#target').css('color', 'blue');
});

$('#change-text').on('click', function() {
    $('#target').text("Hello!");
});

$('#fade-out').on('click', function() {
    $('#target').fadeOut();
});

