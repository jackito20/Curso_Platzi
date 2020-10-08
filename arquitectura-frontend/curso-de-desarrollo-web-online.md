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
{% endtab %}
{% endtabs %}

