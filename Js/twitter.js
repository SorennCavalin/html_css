var carRestant = document.getElementById("counterBlock");

var taper = document.getElementById("tweetContent");
console.log(taper);
taper.setAttribute("onkeydown","tempsReelle()")
function tempsReelle() {
    taper = document.getElementById("tweetContent").value;
    document.getElementById("counterBlock").textContent = max - taper.length
}
var max = 140;

