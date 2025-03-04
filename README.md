# PROYECTO FINAL DAWEC CON REACT ROUTER

- Autores: Diego Fernández Lozano & Marcos Alarcón Alguacil
- Asignatura: Desarrollo de Aplicaciones Web en Entorno Cliente
- Curso: S2DAW
- Fecha de entrega: 05/03/2025

## 1. Descripción de la práctica.
El objetivo de esta práctica consiste en acceder a los datos de una API mediante AJAX, para mostrarlos meidante una aplicación de página única utilizando React Router, con varias rutas.

Nuestra página, similar a la anterior, trata sobre Pokémon; y nuestro objetivo consiste en listar, filtrar y mostrar la información de todos los pokémon de la región de Sinnoh, la cuarta generación de Pokémon. Además de React Router, hemos utilizado TypeScript y TailwindCSS para los estilos de la página.

### 1.1. Creación de una API propia.
Para crear nuestra aplicación, hemos preparado una API propia con todos los datos que necesitamos de todos los pokémon de Sinnoh. De esta forma solucionamos un problema que tuvimos con la API anterior, la [PokéAPI](https://pokeapi.co/), pues aunque es más completa, distribuye los datos de una forma confusa que complica la codificación de la aplicación, además de que contiene información de todos los pokémon existentes, mientras que nosotros solamente vamos a mostrar una pequeña parte de ellos.

Por ello hemos decidido apostar por crear una API (por ahora en local) con solamente la información que vamos a mostrar, con una estructura simple que nos permita navegar por ella de una forma cómoda.

### 1.2. Instalar la API.
Para tener operativa la API hay que hacer pasos previos para ello.

1. Instalar IntelliJ (Comunity o Ultimate), MySQL y MySQL Workbench.
2. Descomprimir el fichero API.rar.
3. Abrir el pokemons.sql en el MySQL Workbench.
4. Crear el usuario y luego cargar el resto de sql.
5. Descomprimir el sinnohapi.rar y abrir la carpeta en el IntelliJ.
6. Darle al play y comprobar que funciona correctamente la api en: http://localhost:8080/api/

## 2. Explicación de la aplicación.
Nuestra aplicación consiste en una página web (**home**) que contiene la lista de todos los Pokémon de la región de Sinnoh, en formato simplificado (listando su ID y su nombre) y acompañado por su sprite (imagen compuesta de píxeles) y sus tipos. Adicionalmente se muestra el icono en pequeño del pokémon y un tipo de pokéball según su fase evolutiva.  
Para cada pokémon existe además un botón que nos permite acceder a la siguiente página.

La segunda página (**descripción**) contiene los datos en específico del pokémon seleccionado, esto es su ID, nombre, tipos, categoría, peso y altura, y su descripción. Se mantiene también la imagen que ya se mostraba en la página anterior.

Y finalmente tenemos una tercera página (**filtro**) donde se puede filtrar y buscar pokémon de la lista. Se nos permite buscar introduciendo un nombre, seleccionando por tipo, y ordenando según su altura o peso (en orden ascendente o descendente). Una vez elegimos los criterios por los que filtrar, se muestra la lista de pokémon que cumplen dichos criterios, ordenados por ID si no se especifica lo contrario, y pudiendo hacer clic sobre cualquiera de ellos para ver sus datos en detalle.

- Como punto adicional, existe un botón en el Header que nos permite cambiar la apariencia de la aplicación para ajustarla al juego que elijamos, ya sea Pokémon Diamante, Perla o Platino (los juegos que componen la cuarta generación de Pokémon, sobre la que trata esta apliación). Pero el cambio no es solamente estético, pues se modifica la imagen y la descripción de los pokémon para mostrar la que proviene de cada juego.

## 3. Tecnologías utilizadas.
Para la creación de nuestra aplicación, hemos utilizado React Router para especificar diferentes rutas, así como organizar el código en distintos componentes reutilizables, como por ejemplo el **Header** o los **botones**. De esta forma es mucho más fácil de comprender el código, así como de modificar.

Para los estilos hemos decidido utilizar TailwindCSS debido a la flexibilidad que nos proporciona a la hora de estilar la aplicación y lo útil que resultan sus clases predefinidas.

Y adicionalmente hemos utilizado TypeScript en lugar de JavaScript, pues faicilita en gran medida la codificación y elimina muchos errores en tiempo de ejecución gracias al tipado de variables, entre otras características que proporciona.

Todo este proyecto los hemos creado con Vite, un gestor que nos permite instalar dependencias así como poder ejecutar el proyecto de una forma sencilla.

## 4. Instrucciones de instalación.
Ya que hemos utilizado Vite para la creación del proyecto, es necesario instalar Node para ejecutar correctamente el proyecto.

1. Instalar node y sus dependencias utilizando el gestor de paquetes NPM: 
```bash
npm install
```

2. Lanzar la aplicación con node:
```bash
npm run dev
```
La aplicación web responderá a la dirección `http://localhost:5173`.

3. Opcionalmente se puede crear una build de la aplicación:
```bash
npm run build
```

## 5. Documentación de la API.
Como ya se ha explicado anteriormente, hemos creado una API propia para poder acomodar los datos de una forma sencilla y eficaz. Por ello vamos a explicar cómo funciona.

- Si accedemos a la ruta **"api/"** se nos proporciona una tabla con las instrucciones de uso de la API, siendo una forma rápida y cómoda de consultar su manual.
- Si accedemas a la ruta **"api/pokedex_sinnoh"** se listarán todos los pokémon que integra la API, con todos sus datos formateados de una forma sencilla. Cada pokémon se muestra en formato JSON con sus campos: su ID, su nombre, sus tipos, etc.
- Si accedemas a la ruta **"api/pokedex_sinnoh/{id}"** se mostrarán los datos del pokémon cuyo ID se haya especificado en la ruta. Esto es, se muestra el JSON de ese pokémon con todos sus campos, de igual forma que al visualizar la lista completa, pero permitiendonos buscar por un ID en específico.

## 6. Enlaces de interés.

- [Enlace a la página desplegada con Vercel](https://pokedexsinnoh.vercel.app/)
