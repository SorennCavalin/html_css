// if (true) {
    
// }
// var nb1 = 10
// var nb2 = 3;
// if (nb1 > 50) {
//     nb1++;
//     nb1 = nb1 * nb2;
//     document.write("nb1 et nb2 sont égale a " + nb1+ "<br>" + nb2 + "<br>");
// }
// document.write(nb1 + "<br>" + nb2)

var age = prompt("Quelle est votre age?");
if (age < 18) {
    document.write('vous êtes trop jeune pour utiliser ce site <br> cliquez sur le lien suivant pour etre renvoyé vers google <a href="https://www.google.com/">ici</a>' )
}
if (age > 17) {
    document.write("bienvenue")
}