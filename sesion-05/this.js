function foo(){
    console.log(this)
  }
  
  function goo(){
    console.log("adios")
  }
  
  foo()
  
  const obj = {
    x: 56,
    fun : foo
  }
  
  obj.fun()
  
  const persona = {
    nombre: "Beto",
    apellido: "Bedu",
    nacimiento: 1999,
    edad : function(){
      const today = new Date()
      const year = today.getFullYear()
      this.age = year - this.nacimiento
    }
  }
  
  persona.edad()
  console.log(persona)
  console.log(this)
  
  function zoo(){
    const f = () => {
      this.x = 56
    }
    f()
  }
  
  const o = {
    z : zoo
  }
  
  o.z()
  console.log(o)
  console.log(this)
  