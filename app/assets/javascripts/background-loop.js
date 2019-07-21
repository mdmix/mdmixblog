$(document).ready(function () {

    function slider(){
        $('#main-page').delay(10000).fadeOut(100, function() {
            $('#main-page').css("background-image", "url(http://api.thumbr.it/whitenoise-361x370.png?background=d0d3d400&noise=17202a&density=46&opacity=46)");
            $('#main-page').fadeIn(100, function() {
                $('#main-page').delay(10000).fadeOut(100, function() {
                    $('#main-page').css("background-image", "url(https://www.transparenttextures.com/patterns/asfalt-dark.png)");
                    $('#main-page').fadeIn(100, slider);
                });
            });
        });

    }
    slider();
});

// var imgSrcs =[
//     'url(http://api.thumbr.it/whitenoise-361x370.png?background=d0d3d400&noise=17202a&density=46&opacity=46)',
//     'url(http://api.thumbr.it/whitenoise-361x370.png?background=d0d3d4ff&noise=17202a&density=100&opacity=100)',
// ];
//
// $('html>body').delay(1000).fadeIn(1000, animateBackground());
//
// function animateBackground() {
//
//     window.setTimeout(function(){
//
//         var url = imgSrcs[imgSrcs.push(imgSrcs.shift()) - 1];
//
//         $('html>body').delay(4000).fadeOut(1000, function(){
//
//             $(this).css("background-image", "url(" + url + ")")
//
//         }).fadeIn(1000, animateBackground())
//
//     });
// }
