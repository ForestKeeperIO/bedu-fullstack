function myFunction (param1) {
    return param1 * 2
  }
  
  function calculaEdad (birthYear){
    const age = 2023 - birthYear
    return age
  }
  
  const edadAlejandra = calculaEdad(1998)
  const edadOscar = calculaEdad(1521)
  const edadSamuel = calculaEdad(1999)
  
  console.log(edadAlejandra)
  console.log(edadOscar)
  console.log(edadSamuel)
  
  function yearsUntilRetirement(year, name) {
    const age = calculaEdad(year)
    const retirement = 65 - age
    console.log(`${name} se retirará en ${retirement} años`)
  }
  
  yearsUntilRetirement(1998, "Alejandra")
  yearsUntilRetirement(1521,"Oscar")
  yearsUntilRetirement(1999, "Samuel")
  
  const aQueTeDedicas = function (job, name){
    switch (job) {
      case 'desarrollador' :
        return `${name} desarrolla aplicaciones web`
      case 'diseñador' :
        return `${name} diseña paginas muy cool`
      default :
        return `${name} hace otra cosa`
    }
  }
  
  console.log(aQueTeDedicas)
  console.log(aQueTeDedicas("desarrollador", "Juan"))
  
  const arr = [function(a,b){return a+b}]
  
  
  // n! = n * (n-1) * ... * 1
  // 0! = 1
  // n! = n * (n-1)!
  // 4! = 4 * 3!
  // 4! = 4 * 3 * 2!
  
  function factorial2(n){
    if (n === 0) 
        return 1
    return n * factorial2(n-1)
  }
  
  console.log(factorial2(4))
  
  const factorial = function fac(n){
    if (n === 0) return 1
    return n * fac(n-1)
  }
  
  console.log(factorial(4))
  
  // IIFE (Immediately Invoked Function Expresssion)
  
  function logName(){
    const name = "John Doe"
    console.log(name)
  }
  
  (function(){
    const name = "John Doe"
    console.log(name)
  })();
  
  (function(lastname){
    const name = `John ${lastname}`
    console.log(name)
  })("Doe");
  
  // Arrow Functions
  // (param1, param2) => { body }
  // function (param1, param2) { body}
  
  
  
  const firstNames = [ 'Jhon', 'Jane', 'Mark' ]
  
  const getFullNames = names => {
    const fullNames = []
  
    for (const name of names) {
      fullNames.push(`${name} Doe`)
    }
  
    return fullNames
  }
  
  console.log(getFullNames(firstNames))
  
  // const suma = (a,b) => { return a + b }
  const suma = (a,b) => a + b
  
  console.log(suma(8,9))
  
  const multiplicaPorDos = n => n * 2
  
  console.log(multiplicaPorDos(8))