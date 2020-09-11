var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",  //ruta del mapa
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;   //carga la imagen desde la url esto puede tardar por lo que se agrega un evento cuando se cargue
fondo.imagen.addEventListener("load", cargarFondo); //cuando el fondo se carga desde el disco duro

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}
/**
 * 
 * @param {*} min 
 * @param {*} maxi 
 * Math.random() = flotante entre 0 y 0.999...
 * Math.floor numero entero por debajo de decimales
 */
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;   //obtiene un numero entre max y min
  return resultado;
}