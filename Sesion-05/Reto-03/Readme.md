[`Programación con JavaScript`](../../Readme.md) > [`Sesión 05`](../Readme.md) > `Reto 03`

---

## Reto 3: Resultados dinámicos

### Objetivos

Mostrar de manera aleatoria los resultados consumidos de la API de GitHub

#### Requisitos

Continuar con el código creado en el [Reto 2](../Reto-02/Readme.md).

#### Desarrollo

Mostrar de manera aleatoria tanto los usuarios como los repositorios de cada usuario. Es decir, cada vez que se cargue
la página se mostrarían resultados distintos.

<details>
  <summary>Solución</summary>

```javascript
function getGithubUsers() {
  return fetch('https://api.github.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return shuffleArray(data).slice(0, 4)
    })
}

function getUserRepositories(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return shuffleArray(data).slice(0, 5)
    })
}

function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [ array[i], array[j] ] = [ array[j], array[i] ];
  }
  return array
}
```

</details>
