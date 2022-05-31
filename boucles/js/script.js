/*Stars*/
//Niv 1

//Niv 2

/*Count*/


for (let i = 1; i <= 5; i++){
        afficheStars("&Star;");
}

afficheStars("<br>");
for (let i = 1; i <= 5; i++){
    afficheStars("&star;");
}

afficheCount("<ul>");
for (let i = 10; i >=0; i--) {
    afficheCount("<li>Il reste " + i + " secondes! </li>");
}
afficheCount("</ul>");

/*Pyramide*/
affichePyra("Affichage Pyramide");
affichePyra("<hr>");
/*Pyramide Inversée*/

var nbsp;
var triangle;
var etage =10;
for (let i = 1; i < etage; i++) {
    triangle = etage - i;
    nbsp = etage - triangle;
        affichePyra(" ");
    for (let a = triangle; a >= 1;a--) {
        affichePyra("&triangle;");
    }
    affichePyra("<br>");
}
/*Grille => Boucle imbriquée mise en forme par les spans en colonne et les divs en ligne*/ 
var num = 1
for (let i = 0; i < 10; i++) { 
    afficheGrid("<div>");
    for (let a = 1; a <= 10; a++) {
        afficheGrid("<span>"+ (i*10+a) + "</span>");
    }
    afficheGrid("</div>");
}

