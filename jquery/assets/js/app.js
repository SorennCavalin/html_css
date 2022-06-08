// jQuery(document).ready(function () {
//     console.log('le dom est chargé')
// })

// $(document).ready(function () {
//     console.log('le dom est chargé')
// })

// $(function () {
//     console.log('le dom est chargé')
// })


//     (function ($) {
//         // comme d'autres librairies utilisent le $ cette conmmande permet de donner l'avantage a jquery
//     })(jQuery);

//         //cette commande fonctionne aussi

// jQuery(document).ready(function () {
    
// })

// var _$ = jQuery.noConflict(true)

// console.log(_$)


$("p").has("span").css("color", "orange");

$('span').filter('.souligner').css("color", 'green')
$('span').not('.souligner').css('color', 'red')

$('p').last().css('color', 'pink')

$('p').eq(1).css('color','blue')