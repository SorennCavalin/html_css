var horsTaxe = prompt("Prix HT :");
var taux = 1.2;
var ttc = horsTaxe * taux;
console.log("Le prix TTC est de : " + ttc + "€.");
document.write("<h3>Résultat<br />Le prix TTC est de " + ttc + '€.</h3>');