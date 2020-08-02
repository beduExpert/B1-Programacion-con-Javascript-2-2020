[`Programación con JavaScript`](../../Readme.md) > [`Sesión 02`](../Readme.md) > `Postwork`

---

## Postwork

### Objetivos

Implementar _for...of_ sobre iterables.

### Desarrollo

Cuando trabajamos con arreglos lo más seguro es que debemos realizar alguna operación donde tengamos que recorrer cada 
elemento de dicho arreglo. Para esto lo más probable es que decidamos utilizar un bucle `for`, por ejemplo, si queremos 
mostrar en consola todos los elementos de un arreglo.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

En ocasiones no queremos o no necesitamos un contador cuando solo deseamos ejecutar una función por cada elemento del 
arreglo. Para estos casos otra alternativa es usar el método `forEach`, el cual hace justo eso, ejecutar una función 
por cada elemento del arreglo.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});
```

Una desventaja de usar `forEach` es que no podemos implementar `break` o `continue` para saltarnos una iteración o 
salir del bucle. Tomando el mismo ejemplo anterior, si queremos saltarnos el número 3 lo podemos hacer de la siguiente 
manera:

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] === 3) continue;
  console.log(numbers[i]);
}
```

ES6 introduce la sentencia _for...of_, esta es una combinación entre `for` y `forEach` ya que nos permite ejecutar un 
bloque de código para cada elemento de un _objeto iterable_. Es decir, funciona con arreglos, strings y otros objetos 
similares a un arreglo como `NodeList`. Similar a `forEach`, en cada iteración se crea una variable que corresponde al 
elemento del arreglo por lo que no necesitamos hacer algo como `numbers[i]`.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
```

También podemos manipular las iteraciones con `break` o `continue`.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  if(number === 3) continue;
  console.log(number);
}
```

---

### Ejercicios

#### Suma de un rango

Crear una función `range` que recibe tres argumentos, `start`, `end` y `step`. La función debe retornar un arreglo que 
contenga todos los números desde `start` hasta `end`. El tercer argumento `step` es opcional, y nos indica el número de 
incrementos para crear el arreglo. Si no se recibe este argumento el incremento debe ser de uno en uno. `step` puede 
ser negativo, en este caso en lugar de incrementar los números el arreglo debería ir disminuyendo los números.

Por último escribir una función `sum` que reciba un arreglo de enteros y retorne la suma de todos los números.

```javascript
function range(start, end, step) {
  // Code goes here
}

function sum(array) {
  // Code goes here
}

console.log( range(1, 5) ); // [1, 2, 3, 4, 5]

console.log( range(1, 10, 2) ); // [1, 3, 5, 7, 9]

console.log( range(5, 2, -1) ); // [5, 4, 3, 2]

console.log( sum(range(1, 10)) ); // 55
```

<details>
  <summary>Solución</summary>

```javascript
function range(start, end, step) {
  if(!step) {
    step = start < end ? 1 : -1
  }

  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  
  return array;
}

function sum(array) {
  let total = 0;

  for (const element of array) {
    total += element;
  }
  
  return total;
}
```

</details>

#### Cambiar el orden de un arreglo

Los arreglos cuentan con el método `reverse` que cambia el orden de los elementos dentro del arreglo. Para este 
ejercicio debes crear dos funciones, `reverseArray` y `reverseArrayInPlace`. La primera función recibe un arreglo como 
argumento y crea un nuevo arreglo con los mismos elementos pero en el orden contrario. La segunda función es igual a la 
primera, la diferencia está en que no crea un nuevo arreglo, es decir, modifica el arreglo que está recibiendo como 
argumento.

Ninguna de las funciones debe usar el método `reverse`. Cambiar el orden del arreglo en `reverseArrayInPlace` es más 
complejo, hay que tener cuidado de no sobre escribir elementos. Claro que lo más fácil es usar `reverseArray` o crear 
una copia del arreglo pero la idea es resolverlo sin recurrir a estas soluciones.

```javascript
console.log(reverseArray(["A", "B", "C"])); // ["C", "B", "A"]

let array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);

console.log(array); // [5, 4, 3, 2, 1]
```

<details>
  <summary>Solución</summary>

```javascript
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
```

</details>
