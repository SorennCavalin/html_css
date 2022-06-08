$('li').parent('#parents').css('border', '1px solid black')

$('ul').parents('div').css('background-color', 'skyblue')

$("#enfants").parentsUntil(".conteneur").css("border", "2px double orange");

$('#parents').closest('div').css('border', '2px solid red')
//closest peut s'arreter a soi si le selecteur de closest le selectionne
$('.li1').closest('.bleu').css('font-size', '40px')

$('.conteneur').children('h1').css('color', 'blue')

console.log($('#liste').parent());
console.log([...$('#liste').parent()]);

[...$('#liste').parent()].forEach(el => {
    el.classList.add('bleu')
})

$('#liste').parent().css('background-color', 'transparent')

$('#liste li:first-child').siblings(':odd').css('color', 'blue'); //odd et even se basent sur le selecteur et font le tour des tout les freres et soeurs quite a remonter un fois a la fin

$('#liste li:first-child').next().css('color', 'red');

$('#liste li:nth-child(3)').nextAll(':odd').css('text-decoration', 'underline');

$('#liste li:nth-child(3)').nextUntil('#liste li:nth-child(6)').css({ 'font-weight': 'bold', 'font-size': '40px' });

$('#liste li:nth-child(5)').prev().css('color', 'red');



