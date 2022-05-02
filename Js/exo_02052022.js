// var nom;
// nom = "Cavalin";

// prompt("quel est ton nom?",nom);
// console.log(nom);
var jour;
jour = prompt("quel jour est-on");
if (jour === "lundi"||"mardi"||"mercredi"||"jeudi"||"vendredi"||"samedi"||"dimanche") {

    if (jour === "lundi") {
        var jourNum = "premier";
    }
    if (jour === "mardi") {
        var jourNum = "deuxième";
    }
    if (jour === "mercredi") {
        var jourNum = "troisième";
    }
    if (jour === "jeudi") {
        var jourNum = "quatrième";
    }
    if (jour === "vendredi") {
        var jourNum = "cinquième";
    }
    if (jour === "samedi") {
        var jourNum = "sixième";
    }
    if (jour === "dimanche") {
        var jourNum = "septième";
    }
    document.write(`Vous avez écrit ${jour}, le ${jourNum} jour de la semaine <br>`);
}
console.log(jour);

var monExercice = "Je suis en train de faire mon exercice";
document.write(monExercice);
console.log(monExercice);