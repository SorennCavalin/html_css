// for (var i = 1; i <= 100; i += 2){
//     document.write(i)
// }

// var j = prompt("écris 'blop'");
// while (j !== "blop") {

//     j=prompt("j'ai dis 'blop'")
// }

// var tps = 0
// for (var i = 1000; i <= 2000; i += 50){
//     tps ++
//     document.write("jour " + tps + " j'ai " + i + " €<br>")
    
// }
// document.write("il m'a fallut " + tps + " mois pour avoir 2000 € en partant de 1000€ et en posant sur mon compte 50€ par mois")

// var nbTraits
// var nbEtoiles
// var nombreLu
// var message = ""
// nombreLu = parseInt(prompt("Entrer un nombre:"));
// // Parcourir chaque ligne
// for (var noLigne=1;noLigne<=nombreLu;noLigne++){
// 	// Calculer le nb de chiffres et de zéros à écrire sur la ligne courante
// 	nbEtoiles = nombreLu - noLigne + 1;
// 	nbTraits = nombreLu - nbEtoiles;
// 	// Écrire les traits de la ligne courante
// 	for (i=1;i<=nbTraits;i++){
// 		message += "-";
// 	}
// 	// Écrire les etoiles de la ligne courante
// 	for (var noEtoiles=nbEtoiles;noEtoiles>=1;noEtoiles--){
// 		message += "*";
// 	}
// 	message += "<br />";
// }
// var jour;
// jour = prompt("quel jour est-on");
// switch (jour) {
//     case "lundi":
//         var jourNum = "premier";
//         break;
    
//         case "mardi":
//             var jourNum = "deuxieme";
//         break;
    
//             case "mercredi":
//         var jourNum = "troisieme";
//         break;
    
//                 case "jeudi":
//                     var jourNum = "quatrieme";
//         break;
    
//                     case "vendredi":
//                         var jourNum = "cinquieme";
//         break;
    
//                         case "samedi":
//                             var jourNum = "sixieme";
//         break;
    
//                             case "dimanche":
//                                 var jourNum = "septieme";
//         break;
//     default:
//         alert("vous n'avez pas rentrer un jour de la semaine")
// }
