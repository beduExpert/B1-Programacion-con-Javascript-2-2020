[`Programación con JavaScript`](../../Readme.md) > [`Sesión 03`](../Readme.md) > `Reto 01`

---

## Reto 2: Encontrar elementos faltantes

### Objetivos

Implementar ciclos o funciones de alto orden para producir un arreglo con los elementos faltantes de otro

#### Requisitos

`N/A`

#### Desarrollo

Escribir una función que reciba un arreglo de _n_ cantidad de enteros positivos que pueden no estar ordenados. La
función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo.

```javascript
findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]
```

<details>
  <summary>Solución</summary>

```javascript
// for loop
function findMissingNumbers(numbers) {
  const sortedArray = numbers.sort((a, b) => a - b)
  let missing = []
  for (let i = numbers[0]; i < numbers[sortedArray.length - 1]; i++) {
    if (sortedArray.indexOf(i) < 0) {
      missing.push(i);
    }
  }
  return missing
}

// Higher order functions
const findMissingNumbers = (numbers) => (
  Array.from(Array(Math.max(...numbers)).keys()) // Create an array from 0 to the max number in array - 1
    .map((n, i) => numbers.indexOf(i) < 0 && i) // If number does not exist in array return false
	.filter(x => x)); // Removes falsy values
```

</details>
