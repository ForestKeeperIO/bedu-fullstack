const nombre = "Beto"
var y

function foo(a, b){
  const saludo = "hola"
  console.log(foo)
}
// Scope local de foo
// a , b , saludo

foo(5,6)
console.log(foo)

if(true) {
  let x = 35
}
//block scop: if/else, while, for

y = 99

function goo (){
  var z = 75
}

goo()

var arr = [1,2,3,4,5]
var doble = []

for (var i = 0; i < arr.length; i ++){
  doble.push(arr[i] * 2)
}

console.log(doble)

for (let i = 0; i < arr.length; i ++){
  doble.push(arr[i] * 2)
}

const h = "hola"

function uno(){
  const t = 9/0
}

var r

r = 89

console.log(this)
