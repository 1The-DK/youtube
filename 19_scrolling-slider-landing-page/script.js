$(window).on('load', function () {
    $.scrollify({
        scrollbars: false,
        setHeights: false,
        section: $('.slider__slide'),
        scrollSpeed: 700,
        touchScroll: true,
        overflowScroll: false,
        easing: 'easeOutExpo',
        offset: 0,
        before: function (i, panels) {

            var ref = panels[i].attr('data-section-name');

            $('.pagination .active').removeClass('active');

            $('.pagination').find('a[href=\'#' + ref + '\']').addClass('active');
        },
        afterRender: function () {
            var pagination = '<ul class=\'pagination\'>';
            var activeClass = '';
            $('.slider__slide').each(function (i) {
                activeClass = '';
                if (i === $.scrollify.currentIndex()) {
                    activeClass = 'active';
                }
                pagination += '<li><a class=\'' + activeClass + '\' href=\'#' + $(this).attr('data-section-name') + '\'><span class=\'hover-text\'>' + '</a></li>';
            });

            pagination += '</ul>';

            $('.slider__nav').append(pagination);

            $('.pagination a').on('click', function (e) {
                e.preventDefault();
                $.scrollify.move($(this).attr('href'));
            });
        },
    });
})