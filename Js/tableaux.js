// Les tableaux en javascript


var chiffre = [1, 2, 3, 4, 5, 6]
for (var i = 0; i < chiffre.length; i++){
    var changement
    console.log(chiffre[i])
}

console.log(chiffre)

var tableauFruit = ['mango', 'banana', 'abricot', 'ananas'];


//shift retire la premiere valeur du tableau
var resultatDeLeFonctionShift = tableauFruit.shift();
console.log(tableauFruit);
console.log(resultatDeLeFonctionShift);
var tableauvite = ['chose', 'nimp']
//unshift rentre les veluers en parametres en premiere position du tableau
var resultatDeLeFonctionUnShift = tableauFruit.unshift('strawberry', tableauvite );
console.log(tableauFruit)
console.log(resultatDeLeFonctionUnShift)

//indexOf permet de connaitre l'emplacement exacte du parametre
var position = tableauFruit.indexOf('strawberry');
console.log(position)


//splice decoupe partir du numero d'index rentré et le nombre placé apres la virgule là 2 valeur seront retirées a partir de l'index dans la var position
var resultatDeLeFonctionSplice = tableauFruit.splice(position, 2)
console.log(tableauFruit)
console.log(resultatDeLeFonctionSplice)


//slice duplique partir du numero d'index rentré et le nombre placé apres la virgule là 1 seule valeur sera copiée a partir de l'index dans la var position
var resultatDeLeFonctionSplice = tableauFruit.slice(position, 1)
console.log(tableauFruit)
console.log(resultatDeLeFonctionSplice)
