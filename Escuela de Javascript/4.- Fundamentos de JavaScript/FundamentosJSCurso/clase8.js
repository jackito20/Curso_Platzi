var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

/**
 * 
 * @param {*} persona 
 * En esta funcion se esta devolviendo un nuevo objeto persona con la edad aumentada
 * Si se aumenta la edad directamente sobre el objeto, en javascript se modifica el objeto como
 * ambito global por que el objeto se pasa como referencia
 */
function cumpleanos(persona) {
  return {
    ...persona,     //se desgloza todo el objeto persona en un nuevo objeto
    edad: persona.edad + 1    //al nuevo objeto se le cambia un atributo
  }   
  //persona.edad += 1
}
