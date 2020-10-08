# Curso de Prework Buenas Prácticas y Entorno de Desarrollo

{% tabs %}
{% tab title="Introducción a la línea de comandos" %}
## Manejo archivos y directorios 

Vamos a ver diferentes comandos que nos serán de gran utilidad:

```text
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

## Herramientas básicas \(Comandos CAT, MORE, TAIL y OPEN\)

```text
• cat: permite visualizar un archivo completo en la terminal. Tambien permite hacer copias de archivos 
       $ cat [nombre_archivo_original] > [nombre_nuevo_archivo] 
• more: muestra por partes un archivo dentro de la terminal. 
• tail: muestra las últimas 10 líneas de cada archivo, se puede modificar pasándole el parámetro con el número de líneas -15. 
• open: abre un archivo con el programa que tengamos por defecto.
```

## Crea llaves SSH

Las llaves SSH nos van a ayudar para autentificarnos con servidores. SSH utiliza criptografía asimétrica, o sea, tenemos dos llaves:

* Pública: la llave pública la podemos compartir por internet. 
* Privada: debes tenerla en un sitio seguro y no debe ser compartida.

Tener una llave SSH nos permitirá una conexión fácil y segura con servidores, en el caso de la escuela de JavaScript nos va a servir para conectarnos con GitHub. 

Para crear una llave SSH utilizamos el siguiente comando: 

`ssh-keygen -t rsa -b 4096 -C llave, puede ser tu correo>`
{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

