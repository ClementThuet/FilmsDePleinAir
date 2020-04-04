//credit https://codepen.io/anon/pen/vMmxwb
$(document).ready(function() {
    $('a[href*=\\#]').bind('click', function(e) {
    	e.preventDefault(); // prevent hard jump, the default behavior
    
       var target = $(this); // Set the target as variable
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
            }, 1,function() {
                location.hash = target.attr("href"); //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop()+400 ;
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) { //+ hauteur element
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();