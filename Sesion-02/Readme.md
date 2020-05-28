[`Programación con JavaScript`](../Readme.md) > `Sesión 02`

---

# Sesión 2: Introducción a ECMAScript 6

## Objetivos

Implementar las nuevas características de JavaScript en la creación y asignación de variables

---

## Tabla de Contenidos

- **[¿Qué es ECMAScript 6?](#qué-es-ecmascript-6)**

- **[`let` y `const`](#let-y-const)**

- **[Template strings](#template-strings)**

- **[Spread operator](#spread-operator)**

- **[Destructuring](#destructuring)**

---

## ¿Qué es ECMAScript 6?

Ecma International es una organización sin ánimos de lucro encargada de regular el funcionamiento de
varios estándares en la industria de la computación. Así surge ECMAScript 1 (ES1) en 1997 como la primera
versión del estándar de JavaScript. Normalmente se usa el término ECMAScript para referirse al estándar
y JavaScript para hablar del lenguaje en la práctica.

En 2009 se lanzó ECMAScript 5 (ES5) con muchas mejoras de las versiones anteriores. Sin embargo, a los
navegadores les tomó varios años ser compatibles con esta versión.

En 2015 surge ECMAScript 2015, que también se le conoce como ES6 o ES2015. A partir de este año se decide
lanzar una nueva versión de manera anual cambiando el número del año en cada versión, es decir, ES2016, 
ES2017, ES2018, etc.

Actualmente la versión ES5 es compatible con todos los navegadores. La versión ES6 es compatible con 
navegadores modernos. Se puede usar la mayoría de las características de ES6 mediante un proceso de 
transpiling y polyfilling que convierte el código en ES5, garantizando así la compatibilidad del código
en navegadores viejos.

---

## `let` y `const`

ES6 introduce dos nuevas formas de crear variables con `let` y `const`. La principal diferencia entre
`var` y `let` es el scope. En la sesión anterior vimos que las sentencias de bloque no crean un scope
local.

```javascript
var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for(var i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]

console.log(i); // 5
```

`let` a diferencia de `var` tiene un scope de bloque, es decir, las variables creadas con `let` solo 
son accesibles dentro del bloque en el que fueron declaradas.

```javascript
var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for(let i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]

console.log(i); // ReferenceError: i is not defined
```

En JavaScript todas las variables son inicializadas con `undefined` al momento de su creación.

```javascript
console.log(name); // undefined

var name = "John Doe";
```

Esta es otra diferencia entre `let` y `var`. Si se trata de acceder a una variable con `let` antes de
ser declarada obtenemos un `ReferenceError` en lugar de `undefined`.

```javascript
console.log(name); // ReferenceError: name is not defined

let name = "John Doe";
```

`const` es muy similar a `let`, la única diferencia es que una vez asignado un valor a una variable ya no
se puede reasignar.

```javascript
let name = 'John Doe';
const email = 'john@doe.com';

name = 'Jane Doe';
email = 'jane@doe.com'; // TypeError: Assignment to constant variable.
```

Algo muy importante es que declarar una variable con `const` no significa que esta sea inmutable, 
simplemente no se puede reasignar.

```javascript
const person = {
  name: 'John Doe'
};

person.name = 'Jane Doe';

person = {}; // TypeError: Assignment to constant variable.
```

Declarar un objeto con `const` no significa que no podamos cambiar sus propiedades, lo que no podemos 
hacer es asignarle un nuevo valor.

---
