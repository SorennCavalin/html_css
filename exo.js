// //alert("Hi");

// /*---------
// LA CONCATENATION
// ---------*/
// var annee = 2017; // à quoi sert une var, différents types de var
// var futur = 3;
// var calcul = annee + futur;
// console.log(calcul);
// document.write(calcul + "&nbsp,&nbsp" + " " + " " + calcul + "<br>"); // -> 2020 avec saut de ligne
// //document.write(" ");// -> 2020 avec saut de ligne
// //document.write(calcul + "<br>");// -> 2020 avec saut de ligne
// document.write(calcul + "<br>"); // -> 2020 avec saut de ligne

// var mois = "7";
// var calcul2 = annee + mois;
// console.log(calcul2); // -> 20207<br>  parce que pas de calcul avec des strings
// document.write(calcul2 + "<br>");

// var debutPhrase = "Aujourd'hui ";
// var nbStagiaires = 12;
// var suitePhrase = " stagiaires";
// var finPhrase = "sont présents."; // pas d'espace exprès

// // -- Nous souhaitons afficher la phrase en un seul morceau avec la concaténation => à vos claviers !
// document.write(debutPhrase + nbStagiaires + suitePhrase + " " + finPhrase);
// // le " " est utile quand on a des données récupérées directement de l'utilisateur



// var nb1 = 1;
// var nb2 = 5;
// var res = nb1 + nb2;
// document.write("Le résultat est " + res)

// var nb1 = 25;
// var nb2 = 3;
// var res = nb1 + nb2;
// console.log(res);
// document.write(" <br> le resultat est " + res + "<br> saute une ligne <br>")

// var finPhrase = "stagiaire";
// var suitePhrase = "sont présents";
// console.log(typeof finPhrase, typeof suitePhrase);

var premier = Number(prompt(""))
var second = Number(prompt(""))
var trois = Number(prompt(""))

if (premier > second) {
    premier = trois * 3
} else  if (trois < second) {
        premier++
        if (premier === trois) {
            second = (premier + trois) * 3
        }
} else {
    alert("je suis perdu")
}
document.write(premier + "<br>" + second + "<br>" + trois )

