const message1 = document.querySelector('.user1 input');
const message2 = document.querySelector('.user2 input');
const conversation1 = document.querySelector('#chat1')
const conversation2 = document.querySelector('#chat2')
KEY_ENTER = 13

message1.addEventListener('keydown',function type(message , u1 , u2) {
    if (event.keyCode === 13) {
        let envoyer = message1.value;
        message1.value = ''
        conversation1.innerHTML += `<h2 class="perso"> Me </h2> <p class="me perso"> ${envoyer} </p>`
        conversation2.innerHTML += `<h2 class="lui"> User1 </h2> <p class="me lui"> ${envoyer} </p>`
        conversation1.scrollBy(0,100)
    }
})
message2.addEventListener('keydown',function type(message , u1 , u2) {
    if (event.keyCode === 13) {
        let envoyer = message2.value;
        message2.value = ''
    conversation2.innerHTML += `<h2 class="u1 perso"> Me </h2> <p class="me u1 perso"> ${envoyer} </p>`
    conversation1.innerHTML += `<h2 class="u1 lui"> User1 </h2> <p class="me u1 lui"> ${envoyer} </p>`
    }
})

// document.querySelector(".user1 input").addEventListener("keydown", myFunction);

// function myFunction() {

//     switch (event.key) {
//         case "ArrowDown":
//             console.log("ArrowDown");
//             break;
//         case "ArrowUp":
//             console.log("ArrowUp");
//             break;
//         case "ArrowLeft":
//             console.log("ArrowLeft");
//             break;
//         case "ArrowRight":
//             console.log("ArrowRight");
//             break;
//         default:
//             console.log(event.key, event.keyCode);
//             return;
//     }
// }