// var nom;
// nom = "Cavalin";

// prompt("quel est ton nom?",nom);
// console.log(nom);
// var jour;
// jour = prompt("quel jour est-on");
// if (jour === "lundi"||"mardi"||"mercredi"||"jeudi"||"vendredi"||"samedi"||"dimanche") {

//     if (jour === "lundi") {
//         var jourNum = "premier";
//     }
//     if (jour === "mardi") {
//         var jourNum = "deuxième";
//     }
//     if (jour === "mercredi") {
//         var jourNum = "troisième";
//     }
//     if (jour === "jeudi") {
//         var jourNum = "quatrième";
//     }
//     if (jour === "vendredi") {
//         var jourNum = "cinquième";
//     }
//     if (jour === "samedi") {
//         var jourNum = "sixième";
//     }
//     if (jour === "dimanche") {
//         var jourNum = "septième";
//     }
//     document.write(`Vous avez écrit ${jour}, le ${jourNum} jour de la semaine <br>`);
// }
// console.log(jour);

// var monExercice = "Je suis en train de faire mon exercice";
// document.write(monExercice);
// console.log(monExercice);


// function multiplication(nombre) {
//     var result = nombre * nombre;
//     result.toString();
//          return result
// }
// function dire() {
//     var ecrit = prompt("écrivez quelque-chose");
//     ecrit = parseInt(ecrit)
//     if (isNaN(ecrit)) {
//         ecrit = ecrit.toString()
//         return ecrit
//     }
//     else {
//         return ecrit
//     }
// }
// // var nombre = 10;

// // var resultat = multiplication(nombre);
// // console.log(resultat)

// var nombre = 25;
// // var calcul = {
// //     addition : nombre + nombre,
// //     soustraction : nombre - nombre
// // }

// // calcul.division = nombre / nombre;
// // var multiplication;
// // calcul[multiplication] = nombre * nombre

// // var Plus = multiplication(100)
// // console.log(typeof Plus)

// var test = dire()
// console.log(test)
// console.log(typeof test)


// var test = {
//     nom: prompt("quel est tom nom"),
//     age: prompt("quel est ton age"),
//     veux:prompt("que veut tu?"),

//     bonjour: function() {
//         alert("bonjour je m'appele " + test.nom + " j'ai " + test.age + " ans et je veux " + test.veux)
//     }
// }

// var chiffre = "truc"
// console.log(chiffre)
// console.log(typeof chiffre)

// chiffre++
// console.log(chiffre)
// console.log(typeof chiffre)

let nb1 = Number(prompt("nombre"))
if (Number.isNaN(nb1) === true) {
    document.write("j'ai dis un nombre...")
}
else {
    if (nb1 > 10) {
        document.write("Sorenn")
    }
}