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

// let nb1 = prompt("nombre")
// if (nb1 == "number") {
//     document.write("j'ai dis un nombre...")
// }
// else {
//     if (nb1 > 10) {
//         document.write("Sorenn")
//     }
// }

// var chaine =
// alert(prompt(prompt(),prompt()))

// var numero = Number(prompt("entrez un chiffre = a 5"))

// if (numero === 5) {
//     document.write(numero)
// }

// var pro = prompt("");
// var proModulo = pro % 13
// if (proModulo == 0) {
//     document.write("cet valeur, " + pro + ", est un multiple de 13")
// }
// else {
//     document.write("cette valeur, " + pro + ", n'est pas un multiple de 13" )
// }

// var chiffre = [1, 2, 3, 4, 5, 6]
// for (var i = 0; i < chiffre.length; i++){
//     var changement
//     console.log(chiffre[i])
// }

// console.log(chiffre)

// var test = "be,se,de,fe,re,te"
// console.log(test)
// var test2 = test.split(',')
// console.log(test2)
// var test2 = [1,2,3,4,5] ;
// // console.log(test3)
// // console.log(typeof test3)
// for (var i = 0; i < test2.length; i++){
//     var input = test2[i]
//     var test2 = test2.slice(0, 1);
//     console.log(test2)
//     // var coupeVirgule = chaqueChiffre.slice(1);
// }


// if
// var pro = prompt()
// pro = parseInt(pro)
// if (pro) {
//     console.log(typeof pro)
// }
// else {
//     pro=pro.toString()
//     console.log(typeof pro)
// }

// var list = document.querySelector('.output ul');
// var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for(var i = 0; i < stations.length; i++) {
//  var input = stations[i];
//  var code = input.slice(0,3);
//  var semiC = input.indexOf(';');
//  var nam = input.slice(semiC + 1);
//  var result = code + ': ' + nam;
// console.log(result)
// }

// var truc = ['MAR3565646451254692658626498;Truc muche trouve moi',
// 'BAR3565646451254692658626498;Truc muche trouve moi',
// 'RAR3565646451254692658626498;Truc muche trouve moi',
// 'JAR3565646451254692658626498;Truc muche trouve moi',
// 'LAR3565646451254692658626498;Truc muche trouve moi'
// ]
// for (var i = 0; i < truc.length; i++){
//     var nombreDeFois = truc[i];
//     var premierCoupe = nombreDeFois.slice(0, 3);
//     var repere = nombreDeFois.indexOf(";");
//     var finDePhrase = nombreDeFois.slice(repere + 1);
//     var resultat = (premierCoupe + finDePhrase);
//     console.log(resultat)

// }
// console.log(premierCoupe)
// console.log(repere)
// console.log(finDePhrase)
var etoile = " &nbsp**********"
for (var i = 0; i <= 9; i++){
    document.write(etoile + "<br>");
    etoile = etoile.slice(1,-1);
    etoile = " &nbsp"+etoile
}



