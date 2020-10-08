---
description: >-
  Puedes encontrar el repositorio del curso en la sección de archivos de la
  plataforma, también puede verlo en este enlace:
  https://github.com/LeonidasEsteban/jquery-to-js-curso
---

# Curso de jQuery a JavaScript



{% tabs %}
{% tab title="Introducción" %}
## La historia de jQuery

jQuery es una librería de JavaScript que hizo su lanzamiento en el año 2006 con el fin de resolver diferentes problemáticas:

• Una misma forma de acceder al DOM.  
• Poder interactuar con datos de un servidor.  
• Crear animaciones.

El problema con jQuery surgió cuando se empezó a exagerar su uso y darle menor importancia a aprender JavaScript. Esto genero malos hábitos de aprendizaje y hasta en algunos casos no diferenciar jQuery de JavaScript.

A la par de que algunos se quedaban en jQuery, estaba ocurriendo la revolución de JavaScript trayendo consigo librerías que resolvían problemas específicos.

Aun con estas nuevas librerías, seguía sin resolverse el problema de hacer que uno aprenda mas JavaScript que librerías o frameworks pues uno igual puede abusar de Vue, React o Angular.

Por eso en este curso aprenderás a NO depender de ninguna librería, las ventajas de esto son:

• Reutilizar conocimientos.  
• Poder implementar soluciones sin dependencias.  
• Estar más capacitado para las grandes empresas.

![](../.gitbook/assets/image%20%282%29.png)

## Presentación del proyecto

Vamos a ver el proyecto en el que estaremos trabajando durante este curso. Te voy a entregar la maquetación previamente hecha y estaremos trabajando con JS para dar dinamismo a la página.

Para este curso primero vamos a hacer todo esto en Vanilla JS, y te esteremos dando consejos de cómo hacer estos ejercicios con Jquery.  
{% endtab %}

{% tab title="De jQuery a JavaScript" %}
## Variables y Funciones

En la primera parte de este curso vamos a buscar traer datos de un servicio externo, para ello vamos a utilizar la mezcla de varias combinaciones: Promesas, ajax/fecth y funciones asíncronas. Antes de implementar una Promesa debes saber dos cosas necesarias: Variables y Funciones.

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

* var era la forma en que se declaraban las variables hasta ECMAScript 5.
* const y let es la forma en que se declaran las variables a partir de ECMAScript 6, const sirve para declarar variables que nunca van a ser modificadas y en - cambio let son variables que pueden ser modificadas.

Las funciones son piezas de código que puedes reutilizar y se declaran con la palabra function.

## Promesas

Las promesas sirven para manejar nuestro código asíncrono.

“Una Promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona”, o dicho de forma más cotidiana, se va a mandar una función para ver si falla o se ejecuta con éxito.

Al crear una Promesa debemos pasarle por argumento la función que vamos a ejecutar de forma asíncrona, dicha función va a recibir dos parámetros para evaluar si se ejecuto bien la función o si fallo.

Nuestra promesa va a tener dos métodos para saber si todo salió bien o fallo. El método then se encarga cuando la promesa se cumplió exitosamente, mientras que el método catch se encarga cuando la promesa falla.

Dentro de JavaScript tenemos dos funciones para ejecutar una función después de algún tiempo, estas funciones son:

• setInterval: ejecutara una función cada x tiempo.  
• setTimeout: ejecutara una función después de x tiempo.

Si queremos resolver varias promesas a la misma vez, Promise cuenta con un método llamado all que recibe un array de promesas como parámetro. Este método se termina cuando todas las promesas del array se terminan de ejecutar. Si una de las promesas falla entonces el método all saltara un error mandándote al método catch.

Promise también cuenta con el método race que te regresa los resultados de la promesa que termine primero.

```javascript
const getUserAll = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('se acabó el tiempo');
  }, 5000)
})

const getUser = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('se acabó el tiempo 3');
  }, 3000)
})

// getUser
//   .then(function() {
//     console.log('todo está bien en la vida')
//   })
//   .catch(function(message) {
//     console.log(message)
//   })

Promise.race([
  getUser,
  getUserAll,
])
.then(function(message) {
  console.log(message);
})
.catch(function(message) {
  console.log(message)
})

```

## Tutorial de Ajax en jQuery y Javascript

Una característica muy solicitada en cualquier sitio dinámico es solicitar datos a un servidor, denominado API. Para esto normalmente se utiliza Ajax.

Ajax recibe dos parámetros los cuales son la url de la API y un objeto donde pondrás la configuración que se usara para realizar la petición. En la configuración se añaden dos funciones para manejar cuando la petición se realizo correctamente y cuando falla.

JavaScript internamente cuenta con una función llamada fetch que también realiza peticiones a una API. Al igual que Ajax necesita dos parámetros, una url y una configuración, pero si solo le mandas la url fetch usará una configuración por defecto donde el método HTTP será GET.  
fetch te regresa una promesa, esa promesa al resolverse te da los datos de respuesta y tiene un método llamado json que te regresa otra promesa con los datos en formato JSON.

Las promesas resuelven el problema del Callback Hell haciendo que una promesa pueda devolver otra promesa y en lugar de ser anidadas como los callback, estas promesas son encadenadas.

```javascript
$.ajax('https://randomuser.me/api/sdfdsfdsfs', {
  method: 'GET',
  success: function(data) {
    console.log(data)
  },
  error: function(error) {
    console.log(error)
  }
})

fetch('https://randomuser.me/api/dsfdsfsd')
  .then(function (response) {
    // console.log(response)
    return response.json()
  })
  .then(function (user) {
    console.log('user', user.results[0].name.first)
  })
  .catch(function() {
    console.log('algo falló')
  })
```

## Funciones asíncronas

Una función asíncrona va a ser como una función normal, pero poniendo código asíncrono de forma que sea más fácil de leer de forma síncrona.

Para declarar una función asíncrona se usa la palabra reservada async, luego de eso declaras tu función de forma normal. Dentro de una función asíncrona cuentas con otra palabra reservada llamada await, lo que hará esta palabra es indicar que se debe esperar a que termine de ejecutarse ese fragmento de código antes de continuar.

Vamos a realizar peticiones con fetch a la API de yts para pedirle películas según su categoría y mostrarlas dentro de PlatziVideo. Sin el uso de funciones asíncronas para cada fetch tendríamos que usar los métodos then y catch, en cambio gracias a async/await solo debemos escribir la palabra await antes de cada promesa.

```javascript
(async function load() { //al definir la funcion d esta forma se ejecuta sin tener que instanciarla
  // await
  // action
  // terror
  // animation
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }

  const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList)
})()
```

Sin la palabra reservada await, la funcion getData\(\) devuelve una promesa que puede ser tratada con .then\(\) y .catch\(\)

![](../.gitbook/assets/image%20%286%29.png)

## Selectores

Un selector nos sirve para poder manipular un objeto del DOM, puedes buscar dicho objeto ya sea por su id, clase, atributo, etc.

Para PlatziVideo necesitamos un selector de un contenedor para ponerle dentro la lista de películas.

En jQuery hacemos un selector de la siguiente forma:

```text
const $home = $('.home');
```

Por convención una variable que este represente un objeto del DOM lleva el signo $, esto es para tener claro que estamos manipulando un objeto del DOM y no algún tipo de información o dato.

Dentro de JavaScript existen distintas funciones para hacer selectores, entre ellas se encuentra:

• getElementById: recibe como parámetro el id del objeto del DOM que estás buscando. Te regresa un solo objeto.  
• getElementsByTagName: recibe como parámetro el tag que estas buscando y te regresa una colección html de los elementos que tengan ese tag.  
• getElementsByClassName: recibe como parámetro la clase y te regresa una colección html de los elementos que tengan esa clase.  
• querySelector: va a buscar el primer elemento que coincida con el selector que le pases como parámetro.  
• querySelectorAll: va a buscar todos los elementos que coincidan con el selector que le pases como parámetro.

```javascript
(async function load() {
  // await
  // action
  // terror
  // animation
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }

  const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList)


  const $actionContainer = document.querySelector('#action');
  const $dramaContainer = document.getElementById('#drama');
  const $animationContainer = document.getElementById('#animation');


  const $featuringContainer = document.getElementById('#featuring');
  const $form = document.getElementById('#form');
  const $home = document.getElementById('#home');


  // const $home = $('.home .list #item');
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');

})()
```

## Creación de templates

Vamos a crear una plantilla con nuestro elemento base, dicha plantilla será recibirá valores dinámicos.

Dentro de jQuery, la creación de un template seria con un texto base y si nuestro texto cuenta con distintas líneas más aparte tuviera valores dinámicos se vería de la siguiente forma:

```text
‘<div class=”container”>’ +
    ‘<p id=’+ id +’>Hola Mundo<p>’ +
‘<div>’
```

Desde ECMAScript 6 contamos con una nueva característica llamada template literals que se representan con las comillas invertidas \`\`, el ejemplo anterior pasaría a verse de esta forma:

```text
`<div class=”container”>
    <p id=${id}>Hola Mundo<p>
<div>`
```

```javascript
  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList)
  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  // console.log(videoItemTemplate('src/images/covers/bitcoinjpg', 'bitcoin'));
  actionList.data.movies.forEach((movie) => {
    // debugger
    const HTMLString = videoItemTemplate(movie);
    console.log(HTMLString);
  })
```
{% endtab %}
{% endtabs %}

## Creación de DOM

La plantilla que creamos la clase anterior de momento es puro texto, no es un elemento HTML que podamos poner dentro del navegador pues si los imprimimos en el navegador lo único que veremos es texto.  
Vamos a insertar la plantilla dentro de nuestro container, para ello recuerda que JavaScript se lee de arriba hacia abajo entonces debemos declarar la variable del container antes de llamar a algún método de este.  
Para convertir nuestra plantilla de texto a un Document Object Model necesitamos crear dentro de memoria un documento HTML, esto es posible gracias al método document.implementation.createHTMLDocument. A este documento HTML le vamos a añadir al body, mediante innerHTML, nuestra plantilla de texto. Una vez añadida le pedimos al body el primer elemento hijo que tenga y este lo añadimos a nuestro container.  
Este flujo es la magia que hay detrás de varias librerías y frameworks que nos ayudan a crear interfaces.

```javascript
  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList)
  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  // console.log(videoItemTemplate('src/images/covers/bitcoinjpg', 'bitcoin'));
  const $actionContainer = document.querySelector('#action');
  actionList.data.movies.forEach((movie) => {
    // debugger
    const HTMLString = videoItemTemplate(movie);
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    // debugger
    $actionContainer.append(html.body.children[0]);
    console.log(HTMLString);
  })
```

## Reutilizando funciones

En esta clase vamos a modificar nuestro código que se encarga de renderizar la plantilla de video para volverlo una función que pueda ser reutilizable. Dicha función recibirá dos parámetros, uno para saber sobre qué lista de películas va a iterar y otro para saber en que contenedor va a renderizar las películas.

```javascript
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }

  const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList)
  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  function renderMovieList(list, $container) {
    // actionList.data.movies
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
    })
  }
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer);

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer);

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer);
```

## Eventos

Toda aplicación web necesita lidiar con interacciones del usuario, desde un click hasta arrastrar algún elemento, estas interacciones son escuchadas por el navegador mediante algo llamado eventos. Existen muchos tipos de eventos, el más común es el evento de click.  
En esta clase vamos a trabajar con el evento click y submit.  
Para que un elemento HTML pueda escuchar algún evento debemos usar el método addEventListener. Este método recibe dos parámetros, el nombre del evento que va a escuchar y la función que se va a ejecutar al momento de que se accione el evento.  
La página se recarga al momento de ejecutarse el evento submit, para evitar esto debemos quitarle la acción por defecto que viene en submit usando el método event.preventDefault\(\).  


```javascript
  const $form = document.getElementById('form');

  $form.addEventListener('submit', (event) => {
    event.preventDefault(); //elimina la accion por defecto del submit que es enviar info y recargar la pagina
  })
```

## Clases y estilos CSS

En esta clase vamos a aprender a manipular las clases de CSS y estilos de nuestros elementos mediante JavaScript.  
Dentro de cada elemento tenemos un método llamado classList, con este podemos ver las clases que tiene nuestro elemento y además llamar a otros métodos para añadir, borrar o hacer toggle a alguna clase.  
De igual forma podemos acceder a todas las propiedades de CSS algún elemento mediante element.style.

**Truquitos con el Chrome Dev Tools**

`$0` para coger al elemento seleccionado.

```javascript
$form.addEventListener('submit', (event) => {
    event.preventDefault();
    $home.classList.add('search-active')
    //$home.classList.toggle('search-active') toggle = si la clase existe la quita y si no la agrega
  })
  
  function showModal() {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);
  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }
```

## Creación de elementos y asignación de atributos

Vamos a crear un elemento HTML sin usar un template string. Para crear el elemento desde cero vamos a usar el método document.createElement, este recibe como parámetro la etiqueta html del elemento que se quiere crear, no funciona mandándole el template string.  
Para añadirle un atributo al elemento que acabamos de crear haremos uso del método setAttribute. Este recibe dos parámetros, uno indicando el nombre del atributo que vamos a añadir y el segundo parámetro indicando el valor de dicho atributo.  
Vamos a crear una función para poder añadir múltiples atributos a un solo elemento.

```javascript
  const $featuringContainer = document.getElementById('featuring');

  function setAttributes($element, attributes) {
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute]);
    }
  }

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    $home.classList.add('search-active')
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    $featuringContainer.append($loader);
  })
```

## Formularios

```javascript
  const BASE_API = 'https://yts.am/api/v2/';

  function featuringTemplate(peli) {
    return (
      `
      <div class="featuring">
        <div class="featuring-image">
          <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
          <p class="featuring-title">Pelicula encontrada</p>
          <p class="featuring-album">${peli.title}</p>
        </div>
      </div>
      `
    )
  }

  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    $home.classList.add('search-active')
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    $featuringContainer.append($loader);

    const data = new FormData($form);
    const peli = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
    const HTMLString = featuringTemplate(peli.data.movies[0]);
    $featuringContainer.innerHTML = HTMLString;
  })
```

## Desestructuración de objetos

```javascript
    const {
      data: {
        movies: pelis
      }
    } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
```

## DataSet

 `Dataset` permite acceder a un objeto con todos los atributos `data` de un elemento DOM.

```javascript
<div id="element" data-id="10" data-category="action">
</div>
```

```javascript
function videoItemTemplate(movie, category) {
    return (
      `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category=${category}>
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  
  function addEventClick($element) {
    $element.addEventListener('click', () => {
      // alert('click')
      showModal($element)
    })
  }

  function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    const id = $element.dataset.id;
    const category = $element.dataset.category;

  }
```

## Encontrando elementos en la lista

```javascript
function findById(list, id) {
    return list.find(movie => movie.id === parseInt(id, 10))
  }

  function findMovie(id, category) {
    switch (category) {
      case 'action' : {
        return findById(actionList, id)
      }
      case 'drama' : {
        return findById(dramaList, id)
      }
      default: {
        return findById(animationList, id)
      }
    }
  }

  function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id, category);

    $modalTitle.textContent = data.title;
    $modalImage.setAttribute('src', data.medium_cover_image);
    $modalDescription.textContent = data.description_full
  }
```

## Animaciones

```javascript
  function renderMovieList(list, $container, category) {
    // actionList.data.movies
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie, category);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      const image = movieElement.querySelector('img');
      image.addEventListener('load', (event) => {
        event.srcElement.classList.add('fadeIn');
      })
      addEventClick(movieElement);
    })
  }
```

## Manejo de errores

```javascript
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.data.movie_count > 0) {
      // aquí se acaba
      return data;
    }
    // si no hay pelis aquí continua
    throw new Error('No se encontró ningun resultado');
  }
  
  try {
      const {
        data: {
          movies: pelis
        }
      } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)

      const HTMLString = featuringTemplate(pelis[0]);
      $featuringContainer.innerHTML = HTMLString;
    } catch(error) {
      alert(error.message);
      $loader.remove();
      $home.classList.remove('search-active');
    }
```

## LocalStorage

* `localStorage` permite almacenar datos sin tiempo de expiración
* `sessionStorage` permite almacenar datos. Estos datos se van a borrar cuando se termine la sessión del navegador

En local storage solo se puede guardar texto plano. No se pueden guardar objetos.

```javascript
//eliminar los datos
window.localStorage.clear();

//setear un valor
window.localStorage.setItem("nombre", "Toshi");

//setear un objeto
//primero se tiene que convertir el objeto en un string
window.localStorage.setItem("objeto", JSON.stringify({"peli": "wonder woman"});

//obtener el valor de un key
window.localStorage.getItem("nombre");

//obtener el valor de un texto objeto y convertirlo a objeto
JSON.parse(window.localStorage.getItem("objeto"));
```

```javascript
  const { data: { movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`)
  window.localStorage.setItem('actionList', JSON.stringify(actionList))
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action');

  const { data: { movies: dramaList } } = await getData(`${BASE_API}list_movies.json?genre=drama`)
  window.localStorage.setItem('dramaList', JSON.stringify(actionList))
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');

  const { data: { movies: animationList } } = await getData(`${BASE_API}list_movies.json?genre=animation`)
  window.localStorage.setItem('animationList', JSON.stringify(actionList))
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation');
```

## Obteniendo los datos almacenados

```javascript
  async function cacheExist(category) {
    const listName = `${category}List`;
    const cacheList = window.localStorage.getItem(listName);

    if (cacheList) {
      return JSON.parse(cacheList);
    }
    const { data: { movies: data } } = await getData(`${BASE_API}list_movies.json?genre=${category}`)
    window.localStorage.setItem(listName, JSON.stringify(data))

    return data;
  }

  // const { data: { movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`)
  const actionList = await cacheExist('action');
  // window.localStorage.setItem('actionList', JSON.stringify(actionList))
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action');

  const dramaList = await await cacheExist('drama');
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');

  const animationList = await await cacheExist('animation');
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation');
```



  




