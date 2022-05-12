//
// 
// if (condition 1) {
//opérations 1
// } else if(condition2){
//     opérations 2
// } else {
//     opérations 3
// }
// Suite du programme

// créer un tableau contenant des éléments suivants :
// prénom, nom, adresse mail, âge, la date d'aujourd'hui : jj/mm/aaaa

var moi = ["Mitra", "Izadi", "mitra.izadi@lepoles.org", 19, "10/05/2022"];
console.log(moi);
// 1- Retirer la date et ajouter au début du tableau

var date = moi.pop();
console.log("Résultat de la fonction pop pour la date : ", date);
console.log(moi);

moi.unshift(date);
console.log(moi);
// 2- retirer et sauvgarder le nom et l'adresse mail et remplacer les par votre adresse postale et votre mot de passe.

var nom_mail = moi.splice(2, 2, "mon adresse", "password");
console.log("variable nom_mail : ", nom_mail);
console.log(moi);
// 3- Ajouter votre adresse mail à la fin du tableau

moi.push(nom_mail[1]);
// 4- Ajouter votre nom en deuxième position de votre tableau

var ajout_nom = moi.splice(1, 0, nom_mail[0]);
console.log(moi);

// 5- Parcourir le tableau (utiliser la boucle "for", la syntaxe "moi.length" et très utile dans cette étape) et aficher les informations à la fois sur le navigateur et à partir de la console

for (var i = 0; i < moi.length; i++) {
    document.write(moi[i] + "<br>");
}

// INDICE : moi.splice(2, 2, "mon adresse", "password");
// description de la fonction splice : à partir du troisième paramètre ce qu'on ajoute comme valeur ça sera inséré à partir la position précisée dans le premier paramètre