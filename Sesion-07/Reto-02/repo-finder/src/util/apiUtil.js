export function searchRepositories(searchTerm) {
  return fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
    .then((response) => response.json())
    .then(data => data.items)
    .catch(err => console.log(err))
}
