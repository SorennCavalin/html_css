var noteDuBac = Number(prompt("quel est votre moyenne du baccalaureat"));

while ((noteDuBac > 20) || (noteDuBac <0) || (isNaN(noteDuBac))) {
    noteDuBac = prompt("quel est votre moyenne du baccalaureat")
}
    if (noteDuBac < 10) {
        document.write('vous êtes recalés')
    } else if ((noteDuBac >= 10) && (noteDuBac < 12)) {
        document.write('vous êtes reçu')
    } else {
        document.write('vous êtes reçu avec mention')
    }

var nb1 = (3 * 9) + 2;
var nb1 = (3 + 9) * 2;

