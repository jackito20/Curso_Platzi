var edad = 27

// edad = edad + 1
edad += 1

var peso = 75

// peso = peso - 2
peso -= 2

var sandwich = 1

peso += sandwich        //peso = peso + sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100    //redondear una cantidad con Math.round
var totalStr = total.toFixed(3)     //toma 3 decimales despues de la coma (es un string)
var total2 = parseFloat(totalStr)   //convierte el string a float

var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas
