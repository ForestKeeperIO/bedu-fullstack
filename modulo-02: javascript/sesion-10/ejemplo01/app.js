const title = document.getElementById("title")

const red = document.getElementById("red")
const blue = document.getElementById("blue")
const black = document.getElementById("black")

red.addEventListener("click", () => {
    title.style = "color: red;"
})

blue.addEventListener("click", () => {
    title.style = "color: blue;"
})

black.addEventListener("click", () => {
    title.style = "color: black;"
})

const boton = document.getElementById("boton")

boton.addEventListener("mousedown", (event) => {
    if (event.button == 0){
        console.log("Botón izquierdo")
    } if (event.button == 1){
        console.log("Botón central")
    } if (event.button == 2){
        console.log("Botón derecho")
    }
})