var cacher = document.getElementById("toggle-rectangle");
console.log(cacher);


var couleurRouge = document.getElementById("rectangle");
var couleurVerte = document.getElementById("rectangle")
var cacher = document.getElementById("toggle-rectangle")


// pour mettre la classe important sur le rectangle classe qui contient un background rouge
couleurRouge.addEventListener("mouseenter",function hover() {
    couleurRouge.classList.toggle("important");
    console.log(couleurRouge)
})
// pour remettre le rectangle en bleu
couleurRouge.addEventListener("mouseout",function hover() {
    couleurRouge.classList.toggle("important");
    console.log(couleurRouge)
})


// Pour double cliquer et changer en vert
couleurVerte.addEventListener("dblclick", function double() {
    couleurVerte.classList.toggle("good")
    console.log(couleurRouge)

})
// quand on enleve la souris du rectangle la classe good s'enleve pour eviter que quand la souris revient le rectangle repasse au vert et pas au rouge
couleurVerte.addEventListener("mouseout", function double() {
    couleurVerte.classList.remove("good")
    console.log(couleurRouge)
    
})

cacher.addEventListener("click", function hide() {
    var hide = document.getElementById("rectangle")
    hide.classList.toggle("hide");
})
// couleurRouge.addEventListener("mouseover",function hover() {
    
//     couleurRouge.addEventListener("mouseout",function deHover() {
//         couleurRouge.classList.toggle("important");
//     })
// })
// cacher;
// var rect
// console.log(rect)

