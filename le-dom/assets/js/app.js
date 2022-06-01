// Permet de vérifier le bon chargement du DOM AVANT que je JS ne commence à 
// être exécuté

function ready(callback) {
    // in case the document is already rendered 
    if (document.readyState != 'loading') callback();
    // modern browsers 
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8 
    else document.attachEvent('onreadystatechange', function () { if (document.readyState == 'complete') callback(); });
}
ready(function () {
    const link = document.querySelector('.ma-super-class');
    link.textContent = 'MDN Home Page'
    link.href = "https://developer.mozilla.org/"
    // do something 
});

const paragraphe = document.getElementById('monId');
console.log(paragraphe)
const liste = document.querySelectorAll('li');
console.log(liste)
// const lastList =[ liste[liste.length - 1] , liste[liste.length-2]];
const lastList = []
for (let el of liste) {
    if (parseInt(el.textContent) > 5)
        lastList.push(el)
}
console.log(lastList)


const newSection = document.createElement('section');
const newP = document.createElement('p');
const txt = document.createTextNode('I love javascript!!');
newP.appendChild(txt);
newSection.appendChild(newP);

const newSectionClone = newSection.cloneNode(true); 

document.body.appendChild(newSection);
document.body.appendChild(newSectionClone);
console.log(newSection)
console.log(typeof newSection)

newSectionClone.remove()


