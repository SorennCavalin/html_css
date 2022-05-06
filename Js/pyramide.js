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