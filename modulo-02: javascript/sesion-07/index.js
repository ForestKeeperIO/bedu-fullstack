const Person = function(name, birthYear, job){
    // Atributos
    this.name = name
    this.birthYear = birthYear
    this.job = job
    // método
    this.calculateAge = () => 2023 - this.birthYear
    this.habla = () => {console.log("hola")}
  }
  
  const john = new Person("John", 1990, "Developer")
  john.telephone = "55555555"
  const jane = new Person("Jane", 1995, "Developer")
  
  console.log(john)
  console.log(jane.calculateAge())
  
  const Medico = function(name, birthYear, job, especialidad){
    Person.call(this,name, birthYear, job)
    this.especialidad = especialidad
    this.operar = () => {console.log("estoy Operando")}
    this.habla = () => {console.log("Hola soy médico")}
  }
  
  const Desarrollador = function(name, birthYear, job, skils){
    Person.call(this, name, birthYear, job)
    this.skils = skils
    this.name = `Desarrollador ${name}`
    this.programar = () => {console.log("estoy programando")}
    this.habla = () => {console.log("Hola soy desarrollador")}
  }
  
  const juan = new Desarrollador("Juan", "1998", "Developer", "javascript")
  
  const maria = new Medico("Maria", "2000", "Cirujano", "Pediatría")
  
  jane.habla()
  juan.habla()
  maria.habla()
  
  console.log(juan instanceof Desarrollador)
  console.log(juan instanceof Person)
  
  
  const Triangulo = function(base, altura){
    this.base = base
    this.altura = altura
  }
  
  Triangulo.prototype.calculaArea = function(){
    return (this.base * this.altura) / 2
  }
  
  const t1 = new Triangulo(4,6)
  
  console.log(t1)
  console.log(t1.__proto__)
  console.log(t1.calculaArea())
  
  Object.prototype.saluda = function(){
    console.log("holaa")
  }
  
  t1.saluda()
  