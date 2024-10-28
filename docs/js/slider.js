jQuery(document).ready(function ($) {
    $('.slider').each(function () { // Loop over each slider instance
        var $slider = $(this); // Cache the current slider

        var slideCount = $slider.find('ul li').length;
        var slideWidth = $slider.find('ul li').width();
        var slideHeight = $slider.find('ul li').height();
        var sliderUlWidth = slideCount * slideWidth;

        $slider.css({ width: slideWidth, height: slideHeight });
        $slider.find('ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });
        $slider.find('ul li:last-child').prependTo($slider.find('ul'));

        function moveLeft() {
            $slider.find('ul').animate({
                left: +slideWidth
            }, 200, function () {
                $slider.find('ul li:last-child').prependTo($slider.find('ul'));
                $slider.find('ul').css('left', '');
            });
        }

        function moveRight() {
            $slider.find('ul').animate({
                left: -slideWidth
            }, 200, function () {
                $slider.find('ul li:first-child').appendTo($slider.find('ul'));
                $slider.find('ul').css('left', '');
            });
        }

        $slider.find('a.control_prev').click(function () {
            moveLeft();
        });

        $slider.find('a.control_next').click(function () {
            moveRight();
        });

        // Optional: Auto-play for each slider
        // setInterval(function () {
        //     moveRight();
        // }, 3000);
    });
});