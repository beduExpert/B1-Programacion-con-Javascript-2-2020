import {searchRepositories} from "./util/apiUtil"
import {appendChildren, createElement} from "./util/domUtil"
import {formatSearchString} from "./util/stringUtil"
import {createList } from "./util/list"

const app = document.getElementById('app')

const title = createElement('h1', { text: 'Repo Finder' })

const container = createElement('div')
const searchInput = createElement('input', { id: 'searchInput', type: 'text' })
const searchButton = createElement('button', { id: 'searchButton', text: 'Search' })

appendChildren(container, [ searchInput, searchButton])
appendChildren(app, [ title, container ])

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value

  if(searchTerm) {
    searchRepositories(formatSearchString(searchTerm))
      .then((repos) => {
        if(repos && repos.length) {
          const list = createList(repos)
          app.appendChild(list)
        }
      })
  }
})
