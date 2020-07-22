[`Programación con JavaScript`](../../Readme.md) > [`Sesión 08`](../Readme.md) > `Reto 02`

---

## Reto 2: Siguiente número mayor

### Objetivos

Implementar Test Driven Development en la solución de problemas con programación

#### Requisitos

`N/A`

#### Desarrollo

Implementando la metodología TDD crear una función que reciba un número entero positivo y retorne el siguiente número 
que sea mayor y contenga los mismos dígitos.

```javascript
nextBiggerNumber( 12 ) // 21
nextBiggerNumber( 212 ) // 221
nextBiggerNumber( 3013 ) // 3031
```

Si no hay un número mayor para esos dígitos se debe retornar `-1`.

```javascript
nextBiggerNumber( 8 ) // -1
nextBiggerNumber( 111 ) // -1
nextBiggerNumber( 551 ) // -1
```

<details>
  <summary>Solución</summary>

```javascript
// Tests
describe('nextBiggerNumber function', () => {
  test('returns next bigger number with same digits', () => {
    expect(nextBiggerNumber(512)).toBe(521)
  })

  test('returns -1 if no bigger number found', () => {
    expect(nextBiggerNumber(111)).toBe(-1)
  })
})

// Code
export const nextBiggerNumber = (number) => {
  const max = Number(sortedDigits(number))

  for (let i = number + 1; i <= max; i++) {
    if (max === Number(sortedDigits(i))) return i
  }

  return -1
}

const sortedDigits = (number) =>
  String(number)
    .split('')
    .sort((a, b) => b - a)
    .join('')
```

</details>
