var heureActuelle = [];
heureActuelle[0] = [Number(prompt("Heures", "inserez l'heure actuelles sans les minutes"))]
while ((isNaN(heureActuelle[0])) || (heureActuelle[0] < 0) || (heureActuelle[0] >= 24)) {
    heureActuelle[0] = Number(prompt("Heures", "Vous devez mettre un chiffre entre 0 et 23"))
}
heureActuelle[1] = Number(prompt("Minutes","insérez les minutes actuelles sans les secondes"))
while ((isNaN(heureActuelle[1])) || (heureActuelle[1]<0) ||(heureActuelle[1]>=60) ) {
    heureActuelle[1] = Number(prompt("Minutes","Vous devez mettre un chiffre entre 0 et 59"))
}
heureActuelle[2] = Number(prompt("Secondes","insérez les secondes actuelles"))
while ((isNaN(heureActuelle[2])) || (heureActuelle[2]<0) ||(heureActuelle[2]>=60) ) {
    heureActuelle[2] = Number(prompt("Secondes","Vous devez mettre un chiffre entre 0 et 59"))
}


console.log(heureActuelle)
console.log(heureActuelle[1])

heureActuelle[2]++

if (heureActuelle[2] == 60) {
    heureActuelle[1]++
    heureActuelle[2] = 0
}

if (heureActuelle[1] == 60) {
    heureActuelle[0]++
    heureActuelle[1] = 0
}

if (heureActuelle[0] == 24) {
    heureActuelle[0] = 0
}

document.write("Dans une seconde il sera : " + heureActuelle[0] + "h" + heureActuelle[1] + "m" + heureActuelle[2] + "s")