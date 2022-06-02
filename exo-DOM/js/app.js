const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const form = document.getElementById('form-twitter')
const restant = document.querySelector('p')
const success = document.getElementById('success')
var maxCaracter = 300;

textarea.addEventListener('keyup', recupDonnee = () => {
    let carTaper = textarea.value.length;
    let nombreRestant = maxCaracter - carTaper;
    restant.textContent = nombreRestant
    console.log(nombreRestant,maxCaracter,carTaper)
    if (nombreRestant <= 20) {
        textarea.classList.add('orange')
    } else{
        textarea.classList.remove('orange')
    }
    if (nombreRestant <= 0) {
        textarea.classList.add('red')
        restant.classList.add('text-red')
        button.disabled = true
        button.classList.add('not-allowed')
        document.querySelector('#too-much').classList.add('nope')
    } else {
        textarea.classList.remove('red')
        restant.classList.remove('text-red')
        button.disabled = false
        button.classList.remove('not-allowed')
        document.querySelector('#too-much').classList.remove('nope')
    }
})




button.addEventListener('click',function successFull() {
    success.classList.add('success')
    window.setTimeout(function timer() {
        success.textContent = 
            window.setTimeout(function )
        success.classList.remove('success')

    },4000)
})