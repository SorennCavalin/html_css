var etoile = "*"
var espace;
var nombre;
var colonnes = 11
for (var j = 1; j <= colonnes; j++) {
    nombre = colonnes - j + 1;
    espace = colonnes - nombre;
    for (var a = 1; a <= espace; a++){
        document.write("&nbsp")
    }
    for (var b = nombre; b >= 1; b--){
        document.write(etoile)
    }
    document.write("<br>")
}

var etoile = "*"
var espace;
var nombre;
var colonnes = 11
for (var j = 1; j <= colonnes; j++) {
    nombre = colonnes - j + 1;
    espace = colonnes - nombre;
    for (var a = 1; a <= nombre; a++){
        document.write("&nbsp")
    }
    for (var b = espace; b >= 1; b--){
        document.write(etoile)
    }
    document.write("<br>")
}

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`---------- Starting exercise ${exercise}`)
 
//     for (let rep = 1; rep <= 6; rep++) {
//        console.log(`Exercise ${exercise}: Lifting weight repetitition ${rep}`);
//     }
//
// }for (var PyramideRow1 = 1; PyramideRow1 <= 10; PyramideRow1++) {
//       if (etoile.length[0] === "&nbsp") {
                                       
    // for (var PyramideRow10 = 1; PyramideRow10 <= 10; PyramideRow10++) {
    //     document.write(etoile)
    //     }
    //     etoile.slice(1,-1)
    //     document.write(etoile)
    // } else {
    //     etoile = "&nbsp" + etoile
