$(function () {
    //permet d'attendre que le DOM soit charger


    $('.conteneur').prepend('<p>du texte</p>')

    $('.conteneur').append('<ul><li>liste1</li><li>liste2</li></ul>')

    $('<p>du texte</p>').prependTo('.conteneur')

    $('.conteneur p').wrapAll('<section class="blue-bkg">')

    $('<p></p>').replaceAll('p')

    $('p').eq(2).replaceWith('<p id="p2"> blop </p>')
})