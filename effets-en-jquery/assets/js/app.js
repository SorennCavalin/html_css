$(function() {
    $('#b1').on('click', function (e) {
       $('#ex1 h1').fadeOut(1000)
   })
   $('#b2').on('click', function (e) {
    $('#ex1 h1').fadeIn(1000)
   })
    $('#b3').on('click', function (e) {
        $('#ex1 h1').fadeToggle(1000)
    })
    $('#b4').on('click', function (e) {
        $('#ex1 h1').fadeTo(1000,0.3)
    })
    $('#b5').on('click', function (e) {
        $('#ex1 h1').removeAttr('style')
    })
});