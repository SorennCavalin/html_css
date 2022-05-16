// var tableDeMultiplication = prompt("quel table de multiplication voulez vous apprendre?");

// for (var i = 1; i <= 10; i++){
//     var multiple = tableDeMultiplication * i;
    
//     if (multiple % i === 0) {
        
//         document.write(tableDeMultiplication + "*" + i + "= " + multiple + "<br>")
//     }
// }

// var nb1 = 0;

// while ((nb1 < 50) ||(nb1 >100)) {
//     nb1 = Number(prompt("rentrez un numero entre 50 et 100"))
    
//     if ((nb1 >= 50) && (nb1 <=100)) {
//     document.write("la valeur saisie est de" + nb1)
//     }
// }

var choix = prompt("");
while (choix > 1 || choix < 10) {
    if (choix >= 2 && choix <= 9) {
        for (var i = 1; i <= 10; i++) {
            var resultat = choix * i;
            document.write(choix + "*" + i + "=" + resultat);
        }
        break;
    }
    else {
        choix = prompt("");
    }
}