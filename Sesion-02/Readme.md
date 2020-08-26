[`Programación con JavaScript`](../Readme.md) > `Sesión 02`

---

# Sesión 2: Introducción a ECMAScript 6

🎯 **Objetivos:**

+ Implementar las nuevas características de JavaScript en la creación y asignación de variables

---

## 💻 Tabla de Contenidos

- **[¿Qué es ECMAScript 6?](#qué-es-ecmascript-6)**

- **[`let` y `const`](#let-y-const)**

- **[Template strings](#template-strings)**

    - [Ejemplo 1: Strings en ES6](./Ejemplo-01/Readme.md)

- **[Spread operator](#spread-operator)**

    - [Copiar iterables](#copiar-iterables)
    
    - [Ejemplo 2: Copiar arreglos y objetos](./Ejemplo-02/Readme.md)
    
    - [Unir iterables](#unir-iterables)

- **[Destructuring](#destructuring)**

    - [Reto 1: Intercambiar variables](./Reto-01/Readme.md)

    - [Ejemplo 3: Object destructuring](./Ejemplo-03/Readme.md)
    
    - [Reto 2: Objetos anidados](./Reto-02/Readme.md)
    
- **[Postwork](./Postwork/Readme.md)**

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

`let` a diferencia de `var` tiene un scope de bloque, es decir, las variables creadas con `let` solo son accesibles 
dentro del bloque en el que fueron declaradas.

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

Esta es otra diferencia entre `let` y `var`. Si se trata de acceder a una variable con `let` antes de ser declarada 
obtenemos un `ReferenceError` en lugar de `undefined`.

```javascript
console.log(name); // ReferenceError: name is not defined

let name = "John Doe";
```

`const` es muy similar a `let`, la única diferencia es que una vez asignado un valor a una variable ya no se puede 
reasignar.

```javascript
let name = 'John Doe';
const email = 'john@doe.com';

name = 'Jane Doe';
email = 'jane@doe.com'; // TypeError: Assignment to constant variable.
```

Algo muy importante es que declarar una variable con `const` no significa que esta sea inmutable, simplemente no se 
puede reasignar.

```javascript
const person = {
  name: 'John Doe'
};

person.name = 'Jane Doe';

person = {}; // TypeError: Assignment to constant variable.
```

Declarar un objeto con `const` no significa que no podamos cambiar sus propiedades, lo que no podemos hacer es 
asignarle un nuevo valor.

---

## Template Strings

Las plantillas de texto o template strings, son cadenas de texto que permiten interpolación mediante expresiones. Hacen 
mucho más fácil crear textos en los que necesitamos integrar variables o expresiones. La sintaxis consta de dos partes,
la primera es para delimitar la cadena de texto, se usan comillas invertidas. La segunda parte es para agregar
placeholders mediante el uso del signo de dólar y llaves.

```javascript
const msg = `Hello World!`;

console.log(msg); // Hello World
```

#### 🕵 [Ejemplo 1: Strings en ES6](./Ejemplo-01/Readme.md)

---

## Spread operator

El operador de propagación o spread operator hace más fácil trabajar con iterables como arreglos y objetos. La sintaxis
de este operador es `...` y se coloca justo antes de la variable.

### Copiar iterables

Uno de los usos más comunes de este operador es duplicar arreglos. Después de declarar el nombre de la variable usamos
corchetes para asignar un nuevo arreglo y dentro colocamos el spread operator para obtener todos los elementos del 
arreglo que queremos copiar.

```javascript
const colors = ['blue', 'red', 'yellow'];
const copyOfColors = [ ...colors ];

console.log(copyOfColors); // ['blue', 'red', 'yellow']
```

En el caso de objetos es casi lo mismo, la única diferencia es el uso de llaves en lugar de corchetes.

```javascript
const book = {
  author: 'Marijn Haverbeke',
  title: 'Eloquent JavaScript',
  year: 2018
};
const copyOfBook = { ...book };

console.log(copyOfBook); 
// { author: "Marijn Haverbeke", title: "Eloquent JavaScript", year: 2018 }
```

#### 🕵 [Ejemplo 2: Copiar arreglos y objetos](./Ejemplo-02/Readme.md)

### Unir iterables

También podemos usar el spread operator para concatenar arreglos.

```javascript
const oneToThree = [1, 2, 3];
const fourToSix = [4, 5, 6];
const oneToSix = [ ...oneToThree, ...fourToSix ]

console.log(oneToSix); // [1, 2, 3, 4, 5, 6]
```

Ahora `oneToSix` contiene todos los elementos de `oneToThree` y `fourToSix`. Además de concatenar arreglos podemos
usarlo para agregar nuevos elementos en un arreglo. 

```javascript
const oneToThree = [1, 2, 3];
const oneToSix = [ ...oneToThree, 4, 5, 6 ]

console.log(oneToSix); // [1, 2, 3, 4, 5, 6]
```

Hay que tomar en cuenta que la posición donde se coloque el spread afecta el orden de los elementos en el arreglo.

```javascript
const oneToThree = [1, 2, 3];
const oneToSix = [ 4, 5, 6, ...oneToThree ]

console.log(oneToSix); // [4, 5, 6, 1, 2, 3]
```

Es muy similar en el caso de objetos.

```javascript
const formalGreetings = {
  english: 'Hello',
  french: 'Bonjour',
};
const informalGreetings = {
  russian: 'Privet',
  portuguese: 'Oi'
}

const greetings = { ...formalGreetings, ...informalGreetings }

console.log(greetings); 
// { english: "Hello", french: "Bonjour", russian: "Privet", portuguese: "Oi" }
```

En el caso de tener propiedades duplicadas se sobrescriben.

```javascript
const formalGreetings = {
  english: 'Hello',
  french: 'Bonjour',
};
const informalGreetings = {
  russian: 'Privet',
  portuguese: 'Oi'
}

const greetings = { 
  ...formalGreetings, 
  ...informalGreetings,
  english: 'Hi' 
}

console.log(greetings); 
// { english: "Hi", french: "Bonjour", russian: "Privet", portuguese: "Oi" }
```

Así como en los arreglos la posición del spread operator afecta el orden de los elementos, en los objetos el orden
del spread operator determina qué propiedad se sobrescribe.

```javascript
const formalGreetings = {
  english: 'Hello',
  french: 'Bonjour',
};
const informalGreetings = {
  russian: 'Privet',
  portuguese: 'Oi'
}

const greetings = { 
  english: 'Hi', 
  ...formalGreetings, 
  ...informalGreetings
}

console.log(greetings); 
// { english: "Hello", french: "Bonjour", russian: "Privet", portuguese: "Oi" }
```

---

## Destructuring

Destructuring es extraer valores o propiedades de un arreglo u objeto. 

```javascript
const colors = [ 'Red', 'Blue', 'Yellow' ]

const [ red, blue, yellow ] = colors;

console.log(red); // Red
console.log(blue); // Blue
console.log(yellow); // Yellow
```

En este ejemplo estamos creando 3 variables (`red`, `blue` y `yellow`) y asignando los valores del arreglo `colors`.
Esta asignación se hace en base al index del arreglo.

#### 💻 [Reto 1: Intercambiar variables](./Reto-01/Readme.md)

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  country: 'Unknown'
};

const firstName = person.firstName;
const lastName = person.lastName;

console.log(firstName, lastName); // John Doe
```

Este es un caso muy común. En ocasiones queremos crear variables a partir de propiedades de un objeto. Podemos lograr
lo mismo en una sola línea.

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  country: 'Unknown'
};

const { firstName, lastName } = person;

console.log(firstName, lastName); // John Doe
```

Las llaves del lado izquierdo del `=` no son un objeto. Esta es la sintaxis de object destructuring. Estamos creando dos
nuevas variables `firstName` y `lastName`, después estamos extrayendo dos propiedades de `person` con el mismo nombre de
las variables, el valor de esas propiedades es el que se asigna a las variables creadas.

#### 🕵 [Ejemplo 3: Object destructuring](./Ejemplo-03/Readme.md)

#### 💻 [Reto 2: Objetos anidados](./Reto-02/Readme.md)

#### 🛡 [Postwork](./Postwork/Readme.md)
