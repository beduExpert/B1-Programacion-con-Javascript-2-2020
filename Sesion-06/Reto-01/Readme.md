[`Programación con JavaScript`](../../Readme.md) > [`Sesión 06`](../Readme.md) > `Reto 01`

---

## Reto 1: Find your GIF

### Objetivos

Crear un nuevo proyecto con webpack.

#### Requisitos

Iniciar nuevo proyecto con `npm`.

```
npm init -y
```

#### Desarrollo

En este reto debes lograr el mismo resultado obtenido en el [ejemplo 2](../../Sesion-05/Ejemplo-02/Readme.md) de la 
sesión anterior.

Debes separar la lógica en distintos módulos y dejar el js principal lo más limpio y conciso posible.

Por el momento no es necesario agregar estilo.

No olvides instalar y configurar Webpack Dev Server para facilitar el desarrollo.

<details>
  <summary>Solución</summary>

> No hay una única solución para este reto dada la flexibilidad que tiene el alumno de configurar el proyecto.

Posible estructura:

```
app
|- /dist
|- /node_modules
|- /src
|    |- /js
|        |- app.js 
|        |- apiUtil.js 
|        |- domUtil.js 
|        |- stringUtil.js 
|    |- index.html
|- package.json
|- package-lock.json
|- webpack.config.js
```

<details>
  <summary><strong>index.html</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8"/>
    <title>Find your GIF</title>
  </head>
  <body>

  <h1>Find your GIF</h1>

  <div>
    <input type="text" id="search"/>
    <button id="button">Search</button>
  </div>

  <div id="results"></div>

  </body>
</html>
```  
</details>

<details>
  <summary><strong>app.js</strong></summary>

```javascript
import { buildUrl, formatSearchString } from "./stringUtil"
import { createImage } from "./domUtil"
import { getGiphyResults } from "./apiUtil"

const searchInput = document.getElementById('search');
const searchButton = document.getElementById('button');

const results = document.getElementById('results');

searchButton.addEventListener('click', searchGIFs);

function searchGIFs() {
  const search = searchInput.value;

  if(search) {
    const formattedSearch = formatSearchString(search);
    const url = buildUrl(formattedSearch);

    return getGiphyResults(url)
      .then(function(gifs) {
        gifs.forEach(function(gif) {
          results.appendChild(createImage(gif.images.fixed_height.url, gif.title));
        })
      })
      .catch(function(err) {
        console.log(err)
      })
  }
}
```  
</details>

<details>
  <summary><strong>apiUtil.js</strong></summary>

```javascript
export function getGiphyResults(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.data
    })
}
```  
</details>

<details>
  <summary><strong>domUtil.js</strong></summary>

```javascript
export function createImage(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;

  return img;
}
```  
</details>

<details>
  <summary><strong>stringUtil.js</strong></summary>

```javascript
export function formatSearchString(search) {
  return search.replace(/ /g, '+');
}

export function buildUrl(search) {
  const API_KEY = 'YOUR_API_KEY';
  const baseUrl = 'http://api.giphy.com/v1/gifs/search';

  return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=9`;
}
```  
</details>

</details>
