import {appendChildren, createElement} from "./domUtil"

export function createList(items) {
  const list = new DocumentFragment()

  for (const item of items) {
    list.appendChild(createListItem(item))
  }

  return list
}

function createListItem(item) {
  const { full_name: name, html_url: url, description, language } = item

  const card = createElement('div', { className: 'card'})
  const link = createElement('a', { href: url, target: '_blank', text: name })
  const p = createElement('p', { text: description })
  const span = createElement('span', { text: language })
  appendChildren(card, [ link, p, span ])

  return card
}
