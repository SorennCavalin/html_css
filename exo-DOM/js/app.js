const textarea = document.querySelectorAll('textarea');
const button = document.querySelector('button');
const restant = document.querySelector('#car-restant');
const error = document.querySelector('.message-red')
const success = document.querySelector('#success');
var tapper;
var limite;
var maxCaracter = 300;
console.log(textarea)
console.log(button)
console.log(restant)
console.log(error)
console.log(success)

for (let chaque of textarea) {
    chaque.addEventListener('keypress', () => {
        let tapper = chaque.value.length;
        let limite = maxCaracter - tapper;
        console.log(tapper, limite);
        restant.textContent = limite;
        if (limite > 20) {
            chaque.classList.add('green');
            chaque.classList.remove('red');
            chaque.classList.remove('orange');
            restant.classList.add('text-green');
            restant.classList.remove('text-red')&&('text-orange');
            button.removeAttribute('disabled');
            button.classList.remove('not-allowed')
            error.classList.add('none')
            restant.classList.remove('text-orange');
        } else if ((limite <=20)&&(limite >0)) {
            chaque.classList.remove('green');
            chaque.classList.remove('red');
            chaque.classList.add('orange');
            restant.classList.add('text-orange');
            restant.classList.remove('text-red');
            button.removeAttribute('disabled');
            button.classList.remove('not-allowed')
            error.classList.add('none')
            restant.classList.remove('text-green');
        } else {
            chaque.classList.remove('green');
            chaque.classList.remove('orange');
            chaque.classList.add('red');
            restant.classList.add('text-red');
            restant.classList.remove('text-orange');
            restant.classList.remove('text-green');
            button.disabled = 'true';
            button.classList.add('not-allowed')
            error.classList.remove('none')
        }
    })
    
    button.addEventListener('click', function verif() {
        event.preventDefault();
        let contenu = ""+ chaque.value;
        success.classList.remove('none');
        success.textContent = "vérification en cours";
       const time = setTimeout(function succes() {
            success.classList.remove('verification');
            success.classList.add('message-green');
            success.innerHTML = 'verification terminée <br> votre message a été envoyé'
            chaque.value = '';
           console.log(contenu)
        }, 4000);
    })
    chaque.addEventListener('keyup', () => {
        let tapper = chaque.value.length;
        let limite = maxCaracter - tapper;
        console.log(tapper, limite);
        restant.textContent = limite;
        if (limite > 20) {
            chaque.classList.add('green');
            chaque.classList.remove('red');
            chaque.classList.remove('orange');
            restant.classList.add('text-green');
            restant.classList.remove('text-red')&&('text-orange');
            button.removeAttribute('disabled');
            button.classList.remove('not-allowed')
            error.classList.add('none')
            restant.classList.remove('text-orange');
        } else if ((limite <=20)&&(limite >0)) {
            chaque.classList.remove('green');
            chaque.classList.remove('red');
            chaque.classList.add('orange');
            restant.classList.add('text-orange');
            restant.classList.remove('text-red');
            button.removeAttribute('disabled');
            button.classList.remove('not-allowed')
            error.classList.add('none')
            restant.classList.remove('text-green');
        } else {
            chaque.classList.remove('green');
            chaque.classList.remove('orange');
            chaque.classList.add('red');
            restant.classList.add('text-red');
            restant.classList.remove('text-orange');
            restant.classList.remove('text-green');
            button.disabled = 'true';
            button.classList.add('not-allowed')
            error.classList.remove('none')
        }
    })
    
    button.addEventListener('click', function verif() {
        event.preventDefault();
        let contenu = ""+ chaque.value;
        success.classList.remove('none');
        success.textContent = "vérification en cours";
       const time = setTimeout(function succes() {
            success.classList.remove('verification');
            success.classList.add('message-green');
            success.innerHTML = 'verification terminée <br> votre message a été envoyé'
            chaque.value = '';
           console.log(contenu)
        }, 4000);
    })
    chaque.addEventListener('keydown', () => {
        let tapper = chaque.value.length;
        let limite = maxCaracter - tapper;
        console.log(tapper, limite);
        restant.textContent = limite;
        if (limite > 20) {
            chaque.classList.add('green');
            chaque.classList.remove('red');
            chaque.classList.remove('orange');
            restant.classList.add('text-green');
            restant.classList.remove('text-red')&&('text-orange');
            button.removeAttribute('disabled');
            button.classList.remove('not-allowed')
            error.classList.add('none')
            restant.classList.remove('text-orange');
        } else if ((limite <=20)&&(limite >0)) {
            chaque.classList.remove('green');
            chaque.classList.remove('red');
            chaque.classList.add('orange');
            restant.classList.add('text-orange');
            restant.classList.remove('text-red');
            button.removeAttribute('disabled');
            button.classList.remove('not-allowed')
            error.classList.add('none')
            restant.classList.remove('text-green');
        } else {
            chaque.classList.remove('green');
            chaque.classList.remove('orange');
            chaque.classList.add('red');
            restant.classList.add('text-red');
            restant.classList.remove('text-orange');
            restant.classList.remove('text-green');
            button.disabled = 'true';
            button.classList.add('not-allowed')
            error.classList.remove('none')
        }
    })
    
    button.addEventListener('click', function verif() {
        event.preventDefault();
        let contenu = ""+ chaque.value;
        success.classList.remove('none');
        success.textContent = "vérification en cours";
       const time = setTimeout(function succes() {
            success.classList.remove('verification');
            success.classList.add('message-green');
            success.innerHTML = 'verification terminée <br> votre message a été envoyé'
            chaque.value = '';
           console.log(contenu)
        }, 4000);
    })
}



// const place = document.querySelector('div')


// var chaine = "ceci est un texte qui s'ecrit tout seul";
// var tailleChaine = chaine.length;
// var table = chaine.split("");
// var ecrire = [];
// var txt = "";
// var dejaEcrit = tailleChaine - 1;
// for (let i = 0; i > tailleChaine; i++){
//     ecrire[i] = txt + table[i]
//     console.log(ecrire)
//     console.log(table[i], ecrire[i])
//     var txt = ecrire[i]
// }
// var indexLettre = 0;

// function ecrit() {
//     place.innerHTML = ecrire[indexLettre];
//     indexLettre++

// }






// document.write()