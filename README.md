---
description: >-
  En este curso, Leonidas Esteban te da una introducción al mundo del desarrollo
  web que te será de mucha utilidad, tanto si quieres convertirte en un
  programador Backend, como si tu objetivo es ser un
---

# Curso de Desarrollo Web Online

{% tabs %}
{% tab title="Introducción al curso" %}
## Introducción al desarrollo web

El desarrollo web tiene que ver con todo lo que percibimos a través del navegador: páginas, aplicaciones y sitios web como Facebook, Instagram y Twitter.

Para comprender cómo funciona internet necesitamos conocer tres grandes conceptos:

* **Clients** (clientes): son los dispositivos a través de los cuales accedemos a los sitios web: un computador desktop, un teléfono, una laptop, etc.
* **Internet**: es toda la red formada por servidores y clientes que proveen y consumen contenidos web y se comunican entre sí a nivel global.
* **Server** (servidor): es un computador, ubicado en alguna parte de la red, que está prendido todo el tiempo, en el que se alojan o almacenan sitios web y sus recursos y al cual se accede a través de nombres de dominio (.com, .net, .pe, etc.). También se les conoce como hosting.

Profesiones dentro del Desarrollo Web:

* **Frontend**: son los encargados de cuidar toda la apariencia y experiencia de usuario. Su misión es pasar todo el diseño gráfico de un sitio o aplicación web, a código, y proveer toda la interactividad a los clientes. Esta rama se puede subdividir en algunas especializaciones como: Arquitecto Frontend, Desarrollador JavaScript (frontend), etc.
* **Backend**: resguardan los datos y la seguridad de las aplicaciones y sitios web. Su misión es crear y mantener toda la parte del sitio web que sucede en los servidores. Pueden especializarse aún más en: SysAdmis, DevOps, Desarrollador JavaScript (backend), entre otros.

Las tres tecnologías básicas que debe conocer y manejar un **Frontend** son:

* **HTML**: es el lenguaje de marcado para hacer websites.
* **CSS**: hojas de estilos cascada, el diseño hecho código.
* **JavaScript**: es el único lenguaje que funciona actualmente dentro de los navegadores de manera nativa."

[https://github.com/elyager-forks/desarrollo-web-portafolio](https://github.com/elyager-forks/desarrollo-web-portafolio)

## Plan de estudios para ser un gran desarrollador web

En [Platzi.com](http://platzi.com) tienes todos los cursos necesarios para convertirte en un gran **desarrollador web**:

* [Desarrollo Web](https://platzi.com/cursos/html5-css3/)
* [Git y Github](https://platzi.com/cursos/git-github/)
* [Responsive Design](https://platzi.com/cursos/responsive-design/)
* [CSS Grid Layout](https://platzi.com/cursos/css-grid-layout/)
* [Animaciones](https://platzi.com/cursos/animaciones-web/)
* [Post CSS](https://platzi.com/cursos/postcss/)
* [De jQuery a JavaScript](https://platzi.com/cursos/jquery-js/)
* [Fundamentos de JavaScript](https://platzi.com/cursos/fundamentos-javascript/)
* [Webpack](https://platzi.com/cursos/webpack/)
* [ReactJS](https://platzi.com/cursos/react/)
* [Redux](https://platzi.com/cursos/redux/)
* [React Router](https://platzi.com/cursos/react-router/)

## Software para trabajar en desarrollo web e introducción al proyecto

La herramienta fundamental para el desarrollo web es el Editor de Código. Existen varias opciones entre las que destacan: SublimeText, Atom y VisualStudio Code.

Los editores de código se pueden configurar y personalizar para ofrecer una mejor experiencia al desarrollador.
{% endtab %}

{% tab title="HTML" %}
## DOM

DOM es el acrónimo de Document Object Model o Modelo de documento, y es la manera en que se **representa** el contenido del documento, de manera similar a un árbol de nodos.

A continuación, un ejemplo sencillo de la estructura del DOM:

* html
  * head
    * title
    * meta
  * body
    * header
      * nav
    * section
      * article
    * footer

## Etiquetas

Las etiquetas son la representación básica de la información en un documento html. Sirven para crear y organizar el contenido.\
La sintaxis general de una etiqueta es:

```
<nombre>contenido</nombre>
```

Hay ciertas etiquetas que tienen una sintaxis diferente, ya que se cierran en sí mismas; es decir, no tienen etiqueta de cierre:

```
<nombre />
```

Algunas de las etiquetas más conocidas y usadas son:

**Etiquetas de cabecera (head):**

* **`doctype`**: indica al navegador el tipo de documento que se está mostrando.
* **`html`**: es la etiqueta que envuelve todo el documento
* **`head`**: es la cabecera del documento y contiene sub etiquetas que describen al documento o incluyen recursos adicionales.

**Etiquetas del cuerpo del documento (body):**

* **`article`**: diferencia partes del contenido que pueden vivir por sí mismas.
* **`nav`**: para hacer menús de navegación.
* **`aside`**: contenido menos relevante, como publicidad, etc.
* **`section`**: sirve para diferenciar las secciones principales del contenido.
* **`header`**: cabecera del documento.
* **`footer`**: pie de página del documento.
* **`h1 - h6`**: títulos de nuestro sitio web.
* **`table`**: tablas de contenidos, similar a la estructura de las hojas de calculo.
* **`ul y ol`**: listas de items.
* **`div`**: cualquier división para organizar el contenido.

&#x20;[HTML5 Doctor, helping you implement HTML5 today](http://html5doctor.com)

## Estructura de nuestro Sitio Web

El proyecto que desarrollaremos en este curso se trata de un Portafolio Personal, incluirá una cabecera, navegación, un hero (área visual con información destacada), un área de proyectos y otra para eventos, y finalmente un pié de página con un formulario de contacto y enlaces a redes sociales.

El archivo **index.html** es el archivo que el navegador abre por defecto al acceder a un directorio en un servidor web.

La estructura básica de un archivo html es la siguiente:

```markup

<html>
  <head>
    <title> Título de la página title>
  head>
  <body>
    <header> Cabecera del contenido header>
    <section> Sección principal section>
    <section> Otra sección section>
    <footer> Pié de página del documento footer>
  body>
html>
```

```markup
<!DOCTYPE html>
<html>
  <head>
    <title>Leonidas Esteban</title>
  </head>
  <body>
    <header>
      <div>
        <figure>
          <img> logo
        </figure>
        <nav>
          <ol>
            <li>
              <a>Portafolio</a>
            </li>
            <li>
              <a>Experiencia</a>
            </li>
            <li>
              <a>Trabajemos juntos</a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <section>sección principal</section>
    <section>sección portafolio</section>
    <section>sección eventos</section>
    <section>sección contacto</section>
    <footer>footer</footer>
  </body>
</html>
```

## Continuando con la estructura de nuestro Sitio Web

La estructura html de nuestro proyecto usa una o más de las siguientes etiquetas:

* **h1** a **h6**: son etiquetas para indicar títulos con un estilo que destaca del resto.
* **article**: es la parte de nuestro contenido que puede vivir por sí mismo. Pueden haber tantos artícle como proyectos o eventos tenga nuestro portafolio.
* **p**: define el texto de un párrafo.
* **small**: aplica una apariencia de texto reducido en tamaño.
* **strong**: aplica al texto un formato de negritas.
* **a**: corresponde a un ancla o enlace a una url interna o externa del documento.
* **img**: con esta etiqueta podemos enlazar imágenes en el documento.
* **figure**: le da un contexto semántico a las imágenes.

```markup
<section>
      <h1>
        Hola! Soy <strong>Leonidas Esteban</strong> Desarrollador <br/> <strong>Javascript</strong> con <br> pasión por la <strong>enseñanza</strong>
      </h1>
      <img> 
    </section>
    <section>
      <h2>Portafolio (Proyectos Destacados)</h2>
      <article>
        <h3>Platzi Video</h3>
        <h6>React Native / React</h6>
        <p><small><strong>Fecha:</strong> 01/07/2018</small></p>
        <p><small><strong>Pueds verlo en::</strong> www.platzi.com/native</small></p>
        <p>Platzi Video fue el resultado de 3 meses de trabajo
            para crear la mejor app para enseñar el funcionamiento
            de React y React Native. Desde crear un vista-detalle, hasta patrones avanzados de nevegación, este proyecto ha sido el ejemplo de futuros creadores de aplicaciones multiplataforma</p>
      <img>
      </article>
    </section>
    <section>
      <h2>Más sobre mi experiencia</h2>
      <article>
        <figure>
          <img/>
        </figure>
        <h3>PlatziConf México 2018</h3>
        <p>El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
        <a>Ver Plática</a>
      </article>
    </section>
```

## Atributos HTML

Los atributos son valores agregados a las etiquetas (tags) html que extienden su habilidad o funcionalidad con información específica.

A continuación, un ejemplo de los atributos más comunes y usados en algunas etiquetas:

Para **img**:

* **src**: específica la _ruta_ de la imagen que será mostrada a través de esta etiqueta. La ruta puede ser _absoluta_ (cunado especifica una dirección exacta, incluyendo el prefijo _http(s)_ ) o _relativa_ (cuando la referencia a la ubicación de la imagen parte de la ubicación del archivo actual).
* **alt**: indica un texto alternativo que será mostrado en lugar de la imagen cuando ésta no pueda ser mostrada.
* **width**: ancho de la imagen en pixeles.
* **height**: alto de la imagen en pixeles.

Para **link**, en la cabecera _head_ del documento:

* **rel**: indica la relación del recurso con el contenido.
* **type**: indica el tipo de recurso / formato.
* **href**: indica la ubicación (url) del recurso enlazado.

Para **meta**, también en la cabecera _head_ del documento:

* **charset**: indica la tabla de caracteres (utf-8 para caracteres latinos) usada en el documento.

Para **a**:

* **href**: la ubicación o ruta a la que enlaza esta etiqueta de ancla. En el caso de querer enlazar a elementos que se encuentran dentro del mismo documento, este atributo debe indicar el valor del atributo ““id”” de ese elemento destino del enlace.

```markup
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Leonidas Esteban</title>
    <link rel="icon" type="image/png" href="images/favicon.png" />
  </head>
  <body>
    <header>
      <div>
        <figure>
          <img src="images/logo.png" alt="Logo de http://leonidasesteban.com" />
        </figure>
        <nav>
          <ol>
            <li>
              <a href="#">Portafolio</a>
            </li>
            <li>
              <a href="#">Experiencia</a>
            </li>
            <li>
              <a href="#">Trabajemos juntos</a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <section>
      <h1>
        Hola! Soy <strong>Leonidas Esteban</strong> Desarrollador <br/> <strong>Javascript</strong> con <br> pasión por la <strong>enseñanza</strong>
      </h1>
      <img src="images/hero.jpg" width="500" height="300" alt="imagen principal del sitio"> 
    </section>
    <section>
      <h2>Portafolio (Proyectos Destacados)</h2>
      <article>
        <h3>Platzi Video</h3>
        <h6>React Native / React</h6>
        <p><small><strong>Fecha:</strong> 01/07/2018</small></p>
        <p><small><strong>Pueds verlo en::</strong> www.platzi.com/native</small></p>
        <p>Platzi Video fue el resultado de 3 meses de trabajo
            para crear la mejor app para enseñar el funcionamiento
            de React y React Native. Desde crear un vista-detalle, hasta patrones avanzados de nevegación, este proyecto ha sido el ejemplo de futuros creadores de aplicaciones multiplataforma</p>
      <img  width="500" src="images/platzi-video-react-native.png" alt="prouyecto del curso de React Native">
      </article>
    </section>
    <section>
      <h2>Más sobre mi experiencia</h2>
      <article>
        <figure>
          <img src="images/platzi-conf.jpg" width="500" />
        </figure>
        <h3>PlatziConf México 2018</h3>
        <p>El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
        <a>Ver Plática</a>
      </article>
    </section>
    <section>sección contacto</section>
    <footer>footer</footer>
  </body>
</html>
```

## Formularios HTML

Los Formularios en html son unidades de información que nos permiten recolectar información para enviarlos al propietario del website o a un servicio externo. Esta formado por dos partes o contextos: una parte donde se hace el ingreso y modelación de esos datos (en el frontend), y otra parte que se encarga de enviar, procesar y almacenar esos datos (en el backend).

Los formularios se crean con la etiqueta **form**. El atributo principal de un formulario es _action_, ya que contiene la ruta a la que serán enviados los datos recolectados.

Hay diversos elementos html que permiten la captura o recolección de datos, aunque generalmente se usan los elementos creados con la etiqueta _input_. Los inputs también sirven para crear botones, aunque existe una etiqueta especial para ésto llamada _button_… El atributo principal de los inputs es _type_, que indica el tipo de comportamiento o dato que se espera recibir.

Los elementos creados con la etiqueta _label_ muestran un texto que se puede asociar con un input para darle mayor significado al campo, principalmente cuando no se usa el atributo _placeholder_.

```markup
<section id="contacto">
  <form action="/suscripcion/">
    <h3>¿Creamos algo juntos?</h3>
    <input type="text" placeholder="Déjame tu email" id="email">
    <button>Enviar</button>
  </form>
</section>
```

## Navegación entre secciones

**target**\
Especifica en donde desplegar la URL enlazada:

\__self:_ Carga la URL en el mismo contexto de navegación que el actual. Este es el comportamiento por defecto.\
\__blank:_ Carga la URL en un nuevo contexto de navegación. Usualmente es una pestaña, sin embargo, los usuarios pueden configurar los navegadores para utilizar una ventana nueva en lugar de la pestaña.\
\__parent:_ Carga la URL en el contexto de navegación padre (parent) del actual. Si no existe el padre, este se comporta del mismo modo que \_self.\
\__top:_ Carga la URL en el contexto más alto de navegación (el cual es un ancestro del actual, y no tiene padre (parent)). Si no hay padre (parent), este se comporta del mismo modo que \_self.

```markup
<nav>
  <ol>
    <li>
      <a href="./portafolio/index.html">Portafolio</a>
    </li>
    <li>
      <a href="#eventos">Experiencia</a>
    </li>
    <li>
      <a href="#contacto">Trabajemos juntos</a>
    </li>
  </ol>
</nav>
```

```markup
<a href="https://www.youtube.com/watch?v=BIS7cWGgJg0" target="_blank">Ver Plática</a>
```

## Formas de agregar estilos a HTML

Hay tres opciones para incluir estilos que definan la apariencia de tu html:

* **Estilos en línea**: se definen directamente en el elemento html que quieres estilizar, se agregan con el atributo **style**.
* **Estilos con el tag Style**: regularmente este tag se incluye dentro de la etiqueta **head** del html.
* **Estilos enlazados desde un archivo css externo**: utilizando la etiqueta **link** que nos permite enlazar recursos externos.

A **CSS**, se le llama **hojas de estilos en cascada** porque los estilos que se definen para una página, se van aplicando de arriba hacia abajo, y de lo más general a lo más particular, teniendo prioridad lo más particular. Esto es, los estilos que prevalecen son los que han sido definidos **en línea**, luego los que fueron definidos mediante la etiqueta **style** en la cabeza o cuerpo del html, y por último los estilos definidos en archivos externos enlazados con la etiqueta **link**. Esta prioridad se puede alterar al usar el modificador \*\*!important"" en la definición de algún estilo en particular, aunque esto no es recomendado.

## Reglas, selectores, declaraciones, propiedades y valores de CSS

**- ¿Cuál de las 3 formas de insertar estilos HTML es la que se debería utilizar y por qué?**\
Archivos externos. Porque nos permite tener separado el código HTML del código CSS.

**- ¿Cuáles son las partes de un bloque de código en CSS?**\
Reglas\
Selectores\
Declaraciones\
Propiedades\
Valores

**- ¿Qué es una regla?**\
Es el conjunto de todas las partes del bloque de código (selectores, declaraciones, propiedades y valores)

**- ¿Qué es un selector?**\
Es la forma que usamos en CSS para apuntar hacia uno o varios elementos de HTML. Existen varios tipos de selectores.

**- ¿Cuáles son los tipos de selectores más importantes y qué significan?**\
De etiqueta = Se usa para apuntar a un tipo de etiqueta de html. No se recomienda usar cuando queremos afectar a una etiqueta y tenemos muchas en nuestro código HTML\
Descendentes = Se usa para apuntar a un elemento desde el padre hasta el hijo. Este último será al que vayamos a afectar.\
De id = Se usa cuando queremos afectar únicamente a una etiqueta en concreto, no importa cual sea, desde que se únicamente a ella.\
De clase = Se usa para afectar a varias etiquetas, las cuales deben tener como atributo class que sirve como apuntador hacia esas etiquetas

**Ejemplos**

\++Etiqueta ++

```css
/*si ponemos el siguiente código*/
a {
  color: blue;
}
/*Nos aplicará un color azul a todas las etiquetas de ancla en el documento HTML*/
```

Descendentes

```css
body header div nav ol li a{
	color: green;
}
/*nos aplicará el estilo únicamente a las etiquetas de ancla (<a>) que estén dentro de <li>*/
```

id

```css
/*supongamos que tenemos una etiqueta de párrafo con la id "parrafo1"...*/

#parrafo1{
	color: blue;
}

/*Nos aplicará el estilo únicamente a ese párrafo con id "parrafo1", PD las id son únicas no puedes poner una misma id en dos etiquetas distintas*/
```

Class

```css
.importante {
	color: pink;
}
```

**- ¿Qué es una declaración?**\
Es todo el conjunto de propiedades y valores que se encuentran dentro de las llaves del bloque de código de CSS

**- ¿Qué es una propiedad?**\
Son todas las diferentes formas que podemos usar para estilizar los elementos. Su funcionamiento está ligado a los valores

**- ¿Qué son los valores?**\
Son los valores que una propiedad puede tener.

![](<../.gitbook/assets/image (7).png>)

## Los estilos incluidos por el navegador

Los navegadores incluyen estilos predeterminados para cada elemento html. Esto significa que aún cuando no hayas definido o asignado ningún estilo a tus etiquetas, éstas tendrán una apariencia particular que es muy similar en todos los navegadores, aunque no necesariamente idéntica.



## Agregando clases a los componentes escritos en HTML

Para aplicar estilos a los componentes html, lo más común y recomendable es hacerlo a través de **clases** que se asignan al elemento html mediante el atributo **class**.

Un elemento html puede tener varias clases, se deben indicar en el mismo atributo class pero separadas por un espacio en blanco.

Al escoger los nombres de clases, debemos tener en cuenta que se puedieran aplicar a muchos elementos, o a elementos particulares, así que la claridad y precisión en su identificación facilitará la contextualización y mantenibilidad en el futuro.

Algunos de los estándares más usados para la identificación de clases son:

* [OOCSS](https://www.keycdn.com/blog/oocss/)
* [BEM](http://getbem.com/naming/)
* [Component CSS](https://www.sitepoint.com/introducing-ccss-component-css/)
{% endtab %}

{% tab title="Estilos y CSS" %}
## Unidades de medida y colores

Hay varias unidades de medida con las que se puede trabajar en CSS: %, em, rem, px, pt, fr, vw, vh\
Las medidas más comunes y utilizadas son los pixeles. Un **píxel** es la menor unidad homogénea en color que forma parte de una imagen digital. Es la unidad más práctica y fácil de utilizar y manipular, y es la que utilizaremos mayormente en este curso.

Los colores en CSS pueden ser representados de al menos tres formas diferentes:

* Representados con **palabras claves** para cada color, como: red, green, blue, pink, yellow, black, etc.
* Usando la composición de tres colores (**rojo**, **verde** y **azul**): para esto podemos usar notación hexadecimal o las funciones rgb() y rgba().
* Usando la composición mediante valores de **Matiz**, **Saturación** y **Luminosidad** con: hls() y hlsa().

Con respecto a los valores hexadecimales, cada color está representado por 6 digitos, que representan 3 pares de hexadecimales: FF - FF - FF (rojo, verde y azul), en el que cada par puede tomar valores hexadecimales entre 00 y FF. Cada uno equivale a valores decimales entre 0 y 255, donde 0 es la ausencia de ese color y 255 la mayor cantidad disponible. De esta manera cada color se forma por la combinación de diferentes proporciones de rojo, verde y azul.

* \#000000 es equivalente a Negro
* \#FF0000 es equivalente a Rojo
* \#00FF00 es equivalente a Verde
* \#0000FF es equivalente a Azul
* \#FFFFFF es equivalente a Blanco

&#x20;[\<color> - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color\_value)

## Inspector de elementos

Para ver y depurar el código de una página html, el navegador incluye una herramienta llamada **Inspector de elementos**, o simplemente **inspector**, que abre, en una sección de la ventana, una serie de espacios con información técnica muy detallada sobre todo lo que sucede en el DOM, incluídos los estilos que tienen aplicados cada uno de los elementos del html.

La mayoría de los navegadores incluye algún tipo de **Inspector**, en el curso usamos Google Chrome, pero la misma herramienta (o similar) la encuentras en Firefox, Opera, Edge, etc.

Utilizando el Inspector podemos hacer modificaciones (temporales) manualmente en el html de cualquier sitio web, consultar sus estilos y recursos enlazados, hacer pruebas en tiempo real con JavaScript, monitorear variables o eventos entre muchas otras tareas útiles para cualquier desarrollador.

## Tipos de textos personalizados

Los tipos de texto, también conocidos como **tipos de letras** o **fuentes**, son el conjunto de diseños tipográficos que representan a cada una de las letras y los caracteres gráficos en el documento. Su nombre correcto es **tipografía**. Los diferentes tipos de fuente están basados en archivos que existen en cada sistema operativo.

Algunos ejemplos de **tipos de texto** o fuentes, son:

* Arial
* Times New Roman
* Verdana
* DeJaVu
* Lato
* OpenSans
* Roboto

CSS permite utilizar **fuentes** diferentes a las disponibles en el sistema operativo del cliente mediante la importación o el enlace a archivos de fuentes externas. Las más usadas son las que están disponibles a través del sitio web de **Google Fonts**.

Al definir el tipo de texto asociado a una clase css con la propiedad **font-family** indicamos al navegador que debe intentar usar esa fuente en particular para darle la apariencia tipográfica a los textos de ese elemento html.

[https://fonts.google.com/](https://fonts.google.com)

```markup
<link href="https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro&display=swap" rel="stylesheet">
```

```css
body{
    font-family: 'Source Sans Pro',sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6
{
    font-family: 'Fjalla One', sans-serif;
    font-weight: normal;
}

```

## Propiedades para los textos

Además de todas las propiedades comunes que comparten los elementos estándar de html, como: display, position, margin, padding, top, left, right, bottom, border, etc., los elementos que admiten contenidos textuales aceptan una serie particular de propiedades entre las que se encuentran las siguientes:

* **font-family**: define el tipo de fuente aplicado al texto.
* **color**: define el colore del texto.
* **line-height**: define la altura desde la base del texto hasta la base de la siguiente línea de texto.
* **font-size**: define el tamaño del texto, admite cualquiera de las unidades de medida disponibles.
* **letter-spacing**: define el espaciado entre las letras del texto.
* **font-weight**: define el ““peso”” de la letra, negrita, normal, light y normalmente se indica en múltiplos de 100 o usando keywords.
* **text-decoration**: define el decorado del texto como subrayado, tachado, con subrayado superior, etc.
* **text-transform**: permite transformar el estado de mayúsculas / minúsculas en el texto, usando uppercase para mayúsculas sostenidas, lowercase para minúsculas sostenidas, etc.

```css
body{
    font-family: 'Source Sans Pro', sans-serif;
}
h1, h2 ,h3, h4, h5, h6 {
    font-family: 'Fjalla One', sans-serif;
    font-weight: normal;
   /* font-style: italic; */
}

h1{
    font-size: 40px;
    line-height: 1.5em;
    letter-spacing: -.2px;
 /*   text-transform: uppercase;
    text-decoration: underline; */
}
```

## Dimensiones fijas para elementos

Todos los elementos html comparten algunas propiedades de estilo, entre éstas se encuentran las propiedades relacionadas con sus dimensiones: **width** (ancho) y **height** (alto).

Al manipular las propiedades de dimensiones hay que tener en cuenta que si los contenidos de los elementos que estamos estilizando, son más grandes que las dimensiones que hemos indicado, se pudieran generar resultados inesperados en la apariencia, como solapamiento o desbordamiento.

## Backgrounds de color e imagen

Algunas de las propiedades de css relacionadas con la apariencia del fondo de los elementos son:

* **background**: con la que se puede indicar un color, o usada de manera extendida, puede incluir color de fondo, url de la imagen, posición y modo de repetición de la imagen.
* **background-image**: contiene la url que se usará como fondo del elemento.
* **background-color**: indica el color de fondo, se puede usar en combinación con la imagen.
* **background-size**: se puede indicar en valores de alto y ancho o en alguna de las palabras claves permitidas: cover o contain.
* **background-position**: indica la posición de la imagen dentro del elemento, puede indicarse en unidades o en palabras claves como center, left, top y right.
* **background-repeat**: indica el método de repetición de la imagen de fondo, puede ser: repeat, repeat-x, repeat-y o no-repeat.

```

h1{
    font-size: 40px;
    line-height: 1.5em;
    letter-spacing: -.2px;
    color: #fff;
}

h1 strong{
    color: #026fff;
}

.hero{
    height: 300px;
    background-image: url('../images/hero.jpg');
    background-color: #1b2127;
    background-size: 500px, 400px;
    background-repeat: no-repeat;
    background-position-x: right;
}
.header{
    background-color: #1b2127;
    color: #fff;
}
  
.header a{
    color: #fff;
    text-decoration: none;
}
```

## Bordes

Todos los elementos html admiten la propiedad de css **border**, que define la apariencia que tendrá el contorno del componente.\
El borde puede ser de muchos estilos, y al igual que las propiedades margin y padding que aprenderás más adelante, a los bordes se les puede colocar estilos tanto de forma general con la propiedad **border**, como de acuerdo al lado del elemento que se indique: border-top, border-right, border-bottom y border-left.

Con la propiedad **border-radius** se define el redondeado de las esquinas de los bordes.

```css
.project{
    /*  border-top: 10px solid red;
      border-right: 10px solid green;
      border-left: 10px solid blue;
      border-bottom: 10px solid yellow;*/
      /*border-color: #027fff ; */
      /*border-top-color: red;
      border-top-width: 15px;
      border-top-style: solid; */
      border: 1px solid gray;
      border-radius: 10px;  
}
```

## Márgenes

Los márgenes en CSS son el espacio que separa a los elementos html entre sí. Hay elementos de html que traen márgenes predefinidos (por defecto) en los estilos propios del navegador como el caso de: body, h1, h2, h3, h4, h5, h6, ol, ul, li, p, y muchos otros.

Cuando hay dos márgenes de elementos diferentes que colindan entre sí, se presenta una situación llamada ““margin collapsing”” en la que el mayor margen de los dos se superpone al otro.

Se puede asignar una medida de margin para los cuatro lados del elemento, o márgenes individuales para cada uno de los lados con: margin-top, margin-right, margin-bottom y margin-left.

Se puede centrar un elemento html colocándole el valor de **margin: 0 auto**, cuando dicho elemento tiene display _block_.

## Modelo de caja

El modelo de caja es un concepto teórico de css que representa a cada elemento html en base sus propiedades de: **margin**, **border**, **padding** y **dimensiones** (alto y ancho).\
Para visualizar un elemento html en su representación como modelo de caja debemos irnos a la parte baja de la sección _styles_ del inspector de elementos, o en la sección llamada **Computed**.

En el modelo de caja, el **ancho total** de un _elemento html_ equivale a la sumatoria de los valores de: **width**, **padding-left**, **padding-right**, **border-left-width**, **border-right-width**. De manera similar aplica para el **alto total** de cada _elemento_. Aunque **margin-left** y **margin-right**, forman parte del modelo de caja, no se incluyen para el calculo del ancho total.

Con la propiedad **box-sizing**, y en particular con el valor **border-box** de esta propiedad, podemos modificar el comportamiento del modelo de caja para que nuestro elemento nunca supere el tamaño máximo que le hayamos definido en **width** y **height**. Esta es la opción recomendada para trabajar.

## Tipos de display

Display es la propiedad de css que indica cómo debe ser mostrado un elemento html. Todos los elementos tienen algún tipo de display. Si un elemento no se ve en pantalla es porque seguramente su display es none.

Los valores más comunes que puede recibir la propiedad **display** son:

* **block**: el elemento intenta abarcar todo el ancho posible.
* **inline**: reduce su tamaño exclusivamente hasta lo que abarca su contenido, descartando las propiedades width y height.
* **inline-block**: combina lo mejor de block e inline, ya que respeta las dimensiones indicadas en las propiedades width y height, pero coloca el elemento en línea (al costado) de elementos hermanos que también tengan display: inline o inline-block.
* **flex**: asume algunas propiedades por defecto que favorecen la alineación de los elementos internos.
* **grid**: similar a flex, asume algunas propiedades por defecto organizando los contenidos en filas y columnas.
* **none**: oculta el elemento.

![](<../.gitbook/assets/image (9).png>)

## Propiedades de flexbox

Flexbox se refiere al tipo de display en css que permite un manejo _flexible_ de la alineación, dimensionamiento y distribución de elementos html.

Esta propiedad se aplica a un elemento padre, pero va a afectar principalmente a sus elementos hijos directos. Por defecto, los elementos internos quedan alineados unos seguidos de los otros. El comportamiento del modelo de caja de estos elementos hijos también se ha modificado, ya que pierden el efecto de su propiedad margin.

Los elementos hijos de un padre con propiedad **display: flex** tienen a su disposición algunas nuevas propiedades que aportan mayor flexibilidad a su comportamiento. Una de estas propiedades es **flex-shrink** que, junto a la propiedad **flex-wrap** del padre, permite adaptar y distribuir los elementos de manera dinámica en el espacio horizontal disponible hasta ocupar todo el espacio, y luego pasar a ocupar dinámicamente las siguiente filas hacia abajo.

```css
.padre{
	display: flex;
	flex-wrap: wrap;
}
.hijo{
	flex-shrink: 0;
}
```

![](<../.gitbook/assets/image (8).png>)



## Alineando elementos de forma horizontal

La propiedad de css que nos permite definir la forma en que se alinearán o distribuirán los hijos de un elemento al que se le ha asignado un _display flex_ es: **justify-content**. Y puede tomar entre otros valores, los siguientes:

* **flex-start**: para alinear todos los elementos hacia el inicio del espacio disponible.
* **flex-end**: para alinear todos los elementos hacia el final, a la derecha.
* **center**: para alinear todos los elementos al centro del espacio disponible.
* **space-between**: para distribuir los elementos con un espacio proporcional e igual entre ellos.
* **space-evenly**: para distribuir los elementos con un espacio proporcional e igual entre ellos (incluyendo el primer y último elementos con respecto a los extremos del espacio disponible).
* **space-around**: similar a _space-evenly_ pero tanto en el primero como en el último elemento, el espacio hacia los extremos es la mitad del espacio usado entre los elementos.

## Alineando elementos de forma vertical

Similar a como sucede con _justify-content_, es posible alinear y distribuir los elementos internos en el espacio vertical disponible usando la propiedad **align-items**, que puede tomar también los valores de: **flex-start**, **flex-end** y **center**.

Algo que es muy importante y se debe tener en cuenta a la hora de usar **align-items** y **justify-content** es que dependiendo de la propiedad **flex-direction** que se haya definido, el efecto de ambos se invierte, no en cuanto a sus elementos internos, sino en cuanto a si se debe usar uno u otro de manera vertical u horizontal.

_IMPORTANTE_: Cuando la propiedad **flex-direction** se ha definido como **column**, la propiedad **justify-content** ya no va a aplicar sobre la alineación horizontal, sino sobre la vertical. Y **align-items** ya no aplicaría sobre la alineación vertical sino la horizontal. Se intercambian sus efectos.

Para centrar completamente los elementos internos de manera vertical y horizontal en su elemento padre, debemos usar el valor **center** en ambas propiedades.\


## Estilos de la sección principal y de footer

En esta clase aplicaremos a nuestro proyecto los estilos necesarios para que la sección principal o **hero** de nuestro portafolio se vea correctamente. También completaremos la información de nuestro footer y le aplicaremos los respectivos estilos.

En esta clase vemos que además de las propiedades relacionadas con _display:flex_, en lo que se refiere a la alineación de elementos internos, existen también propiedades equivalentes que nos permite alinear textos dentro de un contenedor, estas propiedades son: **text-align** y **vertical-align**.
{% endtab %}
{% endtabs %}





