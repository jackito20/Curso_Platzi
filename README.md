# Curso de Prework Buenas Prácticas y Entorno de Desarrollo

{% tabs %}
{% tab title="Introducción a la línea de comandos" %}
## Manejo archivos y directorios&#x20;

Vamos a ver diferentes comandos que nos serán de gran utilidad:

```
• ls: Nos permite listar los archivos y directorios que se encuentren dentro de la carpeta en la que estamos ubicados, podemos pasarle distintos parámetos a este comando:
• -a podemos ver los archivos ocultos.
• -l nos lista los contenidos mostrando sus permisos y propietarios.
• -t nos lista los contenidos según su fecha.
• clear: Nos limpia la pantalla.
• pwd: Nos retorna la ruta absoluta en la cual nos encontramos.
• mkdir: Crea una carpeta.
• cd: Nos mueve a alguna carpeta que le indiquemos, dentro de los archivos ocultos vimos que existe:
• .: Refiere a la carpeta en la cual estamos ubicados.
• ..: Se refiere a la carpeta padre en la cual nos encontramos.
• history: Muestra el histórico de todos los comandos que hemos ejecutado.
• touch: Crea un archivo vacío con el nombre que le indiquemos.
• nano: Es un editor dentro de la consola, podemos abrir cualquier archivo y modificarlo.
• mv: Permite mover archivos entre distintas carpetas, solamente debemos indicarle el nombre del archivo y la ruta de destino.
• rm: Elimina únicamente un archivo, añadiendo el parámetro -rf podemos eliminar directorios también.
```

## Herramientas básicas (Comandos CAT, MORE, TAIL y OPEN)

```
• cat: permite visualizar un archivo completo en la terminal. Tambien permite hacer copias de archivos 
       $ cat [nombre_archivo_original] > [nombre_nuevo_archivo] 
• more: muestra por partes un archivo dentro de la terminal. 
• tail: muestra las últimas 10 líneas de cada archivo, se puede modificar pasándole el parámetro con el número de líneas -15. 
• open: abre un archivo con el programa que tengamos por defecto.
```

## Crea llaves SSH

Las llaves SSH nos van a ayudar para autentificarnos con servidores. SSH utiliza criptografía asimétrica, o sea, tenemos dos llaves:

* Pública: la llave pública la podemos compartir por internet.&#x20;
* Privada: debes tenerla en un sitio seguro y no debe ser compartida.

Tener una llave SSH nos permitirá una conexión fácil y segura con servidores, en el caso de la escuela de JavaScript nos va a servir para conectarnos con GitHub.&#x20;

Para crear una llave SSH utilizamos el siguiente comando:&#x20;

`ssh-keygen -t rsa -b 4096 -C llave, puede ser tu correo>`

``![](<.gitbook/assets/image (39).png>)``
{% endtab %}

{% tab title="Configuración entorno de desarrollo" %}
## **Instalación y configuración de VSCode**

Si la primera mejor amiga del programador es la línea de comandos, es momento de instalar y configurar el segundo mejor amigo del programador: el **editor de código**.

Existen multiples editores de código, para la escuela de JavaScript vamos a utilizar [Visual Studio Code](https://code.visualstudio.com). Vamos a añadir diferentes plugins para VSCode:

* **Git Blame**: va a mostrar el autor de la línea de código en la que estemos trabajando.
* **ESLint**: es una herramienta de análisis de código estático para identificar patrones problemáticos encontrados en el código JavaScript, o sea, nuestro linter. Debemos instalar y configurar eslint para que siga el estilo de código que le indiquemos.
* **Color Highlight**: resalta el color que estemos escribiendo.
* **SASS**: es un preprocesador de CSS.

&#x20;

En el proyeto debemos activar slint y seleccionar la 3era opcion

```
npx eslint --init
```

![](<.gitbook/assets/image (38).png>)

## **Google Chrome para desarrollo frontend**

Instalar Reacj para el navegador

[https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

[https://addons.mozilla.org/en-US/firefox/addon/react-devtools/](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

&#x20;

Instalar Redux para el navegador

[https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

[https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

&#x20;

## **Cómo instalar NodeJS**

&#x20;

Node es el entorno de ejecución que tenemos para JavaScript en el lado del servidor, está basado en el motor V8 de Google Chrome. Fue creado por Ryan Dahl en el 2009, es Open Source y multiplataforma. En esta clase vamos a aprender cómo instalarlo, cómo usarlo y cómo instalar paquetes usando npm.

**Revisión de Node en nuestro sistema**

En la mayoría de sistemas basados en Unix ya viene instalado por defecto Node, para asegurarnos de que esté instalado debemos irnos a nuestra terminal de comandos y ejecutar:

```
node -v
```

Esto nos debería mostrar la versión de node que tenemos instalados en el sistema, por ejemplo:

```
node -v v12.4.0
```

Si la respuesta que obtenemos es:

```
 node -v command not found: node
```

Debemos instalarlo

### **Instalación de Node en MacOS**

Para esta instalación vamos a requerir de homebrew. Este es un gestor de paquetes excelente para Mac y que vamos a usar en varias clases de este curso, si no lo tienes instalado lo mejor es que lo hagas. En este link [https://brew.sh/index\_es](https://brew.sh/index\_es) encontrarás los pasos necesarios para instalarlo.

Una vez tengamos instalado homebrew solo debemos ejecutar en la terminal

```
brew install node
```

Este proceso podría tardar un rato dependiendo de la velocidad a la conexión a internet, ya que cuando se intenta instalar un paquete con homebrew este intenta actualizar todos los paquetes que se han instalado con él. Una vez esté listo puedes escribir en la terminal:

```
node -v
```

y ya debería aparecerte la versión instalada que tienes de Node. Igualmente, con npm ejecutaremos:

```
npm -v
```

y debería salirte la versión que tienes de npm.

### **Instalación de Node en Linux**

Dependiendo de tu distribución de Linux deberás ejecutar comandos distintos, esto porque entre distribuciones cambiar el gestor de paquetes:

En distribuciones basadas en Debian y Ubuntu debes ejecutar:

$ sudo apt update

$ sudo apt install nodejs

$ sudo apt install npm

En distribuciones basadas en Arch:

$ pacman -S nodejs npm

### **Instalación de Node en Windows:**

Esta es la instalación más sencilla y es una instalación clásica en Windows, únicamente descargamos un programa y le damos continuar, o si prefieres configuras la instalación según las opciones que están disponibles. El programa se descarga desde acá [https://nodejs.org/en/#download](https://nodejs.org/en/#download) y seleccionas la versión que desees (recomendada la versión igual o superior a las 12)

## **Cómo ejecutar Node**

Una vez se tenga instalado Node en el sistema podemos hacer uso de él, en esta clase haremos un uso básico de sus comandos, a lo largo de la Escuela de JavaScript será utilizado. Lo primero que haremos será ejecutarlo y escribir un Hola mundo. En la terminal haremos lo siguiente:

$ node

\> console.log('Hola mundo')

Hola mundo

\>&#x20;

Al escribir node se nos abrirá un shell interactivo donde podremos escribir código en JavaScript. Esta herramienta es esencial en el desarrollo porque es aquí donde podremos probar funcionalidades antes de insertarlas en nuestro proyecto.

## **Cómo utilizar npm**

npm es el manejador de paquetes de Node con él podemos instalar dependencias a nuestro proyecto o instalar programas globalmente en nuestro sistema. A lo largo de este curso y de toda la Escuela de JavaScript npm será quien nos permita correr los proyectos e instalar nuestras dependencias.

&#x20;

## **Herramientas de desarrollo Backend: JSON Viewer y Postman**


{% endtab %}

{% tab title="Git y GitHub" %}
## **¿Qué es Git, para qué se usa y qué resuelve?**

Git es un sistema de control de versiones que nos permite llevar un histórico sobre los cambios de nuestro proyecto, no es el único sistema de control de versiones, pero sí el más usado. Fue creado por Linus Torvalds. **Git y GitHub no son lo mismo**, uno es el sistema de control de versiones y el otro es la red social de programadores.

Los repositorios son una estructura de datos que almacenan información sobre archivos y directorios. Es el inicio de todo proyecto con Git, dentro de un repositorio encontraremos **ramas**, no son más que la duplicación de un objeto bajo un repositorio, permite trabajar en paralelo para al final unir los cambios.

![](<.gitbook/assets/image (41).png>)

## **Instalación de Git**

Git es un programa que nos permite llevar control de versiones de un proyecto, en esta clase vamos a aprender cómo instalarlo y configurar ciertos parámetros básicos, a lo largo de este curso haremos un configuración más avanzada de Git.

Antes de que instalemos Git es necesario que revisemos si ya está instalado en nuestro sistema, por lo general en los sistemas operativos basados en Unix está instalado (MacOS o Linux); para verificar escribimos en la terminal de comandos:

$ git --version

git version 2.17.2

Si el comando aparece y retorna una versión quiere decir que fue está instalado dentro del sistema y no necesita hacerse una instalación.

### **Instalar Git en MacOs**

Podemos hacer uso de homebrew para la instalación o de un instalador que encuentras en este link [https://sourceforge.net/projects/git-osx-installer/files/](https://sourceforge.net/projects/git-osx-installer/files/). Si decides instalarlo por homebrew debes ejecutar en la terminal de comando:

$ brew install git

### **Instalar Git en Linux**

Dependiendo de la distribución de Linux que tenga el proceso de instalación cambia, esto debido a que cada distribución utiliza un programa distinto para manejar los paquetes.

Para distribuciones basadas en Debian y Ubuntu:

$ sudo apt-get update $ sudo apt-get install git

### **Instalar Git en Windows**

Es como instalar una aplicación más en Windows, el instalador lo consigues acá [https://gitforwindows.org](https://gitforwindows.org), debes descargarlo y abrirlo. Allí se te abrirá una ventana de instalación y solo debes seguir los pasos que te diga.

Git nos instala una terminal que se llama git shell esto es una terminal distinta a la que trae el sistema operativo, es muy similar a la que podríamos tener en Unix, incluso puede ser un reemplazo de Hyper o de la terminal de Ubuntu.

### **Configurar Git**

Para comprobar que la instalación fue exitosa debemos repetir el comando que escribimos al inicio:

$ git --version

git version 2.17.2

Aquí ya debería mostrar una versión instalada. No es necesario que sea la misma versión que vemos en esta clase, si instala una superior no pasa nada.

La configuración que haremos es poner dentro de git nuestro nombre y correo electrónico, para que de esta manera todo lo que hagamos esté de cierta forma “firmado” con nuestros datos. Debemos irnos a la terminal de comandos y ejecutar:

$ git config --global user.name "Pachito Lopez"

$ git config --global user.email "pachito@lopez.co"

Allí deberás completar tu información personal, esta que acabamos de poner es solo de ejemplo, no es real.

Si quieres profundizar en este tema te recomiendo que vayas al [Curso Profesional de Git y Github](https://platzi.com/clases/git-github/) que tenemos en Platzi.

## **Cómo crear un repositorio, primer commit, reset y logs**

Aprende el flujo básico de Git: crear un repositorio, crear un commit y ver un histórico de los commits.

Para comenzar con un nuevo repositorio en Git debemos correr el siguiente comando:

git init

Al correr el comando nuestra terminal nos va a mostrar que nos encontramos dentro de la rama master, la rama principal de todo proyecto en Git. Además, si ejecutamos ls -la veremos que hay una carpeta oculta llamada “.git”.

Todo cambio tiene varios estados dentro de Git:

* Sin seguimiento
* Sin cambios
* Con cambios
* En stagging

Para ver el estado del repositorio ejecutamos el comando git status. Podemos añadir un archivo con el comando git add \<nombre del archivo>, una vez lo tenemos añadido podemos dar commit con el comando git commit -m \<mensaje del commit>. Con git log podemos visualizar un histórico de los commits.

Dentro de Git es posible regresar entre commits con el comando git reset, tenemos dos opciones para regresar:

* \--soft: vamos a movernos al commit que le indiquemos, sin eliminar los commits de por medio.
* \--hard: nos movemos al commit que indiquemos y regresamos el repositorio al estado del commit, borrando todos los commits de por medio.

## **Ramas, rebase y merge**

Recuerda que una rama es la duplicación de un objeto sobre el repositorio y nos va a permitir trabajar en paralelo para después unir los cambios a nuestro proyecto, en este caso a nuestra rama master, los comandos principales son:

* git checkout -b develop: según el commit en el cual ejecutemos este comando va a ser el punto en el cual se va a crear una rama idéntica, en este caso con el nombre de “develop”.
* git merge develop: va a añadir los commits a la rama master.
* git rebase develop: va a añadir los commits a la rama master unificando ambas ramas y conservando la historia de la misma.

![](<.gitbook/assets/image (40).png>)

## &#x20;**Github: configuración, repositorio remoto, push y pull**

GitHub es la red social de programadores, como todo buen programador necesitas desplegar tus proyectos desde la terminal, para ello debes añadir una llave SSH a tu cuenta de GitHub. Dentro de GitHub crear un repositorio es bastante rápido y sencillo, puedes elegir si va a ser un repositorio público o privado y el tipo de licencia que va a tener tu proyecto, si es un proyecto open source lo mejor es añadir una licencia MIT.

## **Cómo crear un buen README.md y sintaxis de markdown**

&#x20;

El README es el archivo en el cual hacemos la descripción del proyecto, ya sea open source o privados es importante tener un buen README. Este archivo se escribe con formato markdown, esto es lo primero que veremos en esta clase.

### **Markdown**

Es un formato de escritura que permite la generación de contenido fácil y rápido, permite generar una salida (por lo general) en formato HTML sin necesidad de aprender a profundidad HTML. Es ampliamente utilizado por su facilidad de generar texto enriquecido.

### **Encabezados:**

Lo utilizamos para resaltar una parte importante, títulos, subtítulos, etc. Se utiliza el símbolo # para demarcar el inicio de un encabezado.

\# Encabezado nivel 1

\## Encabezado nivel 2

\### Encabezado nivel 3

\#### Encabezado nivel 4

\##### Encabezado nivel 5

\###### Encabezado nivel 6

En HTML tendríamos la siguiente salida

![](<.gitbook/assets/image (42).png>)

### **Párrafos:**

En formato Markdown escribirlos no es tan distinto a escribir en un texto plano, automáticamente se reconoce que es un párrafo, por ejemplo:

JavaScript es un lenguaje muy poderoso.

En la Escuela de JavaScript de Platzi aprenderás todo lo necesario para ir

de cero a rockstar.

En HTML sería:

JavaScript es un lenguaje muy poderoso.

En la Escuela de JavaScript de Platzi aprenderás todo lo necesario para pasar de cero a rockstar.

### **Itálicas y negritas**

Hay partes en las que necesitaremos hacer énfasis en ciertas palabras, lo común es que utilicemos itálicas y negritas para resaltarlas, en Markdown debemos hacer lo siguiente:

\*\*Esto es una negrita\*\*

\*Esto es una itálica\*

\*\*\_Esto es una negrita con itálica\_\*\*

En HTML sería:

**Esto es una negrita**

_Esto es una itálica_

_**Esto es una negrita con itálica**_

### **Citas**

Se utilizan para mostrar referencias a otros autores, en markdown hacemos:

\> Esto es una cita

Podemos poner citas con varios párrafos

\> Este es el primer párrafo

\>&#x20;

\> Este es el último párrafo

Podemos citar dentro de citas

Esta es la cita secundaria

Esta es la cita principal

Podemos anidar elementos que vimos más arriba:

**Este es el título de la cita**

Cita de la cita

### **Listas**

Podemos utilizar listas ordenadas y listas sin orden:

**Listas ordenadas**

1\.    Primer item

2\.    Segundo item

3\.    Tercer item

**Listas sin orden**

* Item
* Item
* Item

### **Código**

Es esencial que en los README podamos escribir código, esto para especificar la instalación o partes que debemos resaltar de nuestro proyecto. Hay dos formas en las que podemos resaltar código, dentro de un párrafo o en una sección completa, tal cual estamos haciendo en esta clase.

Esto es un pedazo de código dentro de un párrafo console.log('Hola Mundo')

Para insertar código lo que hacemos es dejar una tabulación y automáticamente lo reconocerá como código si no podemos utilizar \`\` para crear el bloque, así:

var **name** = 'Escuela de Javascript'

console.log(**name**)

### **Cómo escribir un buen README**

No hay un estándar sobre cómo escribir un buen README, cada proyecto es diferente y depende de cada uno. Pero hay ciertas partes que sí o sí debería contener un buen README.

4\.    Nombre: Especificamos cómo se llama nuestro proyecto.

5\.    Descripción: es donde diremos para qué exactamente es el proyecto, qué problemas resuelve y cualquier información relevante.

6\.    Instalación: muestra los pasos específicos para instalar el proyecto. Por lo general se muestra un pedazo del código necesario para la instalación.

7\.    Cómo usar: describe rápidamente casos de uso en los cuales se puede usar el proyecto, además de mostrar funcionalidades.

8\.    Cómo contribuir: si es un proyecto open source se describe acá la forma en la que deberían crearse las contribuciones.

9\.    Licencia: muestra la licencia que tiene el proyecto.\
En formato markdown podemos escribir cada uno de los items de esta manera:

**PlatziVideo**

PlatziVideo es la plataforma que te permite ver videos on demand y además

te enseña JavaScript de cero a rockstar.

**Instalación**

Puedes instalarlo desde npm

$ npm install platzi-**video**

O también clonando el repositorio

$ git **clone url**

**Cómo se usa**

**import** PlatziVideo

video = PlatziVideo()

**Cómo contribuir**

Puedes crear un pull request al proyecto

**Licencia**

MIT

Tener un buen README permite que los demás colaboradores del proyecto tengan todo el contexto necesario para poder arrancar, usar y crear nuevas funcionalidades.
{% endtab %}
{% endtabs %}



