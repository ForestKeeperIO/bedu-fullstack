const carro = {
    brand : "Nissan",
    model: "Sentra",
    year: 2020
  }
  
  function addColor(car, color){
    //const carN = Object.assign({}, car, {color: color})
    const carN = { ...car, color:color}
    return carN
  }
  
  const newCar = addColor(carro, "Black")
  
  //console.log(carro)
  //console.log(newCar)
  
  var x = 4
  
  function foo(a,b){
    x = x + a
    return x * b
  }
  
  //console.log(foo(2,5))
  //console.log(foo(2,5))
  
  const cart = [
    {
      item : "Laptop",
      price : 300
    }
  ]
  
  function addElement(cart, element){
    return [...cart, element]
  }
  
  const newCart = addElement(cart , {item: "Phone", price: 400})
  
  //console.log(cart)
  //console.log(newCart)
  
  const newNewCart = addElement(cart,{item: "PC", price : 500})
  
  //console.log(newNewCart)
  
  const goo = function(a,b) {
    return a+b
  }
  
  function aplica(f,x){
    return f(x)
  }
  
  console.log(aplica((z) => z*2, 4))
  
  // f => (z) => z*2
  // x => 4
  // CUERPO ((z) => z*2)(4)
  // z => 4
  // 4 * 2
  // 8
  
  function pseudoAplica(x){
    return (z,y) => z * x * y
  }
  
  console.log(pseudoAplica(4)(2,6))
  
  const arr = [1,2,3,4,5]
  
  const arrM = arr.map((x) => x * 2)
  
  console.log(arrM)
  
  const arrF = arr.filter(x => x % 2 === 0)
  
  console.log(arrF)
  
  var acc = 0
  
  for(const x of arr) {
    acc = acc + x
  }
  
  // 0 + 1 = 1
  // 1 + 2 = 3
  // 3 + 3 = 6
  // 6 + 4 = 10
  // 10 + 5 = 5
  
  const arrR = arr.reduce((acc,x) => acc + x,0)
  
  const arrR2 = arr.reduce((acc,x) => [x,...acc], [])
  
  console.log(arrR2)
  
  const num = 1729
  // 1 + 7 + 2 + 9 = 19
  
  function sumaDigit(num){
    const array = num.toString().split("")
    // ["1","7","2","9"]
    const numbers = array.map(x => Number(x))
    // [1,7,2,9]
    const suma = numbers.reduce((acc,x) => acc+x,0)
    // 19
    return suma
  }
  
  console.log(sumaDigit(num))
  
  