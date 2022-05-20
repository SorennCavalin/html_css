var noms = [];

for (var i = 0; i <= 3; i++) {
    noms = [i]
    console.log("ça c'est le tableau " + noms);
    console.log("ça c'est l'index de la boucle et son type " + noms[i]+ " " + typeof noms[i]);
    console.log("ça c'est la valeur de i et son type " + i + " " + typeof i)
    noms[i] = prompt("insérez un nom")
    console.log("ça c'est le tableau une fois le prompt inséré " + noms)
    console.log("ça c'est la valeur a l'index de i et son type " + noms[i] + " " + typeof noms[i])
    console.log("ça c'est la valeur de i et son type" + i + " " + typeof i)
    for (var a = 0; a < noms.length; a++) {
        console.log("la valeur de chaque element dans le tableau " + noms[a])
        }
    document.write("vous avez taper : " + noms[i] + "<br>")
}


noms.sort()
console.log(noms)
for (var e = 0; e < noms.length; e++) {
    document.write(" <br> je vous les ai rangé par ordre alphabetique : " + noms[e])
}

// function tri(a,b)
// {
// return (a.nom > b.nom)?1:-1;
// }
 
// var tableau = [{nom:"Franck"},{nom:"Louis"},{nom:"Alfred"}];
// tableau.sort(tri);
 
//   alert(tableau[0].nom)