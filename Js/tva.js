var tva = prompt("prix HT: ");
tva = parseInt(tva);
var taux = 1.20;
var TVA = tva * taux;
document.write("Résultat" + "<br>" + "Le prix TTC est de " + TVA + "€.");