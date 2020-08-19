var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()           //Nombre todo a mayuscula
var apellidoEnMinusculas = apellido.toLowerCase()       //Apellido todo en minusculas

var primeraLetraDelNombre = nombre.charAt(0)    //Primer Caracter
var cantidadDeLetrasDelNombre = nombre.length   //Cantidad de caracteres

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`      //con la ` permite interpolar variables, el resultado seria
                                                                //  Sacha LIFSZYC

var str = nombre.substr(1, 2)                     //Obtiene desde el caracter 1 ;a cantidad de 2 caracteres
                                                // el resultado seria ac
