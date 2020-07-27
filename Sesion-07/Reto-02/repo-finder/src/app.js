import {searchRepositories} from "./util/apiUtil"
import {appendChildren, createElement} from "./util/domUtil"
import {formatSearchString} from "./util/stringUtil"
import {createList } from "./util/list"
import './app.css'

const app = document.getElementById('app')

const title = createElement('h1', { text: 'Repo Finder' })

const container = createElement('div', { className: 'container' })
const searchInput = createElement('input', { id: 'searchInput', type: 'text' })
const searchButton = createElement('button', { id: 'searchButton', text: 'Search' })

const results = createElement('div', { className: 'list' })

appendChildren(container, [ searchInput, searchButton])
appendChildren(app, [ title, container, results ])

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value

  if(searchTerm) {
    searchRepositories(formatSearchString(searchTerm))
      .then((repos) => {
        if(repos && repos.length) {
          results.innerHTML = ''
          const list = createList(repos)
          results.appendChild(list)
        }
      })
  }
})
