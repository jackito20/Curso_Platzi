var nombre = 'Sacha'

function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase()     //nombre en alcance local (no modifica nombre en gobal)
  console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)
