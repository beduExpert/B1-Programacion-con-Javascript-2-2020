[`Programación con JavaScript`](../Readme.md) > `Sesión 03`

---

# Sesión 3: ECMAScript 6 - Segunda parte

## Objetivos

Simplificar el código con la nueva sintaxis para crear funciones

---

## Tabla de Contenidos

- **[Arrow functions](#arrow-functions)**

- **[Default parameters](#default-parameters)**

- **[Rest parameter](#rest-parameter)**

---

## Arrow functions

Las funciones de flecha o arrow functions es otra de las novedades de esta versión de JavaScript. Presentan una 
sintaxis más concisa comparada con las funciones normales, también cuentas con `returns` implícitos y no cambian el 
valor de `this`.

Antes de ver la sintaxis y cómo usar arrow functions veamos un ejemplo de un caso de uso de funciones normales.
Tenemos un arreglo `firstNames`.

```javascript
const firstNames = [ 'John', 'Jane', 'Mark'];
```

A cada nombre le vamos a agregar el apellido `Doe` y crear un nuevo arreglo `fullNames`. Una forma de hacerlo es con
un `map` y aprovechar la flexibilidad de los template strings.

```javascript
const firstNames = [ 'John', 'Jane', 'Mark'];

const fullNames = firstNames.map(function(name) {
  return `${name} Doe`;
});

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]
```

Ahora veamos cómo reescribir la función que recibe `map` como argumento y usar arrow function.

### Sintaxis

Para escribir arrow functions solo necesitamos eliminar el keyword `function` y agregar lo que se conoce como _fat 
arrow_ (`=>`) después de los parámetros de la función.

```javascript
const firstNames = [ 'John', 'Jane', 'Mark'];

const fullNames = firstNames.map((name) => {
  return `${name} Doe`;
});

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]
```

La funcionalidad es exactamente la misma al ejemplo de más arriba.

### Paréntesis

La sintaxis de los arrow functions puede ser simplificada todavía más. Cuando solamente tenemos un parámetro en la
función podemos eliminar los paréntesis.

```javascript
const firstNames = [ 'John', 'Jane', 'Mark'];

const fullNames = firstNames.map(name => {
  return `${name} Doe`;
});

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]
```

Esta es una cuestión de estilo pues hay quienes prefieren siempre incluir los paréntesis aunque sea un solo parámetro.

### Return implícito

Cuando escribimos `return` estamos definiendo explícitamente lo que debe retornar la función. Muchas veces las funciones
solo retornan un valor sin hacer alguna otra operación antes. Cuando este es el caso podemos omitir el `return` pues el
arrow function asume que se va a retornar lo que sigue después del fat arrow.

```javascript
const firstNames = [ 'John', 'Jane', 'Mark'];

const fullNames = firstNames.map(name => `${name} Doe`);

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]
```

De esta manera podemos colocar todo en una sola línea, además de eliminar el `return` también debemos eliminar las
llaves (ya que estos definen un bloque de líneas). No es necesario definir que queremos retornar `${name} Doe`, esto
queda implícito.

### Funciones anónimas 

Si usamos este tipo de funciones no podemos asignarle un nombre ya que los arrow functions son funciones anónimas. 
La forma más común de uso es asignar estas funciones a variables que sí podemos nombrar.

```javascript
const logName = name => console.log(`Hello ${name}!`);

logName('John Doe'); // Hello John Doe!
```

---

## Default parameters

...

---

## Rest parameter

...

---
