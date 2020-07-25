/**
 * Helper function to create a DOM node.
 * @param type - String containing valid DOM element
 * @param attrs - Object like {
 *   text: String - This is added as a TextNode
 *   child: Node - This is added to the newly created element
 *   ... anything else is added as a attribute of the element
 * }
 * @returns {*}
 */
export function createElement(type, attrs = {}) {
  const element = document.createElement(type)

  const keys = Object.keys(attrs)

  if(keys.length) {
    for(const key of keys) {
      switch (key) {
        case 'child':
          element.appendChild(attrs[key])
          break
        case 'text':
          const text = document.createTextNode(attrs[key]);
          element.appendChild(text);
          break
        default:
          element[key] = attrs[key]
          break;
      }
    }
  }

  return element;
}

/**
 * Helper function to append multiple nodes as children of a parent node
 * @param element - Parent node
 * @param children - Array of nodes to append
 */
export function appendChildren(element, children) {
  for(const child of children) {
    element.appendChild(child)
  }
}
