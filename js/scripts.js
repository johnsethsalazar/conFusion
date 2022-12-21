$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$('#reserveButton').on('click', function(){
    $('#reserveModal').modal('show');
});

$('#loginButton').on('click', function(){
    $('#loginModal').modal('show');
});



// Start of Carousel Jquery interval and buttons function.
$(document).ready(function (){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){ //if span tag has the fa-pause class then we know that this button is the pause button.
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');//removes fa-pause button
            $('#carouselButton').children('span').addClass('fa-play');//adds fa-play button
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){ //Doing the opposite, remove play to add pause button
            $('#mycarousel').carousel('cycle');//If you want the cycling behavior to resume you have to set the carousel action to cycle
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    // $('#carousel-play').click(function(){
    //     $('#mycarousel').carousel('cycle');
    // });
});
// End of Carousel Jquery interval and buttons function.