// window.addEventListener(
//     "click", // Evento
//     function(){ // Handler
//         console.log("Ouch!!") 
//     })

const button = document.getElementById("but");
//const button2 = document.querySelector("button");

button.addEventListener(
    "click", // Evento
    () => { // Handler
        console.log("Se dió click al botón")
    })

const but2 = document.getElementById("but2")
but2.addEventListener("click", () => {console.log("Hola")})

function once() {
    console.log("Le dimos click al otro botón")
    but2.removeEventListener("click", once)
}

but2.addEventListener("click", once)