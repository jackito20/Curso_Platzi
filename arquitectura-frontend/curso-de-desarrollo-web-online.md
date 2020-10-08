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

* **Clients** \(clientes\): son los dispositivos a través de los cuales accedemos a los sitios web: un computador desktop, un teléfono, una laptop, etc.
* **Internet**: es toda la red formada por servidores y clientes que proveen y consumen contenidos web y se comunican entre sí a nivel global.
* **Server** \(servidor\): es un computador, ubicado en alguna parte de la red, que está prendido todo el tiempo, en el que se alojan o almacenan sitios web y sus recursos y al cual se accede a través de nombres de dominio \(.com, .net, .pe, etc.\). También se les conoce como hosting.

Profesiones dentro del Desarrollo Web:

* **Frontend**: son los encargados de cuidar toda la apariencia y experiencia de usuario. Su misión es pasar todo el diseño gráfico de un sitio o aplicación web, a código, y proveer toda la interactividad a los clientes. Esta rama se puede subdividir en algunas especializaciones como: Arquitecto Frontend, Desarrollador JavaScript \(frontend\), etc.
* **Backend**: resguardan los datos y la seguridad de las aplicaciones y sitios web. Su misión es crear y mantener toda la parte del sitio web que sucede en los servidores. Pueden especializarse aún más en: SysAdmis, DevOps, Desarrollador JavaScript \(backend\), entre otros.

Las tres tecnologías básicas que debe conocer y manejar un **Frontend** son:

* **HTML**: es el lenguaje de marcado para hacer websites.
* **CSS**: hojas de estilos cascada, el diseño hecho código.
* **JavaScript**: es el único lenguaje que funciona actualmente dentro de los navegadores de manera nativa."

## Plan de estudios para ser un gran desarrollador web

En [Platzi.com](http://platzi.com/) tienes todos los cursos necesarios para convertirte en un gran **desarrollador web**:

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

Las etiquetas son la representación básica de la información en un documento html. Sirven para crear y organizar el contenido.  
La sintaxis general de una etiqueta es:

```text
<nombre>contenido</nombre>
```

Hay ciertas etiquetas que tienen una sintaxis diferente, ya que se cierran en sí mismas; es decir, no tienen etiqueta de cierre:

```text
<nombre />
```

Algunas de las etiquetas más conocidas y usadas son:

**Etiquetas de cabecera \(head\):**

* **`doctype`**: indica al navegador el tipo de documento que se está mostrando.
* **`html`**: es la etiqueta que envuelve todo el documento
* **`head`**: es la cabecera del documento y contiene sub etiquetas que describen al documento o incluyen recursos adicionales.

**Etiquetas del cuerpo del documento \(body\):**

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

 [HTML5 Doctor, helping you implement HTML5 today](http://html5doctor.com/)

## Estructura de nuestro Sitio Web

El proyecto que desarrollaremos en este curso se trata de un Portafolio Personal, incluirá una cabecera, navegación, un hero \(área visual con información destacada\), un área de proyectos y otra para eventos, y finalmente un pié de página con un formulario de contacto y enlaces a redes sociales.

El archivo **index.html** es el archivo que el navegador abre por defecto al acceder a un directorio en un servidor web.

La estructura básica de un archivo html es la siguiente:

```text

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

```text
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

```text
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

Los atributos son valores agregados a las etiquetas \(tags\) html que extienden su habilidad o funcionalidad con información específica.

A continuación, un ejemplo de los atributos más comunes y usados en algunas etiquetas:

Para **img**:

* **src**: específica la _ruta_ de la imagen que será mostrada a través de esta etiqueta. La ruta puede ser _absoluta_ \(cunado especifica una dirección exacta, incluyendo el prefijo _http\(s\)_ \) o _relativa_ \(cuando la referencia a la ubicación de la imagen parte de la ubicación del archivo actual\).
* **alt**: indica un texto alternativo que será mostrado en lugar de la imagen cuando ésta no pueda ser mostrada.
* **width**: ancho de la imagen en pixeles.
* **height**: alto de la imagen en pixeles.

Para **link**, en la cabecera _head_ del documento:

* **rel**: indica la relación del recurso con el contenido.
* **type**: indica el tipo de recurso / formato.
* **href**: indica la ubicación \(url\) del recurso enlazado.

Para **meta**, también en la cabecera _head_ del documento:

* **charset**: indica la tabla de caracteres \(utf-8 para caracteres latinos\) usada en el documento.

Para **a**:

* **href**: la ubicación o ruta a la que enlaza esta etiqueta de ancla. En el caso de querer enlazar a elementos que se encuentran dentro del mismo documento, este atributo debe indicar el valor del atributo ““id”” de ese elemento destino del enlace.

```text
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
```
{% endtab %}
{% endtabs %}

