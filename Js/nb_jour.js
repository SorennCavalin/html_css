var nbJour = Number(prompt("entrez le numero du mois dont vous voulez connaitre le nombre de jour"))

while (isNaN(nbJour)) {
var nbJour = Number(prompt("entrez un numero en 1 et 12"))
} 
while (nbJour <1 || nbJour>12) {
    var nbJour = Number(prompt("entrez un numero en 1 et 12"))
    } 


if (nbJour === 2) {
    document.write("le mois numéro " + nbJour + " comporte 28 jours")
} else if ((nbJour === 1) || (nbJour === 3)||(nbJour === 5)||(nbJour === 7)||(nbJour === 8)||(nbJour === 10)||(nbJour === 12)) {
    document.write("le mois numéro " + nbJour + " comporte 31 jours")
} else if ((nbJour === 4)||(nbJour === 6)||(nbJour === 9)||(nbJour === 11)) {
    document.write("le mois numéro " + nbJour + " comporte 30 jours")
}