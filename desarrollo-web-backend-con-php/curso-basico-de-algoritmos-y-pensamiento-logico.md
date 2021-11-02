# Curso Básico de Algoritmos y Pensamiento Lógico

{% tabs %}
{% tab title="Introducción a los Algoritmos" %}
## ¿Qué es el sistema binario?

![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_15.jpg) ![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_16.jpg) ![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_17.jpg)

![Se divide cada valor entre 2](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_24.jpg) ![se toman en cuenta los resultantes de abajo hacia arriba](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_25.jpg)

**Suma**

Para sumar debes tener en cuenta 4 arreglos posibles: `0 + 0 = 0`; `0 + 1 = 1`; `1 + 0 = 1`; `1 + 1 = 10`. Por lo tanto, el resultado de sumar `1 0 0 1 1 0 0 0` y `0 0 0 1 0 1 0 1` es `1 0 1 0 1 1 0 1`

![](<../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_28 (1).jpg>) ![](<../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_29 (2).jpg>)

**Resta**

Para llevar a cabo una resta también hay 4 combinaciones posibles: `0 - 0 = 0`; `1 - 0 = 1`; `1 - 1 = 0`; `10 - 1 = 1`. Si restas los mismos números que usamos para la suma quedaría de la siguiente forma: `1 0 0 1 1 0 0 0 - 0 0 0 1 0 1 0 1 = 1 0 0 0 0 0 1 1`

![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_31.jpg) ![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_32.jpg)

**Acarreo**

Si lo notaste, hay dos casos especiales en los que utilizamos más de un dígito: `1 + 1 = 1 0` y `1 0 - 1 = 1`. Esto se debe al acarreo y es algo que ya conoces del sistema decimal, la diferencia es que en el sistema binario también se puede acarrear de forma negativa.

La resta de `0 - 1` no es posible, es por esto que el `0` pide la ayuda de su compañero de la izquierda y le quita un `1` que le permite operar. Entonces, el `0` se convierte en `1 0` y al restarle `1` nos da como resultado `1 0 - 1 = 1`. Si el compañero que cedió es un `0`, hará el mismo proceso de pedir valores a la izquierda, en cambio, si es un `1`, entonces se va a convertir en `0`.

**Multiplicación y división**

Funcionan bajo las mismas condiciones que en el sistema decimal, todo número multiplicado por `0` es igual a `0` y solo es `1` cuando se multiplica por `1`.

![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_34.jpg)

2021 - 33 = 1988

1988 / 2 = 994 (0)

994 / 2 = 497 (0)

497 / 2 = 248 (1)

248 / 2 = 124 (0)

124 / 2 = 62 (0)

62 / 2 = 31 (0)

31 / 2 = 15 (1)

15 / 2 = 7 (1)

7 / 2 = 3 (1)

3 / 2 = 1 (1)

1 / 2 = 0 (1)

1988  = 1 1 1 1 1 0 0 0 1 0 0



## Metodología para construir un algoritmo: requerimientos y proceso mental



**Algoritmo:** pasos para encontrar una solución a problemas simples o complejos.

_**Características de un algoritmo:**_

**Preciso:** paso a paso en un orden lógico\
**Definido:** todas la veces que pasemos por el da el mismo resultado\
**Finito:** tenemos un proceso de inicio y de cierre

***

_**Los algoritmos los podemos representar de manera:**_

**Gráfica:** a través de diagramas de flujo.\
**No gráfica:** se usa un lenguaje de programación, o de manera textual.

***

_**Metodología para crear un algoritmo:**_

1. **Definir el problema:** El para que.
2. **Analizar el problema:** Analizar cada uno de los detallas que lo componen, que metodología se aplicara
3. **Diseñar el algoritmo:** Iniciamos a escribirlo, a marcar todos aquellos pasos necesarios.
4. **Prueba de escritorio:** Tenemos entradas de prueba, para las cuales tenemos salidas esperadas.

![](<../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_44 (1).jpg>) ![](<../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_45 (1).jpg>) ![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_46.jpg) ![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_47.jpg) ![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_48.jpg) ![](../.gitbook/assets/slides-de-algoritmos-y-pensamiento-logico\_12accec1-3e35-438e-a738-dbc3b7257b8410241024\_49.jpg)


{% endtab %}

{% tab title="Tipos de datos y operadores lógicos" %}
## ¿Qué son Bits y Bytes?



En el día a día solemos referirnos a la velocidad de internet, tamaños de archivos, capacidad de dispositivos de almacenamiento, dispositivos móviles y muchos elementos tecnológicos que están dados en términos de bits, bytes, gigabytes, megabytes, etc. Pero, ¿sabemos en realidad a qué estamos haciendo referencia?

Estos términos hacen referencia a medidas de almacenamiento de datos y parten inicialmente de un “bit”, que es la unidad de información más pequeña de una computadora que puede tener solo un estado: 1 o 0. De ahí en adelante seguimos hablando de bits, pero, en mayor medida, con mayor capacidad y mayor magnitud.

### ¿Qué es un bit?

En la clase de sistema binario estudiamos sobre verdaderos y falsos, cuando hay carga y cuando no hay carga, y aprendimos que esto lo representamos con 1 y 0.

En realidad, el término “bit” es el acrónimo de “binary digit”, que hace referencia a los dígitos binarios que le indican a nuestro ordenador que hay o no carga de corriente. Sin embargo, este es solo el punto de partida porque desde aquí, pero en cargas mayores, empezamos a expresar otras medidas más grandes e incluso más comunes.

### ¿Qué son bytes?

La definición de bytes concluye que un byte son el conjunto de 8 bits y que a su vez representan el valor de una letra. Sin embargo su valor y significado va más allá de eso, porque de estos 8 bits, 7 son de información y uno adicional es de control.

De esta manera, cuando hablamos de velocidad de internet, por ejemplo, podemos referirnos a 200 kilobits, pero hablar de 200 kilobytes será más adecuado porque esta última cantidad es 8 veces mayor a los primeros 200 kilobits.

***


{% endtab %}
{% endtabs %}



