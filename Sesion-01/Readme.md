[`Programación con JavaScript`](../Readme.md) > `Sesión 01`

---

# Sesión 1: Entendiendo el _scope_ y _this_

## Objetivos

Diferenciar scope global de local y cómo this cambia dependiendo del execution context

---

## Tabla de Contenidos

- **[¿Qué es scope?](#qué-es-scope)**

- **[Scope global](#scope-global)**

- **[Scope local](#scope-local)**

  - [Ejemplo 1: Sentencias de bloque](./Ejemplo-01)

- **[Execution context](#execution-context)**

- **[¿Cuál es el valor de `this`?](#cuál-es-el-valor-de-this)**

  - [Ejemplo 2: `this` como método](./Ejemplo-02)

- **[`this` en nuevas instancias](#this-en-nuevas-instancias)**
  
  - [Ejemplo 3: ](./Ejemplo-03)

  - [Reto 1: ](./Reto-01)

- **[Postwork](./Postwork)**

---

## ¿Qué es scope?

Scope es la accesibilidad que tienen las variables, funciones y objetos en partes específicas del 
código durante el tiempo de ejecución. En otras palabras, el scope determina la visibilidad de las 
variables en áreas del código.

JavaScript cuenta con dos tipos de scope: global y local. Las variables dentro de una función se 
encuentran en un scope local, aquellas definidas fuera de una función están en un scope global.

---

## Scope global

Al momento de empezar a escribir en un documento de JavaScript ya estás en un scope global y solamente 
existe uno todo el documento. Todas las variables que estén definidas fuera de una función
se encuentran en el scope global. Esto significa que se puede acceder a dichas variables e incluso 
modificarlas desde cualquier otra parte del código, incluso dentro de una función.

```javascript
var name = "John Doe";

console.log(name); // "John Doe"

function foo() {
  console.log(name); 
}

foo(); // "John Doe"
```

---

## Scope local

Las variables definidas dentro de una función se encuentran en un scope local, esto significa que
solo se puede acceder a ellas dentro de la función donde se definió la variable. Esto te permite tener
variables con el mismo nombre en distintas funciones, cada una de esas variables estará ligada a su 
respectiva función.

```javascript
function foo() {
  var name = "John Doe";
  console.log(name); 
}

foo(); // "John Doe"

console.log(name); // Uncaught ReferenceError: name is not defined
```

Sentencias de control de flujo y bucles como `if/else`, `switch`, `for` o `while` no crean un nuevo
scope como lo hacen las funciones. Cualquier variable declarada dentro de estos bloques tendrá el mismo 
scope donde se declaró la sentencia.

#### [Ejemplo 1: Sentencias de bloque](./Ejemplo-01)

---

## Execution context

El ambiente en el cual cada línea de código es ejecutada se conoce como Execution Context. Cada vez que se llama
o ejecuta una nueva función, JavaScript crea un nuevo execution context, estos se van apilando en lo que se conoce
como Execution Stack.

![Execution Context](./assets/execution-context.png)

Todas las variables y declaraciones de funciones por default forman parte del Global Execution Context, como es el caso
de `name`, `first`, `second`, y `third`. Al momento de ejecutar `first()` se crea un nuevo execution context encima 
del global, después de crear `var a` en este nuevo contexto se ejecuta `second()` y el proceso se repite. El contexto
que esté hasta arriba en la pila es el que se está ejecutando en el momento, una vez que la ejecución finalice se elimina
de la pila y se procede a ejecutar el que sigue, así hasta terminar.

Para evitar confusiones, el scope se refiere a la visibilidad de variables mientras que el contexto se refiere al valor
de `this`. Es decir, conforme cambia el execution context también lo hace el objeto `this`.

---

## ¿Cuál es el valor de `this`?

Ya mencionamos que la ejecución de un execution context por default es global. Esto significa que `this` por default
está haciendo referencia a un objeto global.

En un navegador o browser este objeto global es `window`.

![This in browser](./assets/this-browser.png)

Mientras que en un ambiente de Node.js `this` hace referencia al objeto `global`.

![This in Node.js](./assets/this-node.png)

#### [Ejemplo 2: `this` como método](./Ejemplo-02)

---

## `this` en nuevas instancias

Los function constructor nos permiten definir las propiedades de un objeto que _podría existir eventualmente_.
El constructor en sí no es un objeto. Cuando usamos el keyword `new` dicho constructor nos retorna un objeto
(instancia). En este caso `this` hace referencia al objeto instanciado.

```javascript
var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  
  this.logName = function() {
    console.log("Name: " + this.firstName + " " + this.lastName);
  }
}

var john = new Person("John", "Doe");
john.logName(); // Name: John Doe

var jane = new Person("Jane", "Doe");
jane.logName(); // Name: Jane Doe
```

Tenemos dos instancias de `Person` y en ambos casos `this` hace referencia a cosas distintas pese a que vienen
del mismo constructor. En el caso de `john.logName`, `this` hace referencia a `john`, un instancia de `Person` pero
que es una instancia diferente a `jane`, por lo `jane.logName` también hace referencia al objeto que lo contiene,
es decir, `jane`.

#### [Ejemplo 3: ](./Ejemplo-03)

#### [Reto 1: ](./Reto-01)

#### [Postwork](./Postwork)
