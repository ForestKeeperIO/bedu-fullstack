function createNode(type, child){
    const node = document.createElement(type)
    const text = document.createTextNode(child)

    node.appendChild(text)

    return node
}

console.log(createNode("h1", "Hello World"))
//<h1> Hello World</h1>

const autor = createNode("strong", "- Karl Popper")
// <strong>- Karl Popper</strong>
console.log(autor)

const cita = document.getElementById("quote")
console.log(cita)
cita.appendChild(autor)

const link = document.getElementById("link")
console.log(link)
link.href = "http://google.com"
link.textContent = "Some cool link"
link.className = "styled-link"