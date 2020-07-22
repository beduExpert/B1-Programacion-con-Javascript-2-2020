[`Programación con JavaScript`](../../Readme.md) > [`Sesión 08`](../Readme.md) > `Reto 01`

---

## Reto 1: Orden ascendente

### Objetivos

Implementar Test Driven Development en la solución de problemas con programación

#### Requisitos

`N/A`

#### Desarrollo

Implementando la metodología TDD crear una función que nos permita determinar si un arreglo de enteros se encuentra en 
orden ascendente. La función retorna un booleano por lo que es necesario crear tests para ambos casos.

<details>
  <summary>Solución</summary>

```javascript
// Tests
describe('isArrayInAscOrder function', () => {
  test('returns true if array is in ascending order', () => {
    expect(isArrayInAscOrder([1, 2, 3, 4, 5])).toBe(true);
  })

  test('returns false if array is not in ascending order', () => {
    expect(isArrayInAscOrder([1, 3, 4, 2, 5])).toBe(false);
  })
})

// Code
export const isArrayInAscOrder = (array) =>
  array.every((number, index) =>
    (index ? number >= array[index - 1] : true))
```

</details>
