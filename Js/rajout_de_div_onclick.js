// var modify = document.getElementsByName('h1');
// modify.setAttribute('style' , "onclick='rajouter_div()'")
//     onclick = 'rajouter_div()'
function rajouter_div() {
    var nouvelle_balise = document.createElement('div');
    nouvelle_balise.style.backgroundColor = "black";
    nouvelle_balise.style.width = '100px';
    nouvelle_balise.style.height = '100px';
    nouvelle_balise.className = 'souligner';
    nouvelle_balise.textContent = "c'est un block noir";
    nouvelle_balise.style.color = "white"
    document.querySelector('section').appendChild(nouvelle_balise);
}

// var modify = document.querySelectorAll("p");
// // modify.className="vert souligner"
// var p1 = modify[2]
// p1.setAttribute("class", "vert")
// var p2 = modify[0]
// p2.className = "souligner vert"
// function converti() {
//     document.getElementById("bap").setAttribute("id","blop")
    
// }
// document.getElementById("bap").onclick((converti())



// mod.setAttribute("id", "blop")

// function rajouter_div() {

//     alert("Test du bouton ok");

// }


// function demarrage() {

//     alert("Détection du js ok");

// }


// window.addEventListener("load", demarrage);
// function rajouter_div(){

//     var noeudBalise = document.createElement('div');

//     var noeudParent = document.querySelector("html");

//     noeudBalise.style.backgroundColor = "blue";

//     noeudBalise.style.width = "100px";

//     noeudBalise.style.height = "100px";

//     noeudParent.appendChild(noeudBalise);

//     alert("Le noeud parent est : " + noeudBalise.parentNode.nodeName);

// }


