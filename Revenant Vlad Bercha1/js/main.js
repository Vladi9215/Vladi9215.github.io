
$('.dropdown > span.btn').click(function() {

    if ($(this).hasClass('active')) {
        // Close
        $(this).parent().children('ul').removeClass('active');
        $(this).removeClass('active');
    } else {
        // Open
        $(this).parent().children('ul').addClass('active');
        $(this).addClass('active');
    }

});

$('.accordeon .item-title').click(function() {

    if ($(this).hasClass('active')) {
        $('.accordeon .content').hide(300);
        $(this).removeClass('active');
    } else {
        $('.accordeon .content').hide(300);
        $('.accordeon .item-title').removeClass('active');
        $(this).parent().children('.content').show(300);
        $(this).addClass('active');
    }

});
