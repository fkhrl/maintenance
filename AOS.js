AOS.init();

$('#init_clock').countdown('2024/06/30', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<div><span class="days">%D</span> </div> '
            + '<div><span class="hours">%H</span> </div> '
            + '<div><span class="minutes">%M</span> </div> '
            + '<div><span class="seconds">%S</span></div> '));
    });