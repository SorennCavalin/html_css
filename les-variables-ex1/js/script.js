/*Ecrire ici les variables telles que
nom=============string(chaîne de caractères)
prenom==========string(chaîne de caractères)
job=============string(chaîne de caractères)
age=============integer(nombre entier)
working=========boolean(opérateur booleen) initialisé à true dans un premier temps
*/

var nom = "Cavalin";
var prenom = "Sorenn";
var job = "apprenti dev";
var age = 18;
working = true;

var age1 = age;


/*ecrasez les variables pour présenter un autre personnage qui n'est, lui pas en poste*/
nom = "Petitjean";
prenom = "aoki";
job = "écolier";
age = 5;
working = false;
/*Ajoutez deux ans à votre personnage sans toucher aux variables*/

age += 2;

/*Calculez la moyenne d'âge de vos deux personnages dans une variable resultat en utilisant uniquement des variables*/

var resultat = (age + age1)/2  
