
  var cuadrito = document.getElementById("area_de_dibujo");
  var papel = cuadrito.getContext("2d");
  var x = 0;
  var y = 0;
  var pintar = false;
  
  cuadrito.addEventListener("mousedown", dibujarMouseInicial);
  cuadrito.addEventListener("mouseup", dibujarMouseFin);
  cuadrito.addEventListener("mousemove", dibujarMouseMove);

  function dibujarMouseInicial(evento){
    console.log(evento);
    x=evento.clientX-5;
    y=evento.clientY-5;
    pintar = true;
  }

  function dibujarMouseFin(evento){
    pintar = false;
  }

  function dibujarMouseMove(evento){
    if(pintar){
        dibujarLinea("red", x, y, evento.clientX-5, evento.clientY-5, papel);
        x=evento.clientX-5;
        y=evento.clientY-5;
    }
  }

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
  