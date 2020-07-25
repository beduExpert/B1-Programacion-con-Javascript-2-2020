import {appendChildren, createElement} from "./domUtil"

export function createList(items) {
  const ul = createElement('ul')

  for (const item of items) {
    ul.appendChild(createListItem(item))
  }

  return ul
}

function createListItem(item) {
  const { full_name: name, html_url: url, description, language } = item

  const li = createElement('li')
  const link = createElement('a', { href: url, target: '_blank', text: name })
  const p = createElement('p', { text: description })
  const span = createElement('span', { text: language })
  appendChildren(li, [ link, p, span ])

  return li
}
