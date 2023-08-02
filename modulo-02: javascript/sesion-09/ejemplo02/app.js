const ps = document.body.getElementsByTagName("p")

console.log(ps[0])
console.log(ps[1])
console.log(ps[2])

document.body.insertBefore(ps[2], ps[0])
ps[1].remove()

const h1 = document.createElement("h1")

const text = document.createTextNode("Hello World")

h1.appendChild(text)
console.log(h1)

document.body.appendChild(h1)


