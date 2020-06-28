[`Programación con JavaScript`](../../Readme.md) > [`Sesión 05`](../Readme.md) > `Reto 02`

---

## Reto 2: Repositorios de GitHub

### Objetivos

Consumir la API de GitHub para obtener repositorios de usuarios

#### Requisitos

Continuar con el código creado en el [Reto 1](../Reto-01/Readme.md).

Agregar los siguientes estilos:

```css
details summary {
  margin-bottom: 8px;
}
.button-repo {
  display: inline-block;
  padding: 8px 0;
  color: #fff;
  background-color: #242424;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  text-decoration: none;
}
.button-repo:hover {
  opacity: 0.80;
}
```

#### Desarrollo

Por cada usuario agregar una lista con un máximo de 5 repositorios. Cada uno será un link para ver el repositorio en 
Github.

![Challenge 2](./assets/challenge-2.png)

<details>
  <summary>Solución</summary>

```javascript
const app = document.getElementById('app');

getGithubUsers()
  .then(function (data) {
    data.forEach(function (user) {
      return getUserRepositories(user.repos_url)
        .then(function (repos) {
          app.appendChild(createCard(user, repos));
        })
    })
  })

function createCard(data) {
  // Code from last challenge
  
  const reposList = createReposList(repos);
  
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(reposList);
  card.appendChild(link);

  return card;
}

function createReposList(repos) {
  const details = document.createElement('details');

  const summary = document.createElement('summary');
  const summaryText = document.createTextNode('Repositories:');
  summary.appendChild(summaryText);

  details.appendChild(summary);

  repos.forEach(function(repo) {
    const link = document.createElement('a');
    const linkText = document.createTextNode(repo.name);

    link.appendChild(linkText);
    link.href = repo.html_url;
    link.target = '_blank';
    link.className = 'button-repo';

    details.appendChild(link);
  })

  return details;
}

function getUserRepositories(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.slice(0, 5)
    })
}
```

</details>
