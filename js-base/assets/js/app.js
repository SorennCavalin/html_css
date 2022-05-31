/*  https://devnetx.hd.free.fr/devnetx/formation/
une variable est une entité informatiquequi sert de conteneur à une donnée

Toute donnée fournie à un ordinateur est stockée dans une zone de mémoire repérable par la machine grace a une adresse mémoire.la variable contient cette adresse.


il y a 3 types de valeur

-let
-var
-const



const permet de déclarer une constante nommée
elle doit etre initialisée des sa déclaration et ne peux plus changer de valeur dans la suite du script
*/

const maConstante = 'ma constante';
console.log(maConstante);
//tentavie de réaffectation d'une variable constante
// maConstante = 'bonjour monde'; // renvoi une erreur



// var permet de déclarer une variable globale. elle appartient d'office à l'espace globale
// meme si elle est déclarer a l'interieur d'un bloc

if (true) {
    var globale = 5;
}
console.log('ma variable globale = ' + globale);


//let permet de déclarer une variable de bloc. elle n'accessible que dans le bloc auquel elle appartient.
if (true) {
    let letGlobale = 15;
    console.log('ma variable let appelée depuis son bloc = ' + letGlobale);
}
// console.log('ma variable let = ' + letGlobale);  cette commande génère une erreur


var animale = "chien";
console.log('animal: ' + animale);
console.log("Chien");
// on ne peux pas appeler une variable par sa valeur.
// console.log(Chien);  // génère une erreur


var volaille = 'poulet';
var Volaille = 'canard';
console.log(volaille);
console.log(Volaille);


//une variable doit etre déclarée avant d'etre utilisée.
console.log(num);
num = 6;
num += 5;
var num;
// une erreur est cependant générée avec let
// console.log(bonjour);
// let bonjour = 'bonjour';

// une variable possède:
// - un NOM
//doit commencer une lettre, un underscore ou un $
// les caractères spéciaux peuvent etre des chiffres ou des lettres
// la convention camelCase s'applique aux variables et aux fonctions.

// -un TYPE DE DONNEE
// 6 types de données primitives
// 1. null
var maVariableNulle = null;

// 2. undefined
var maVariableUndefined = undefined;

//Ces 2 types permettent de vider une variable, mais ne pas identiques
console.log("maVariableNulle = " + maVariableNulle);
console.log("maVariableNulle = " + maVariableUndefined);
console.log("type de maVariableNulle = " + typeof maVariableNulle);
console.log("type de maVariableNulle = " + typeof maVariableUndefined);


// 3.


var soleil = true
var res = false
// piscine = soleil ? false : true;
// console.log(piscine)

piscine = soleil ??  res;
console.log(piscine);



let oiseau = {
    espece: "pie",
    age: "3 mois",
    habitat: "ville",
}
for (spec in oiseau) {
    console.log(spec)
    console.log(oiseau[spec])
}

let peinture = ['la joconde', 'l\'homme aux gants', 'le pandémonium']
document.write(`<h2>liste des peinture</h2> <ul>`)
for (let int of peinture) {
    document.write(`<li> ${int}`)
}
document.write("</ul>")

let indexPeinture = null;
let peintureRecherchee = 'l\'homme aux gants'

for (let i = 0; i < peinture.length;i++){
    if (peinture[i] === peintureRecherchee) {
        indexPeinture = i
        
        break
    }
    console.log(i)
}
if (indexPeinture) {
    document.write("l'homme aux gants est a la position numero " + (indexPeinture + 1) + "<br>")
}

let t = ["element 1", "element 2", "element 3"]
document.write(t)

let fruit = ["apple", "banana"];
let legume = ["citrouille", "courgette"]

console.log(fruit, legume)

var article = document.querySelector("article")
console.log("article", article);
article.innerHTML = "<h2>les fonctions </h2>"
function maFonction(parametre1, parametre2, parametre3) {
    console.log("execution du code interne de maFonction()...")
    console.log('parametre1', parametre1)
    console.log('parametre2', parametre2)
    console.log('parametre3', parametre3)
    article.innerHTML += "<p><ul>"
    article.innerHTML += "<li>" + parametre1 + "</li>"
    article.innerHTML += "<li>" + parametre2 + "</li>"
    article.innerHTML += "<li>" + parametre3 + "</li>"
    article.innerHTML +="</p></ul>"
}
maFonction("chien",true,42)


function carre(para1) {
    article.innerHTML += `<p> ${para1 * para1}</p>`
}
carre(25)


var animal = "orang-outan";
const maFonction2 = function () {
    let animal = "pingouin";
    let autreAnimal = "escargot";
    console.log(animal);
    return autreAnimal;
}
var autreAnimal = maFonction2()
console.log(autreAnimal)
console.log(animal);