

// message1.addEventListener()
// message2.addEventListener('keydown',function type(e) {
//     if (e.keyCode === 13) {
//         let envoyer = message2.value;
//         message2.value = ''
//     conversation2.innerHTML += `<h2 class="u1 perso"> Me </h2> <p class="me u1 perso"> ${envoyer} </p>`
//     conversation1.innerHTML += `<h2 class="u1 lui"> User1 </h2> <p class="me u1 lui"> ${envoyer} </p>`
//     }
// })





var user1 = {
    message: document.querySelector('.user1 input'),
    conversation: document.querySelector('#chat1'),
}
user1.message.addEventListener('keydown',function type(e) {
    if (e.keyCode === 13) {
        let envoyer = user1.message.value;
        user1.message.value = ''
        user1.conversation.innerHTML += `<p class="message perso"> ${envoyer} </p>`
        user2.conversation.innerHTML += `<p class="message lui"> ${envoyer} </p>`
        user2.conversation.scrollBy(0,100)
        user1.conversation.scrollBy(0,100)
    }
})
var user2 = {
    conversation: document.querySelector('#chat2'),
    message: document.querySelector('.user2 input')
}
user2.message.addEventListener('keydown',function type(e) {
    if (e.keyCode === 13) {
        let envoyer = user2.message.value;
        user2.message.value = ''
        user2.conversation.innerHTML += `<p class="message perso"> ${envoyer} </p>`
        user1.conversation.innerHTML += `<p class="message lui"> ${envoyer} </p>`
        user1.conversation.scrollBy(0,100)
        user2.conversation.scrollBy(0,100)
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