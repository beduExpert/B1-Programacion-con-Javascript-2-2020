[`Programación con JavaScript`](../Readme.md) > `Sesión 04`

---

# Sesión 4: Programación Asíncrona

🎯 **Objetivos:**

Realizar operaciones de manera asíncrona y distinguir entre las distintas opciones que proporciona JS

---

## 💻 Tabla de Contenidos

- **[Asincronía](#asincronía)**

- **[Callbacks](#callbacks)**

    - [Ejemplo 1: Callback hell](./Ejemplo-01/Readme.md)

- **[Promesas](#promesas)**
    
    - [Ejemplo 2: Cadena de promesas](./Ejemplo-02/Readme.md)

    - [Reto 1: Creando Promise.all](./Reto-01/Readme.md)

- **[Async/await](#asyncawait)**

    - [Reto 2: Llamar función async](./Reto-02/Readme.md)

- **[Postwork](./Postwork/Readme.md)**

---

## Asincronía

En un ambiente síncrono solo podemos tener una tarea o proceso ejecutándose a la vez y debemos esperar a que termine 
para ejecutar el siguiente proceso. Digamos que queremos obtener información de dos fuentes distintas, por ejemplo leer
el disco duro y obtener un recurso a través de la red, una vez que tenemos los resultados los combinamos antes de seguir
con cualquier otro proceso. Esto significa que debemos hacer una operación primero, esperar a que termine e iniciar la
segunda operación. La desventaja es que el tiempo total será la suma del tiempo de respuesta de ambas operaciones, 
además que bloqueamos cualquier otro proceso.

En un sistema síncrono la solución a este problema sería iniciar otro _thread_. Un thread es un programa corriendo cuya
ejecución se puede intercalar con otros programas del sistema operativo, esto es posible porque la mayoría de 
computadoras modernas cuentan con múltiples procesadores. En otras palabras, podemos iniciar las dos tareas en 
procesadores distintos, una vez que ambos terminan se sincronizan para combinar los resultados.

JavaScript es un lenguaje de programación de un solo thread, es decir, no podemos usar varios procesadores. El motor de 
JavaScript solo puede procesar una sentencia a la vez en un único thread. Si estamos haciendo una operación como las 
descritas anteriormente nuestro thread principal se bloquea hasta que dicha operación termine. En términos del browser, 
esto significa que la página web deja de responder hasta que la tarea finalice. 

Aquí es donde JavaScript asíncrono entra en juego. Mediante el uso de callbacks, promesas y async/await podemos realizar
operaciones con largos tiempos de respuesta sin bloquear el thread principal. 

---

## Callbacks

Un callback es una función que se pasa como argumento a otra función para que sea ejecutada al final de algún proceso.
Por ejemplo la función `setTimeout` vista en la sesión anterior. Esta función espera cierta cantidad de milisegundos 
antes de ejecutar la función que recibe como argumento.

```javascript
setTimeout(() => console.log('Hello World'), 1000);
```

El callback también puede ser asignado a una variable para pasarlo a `setTimeout`.

```javascript
const callback = () => console.log('Hello World');
 
setTimeout(callback, 1000);
```

En resumen, `setTimeout` retrasa la ejecución de la función callback como mínimo la cantidad especificada de tiempo en
milisegundos. Asignar un tiempo de 0ms no significa que el callback se ejecuta de manera inmediata.

```javascript
const callback = () => console.log('World');
 
setTimeout(callback, 0);

console.log('Hello');
``` 

#### 🕵 [Ejemplo 1: Callback hell](./Ejemplo-01/Readme.md)

---

## Promesas

Una promesa es una acción asíncrona que podría cumplirse en algún momento y producir un valor. En cierta forma es igual 
a los callbacks pero con una mejor sintaxis que facilita la legibilidad.

Para crear promesas usamos el constructor `Promise` el cual espera una función como argumento (se ejecuta de inmediato)
que a su vez recibe una función usada para resolver la promesa.

```javascript
function foo() {
  return new Promise((resolve) => {
    // Async operations...
    resolve(value);
  })
}
```

Podemos obtener el resultado de una promesa usando el método `then`, este registra una función callback para ser llamada
cuando la promesa se resuelve y produce un valor.

```javascript
function foo() {
  return new Promise((resolve) => {
    // Async operations...
    resolve(value);
  })
}

foo().then(value => console.log(value)); // value created in foo()
```

En ocasiones las operaciones asíncronas pueden llegar a fallar. Para manejar esto podemos usar el método `catch` el cual
registra un callback a ejecutar cuando una promesa no se resuelve, similar a la forma en que trabaja `then`. Cuando una
promesa es rechazada la promesa que produce `then` también es rechazada, esto significa que si tenemos una cadena de
acciones asíncronas y uno de los pasos llega a fallar, toda la cadena se rechaza.

```javascript
foo()
  .then(value => console.log(value)) // if promise is rejected we skip this
  .catch(error => console.log(error)) // error produced in foo()
```

La función que pasamos como argumento al constructor `Promise` recibe un segundo argumento que podemos utilizar para
rechazar una promesa.

```javascript
function foo() {
  return new Promise((resolve, reject) => {
    // Async operations...
    reject(new Error('Process Failed'));
  })
}

foo()
  .then(value => console.log(value))
  .catch(error => console.log(error)); // error produced in foo()
```

#### 🕵 [Ejemplo 2: Cadena de promesas](./Ejemplo-02/Readme.md)

#### 💻 [Reto 1: Creando Promise.all](./Reto-01/Readme.md)

---

## Async/await 

Anteriormente vimos varias de las características de ES6, `async/await` es una de ellas. La finalidad de este tipo de 
funciones es simplificar el comportamiento y uso de promesas.

Al colocar el keyword `async` en la declaración de una función, estamos definiendo una función asíncrona. Esta función
siempre retornará una promesa, esto significa que si el valor retornado no es una promesa automáticamente se envuelve
dentro de una.

```javascript
async function foo() {
  return 'Hello World';
}

foo().then(value => console.log(value)) // Hello World 
```

Claro que también podemos retornar explícitamente una promesa y el resultado será el mismo.

```javascript
async function foo() {
  return Promise.resolve('Hello World');
}

foo().then(value => console.log(value)) // Hello World 
```

El keyword `await` solo puede ser usado dentro de funciones `async` nos permite esperar hasta que una promesa sea
resuelta y retorne un valor.

```javascript
function foo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Hello World'), 1000)
  })
}

async function bar() {
  let result = await foo()
  
  console.log(result)
}

bar()
```

La función pausa su ejecución cuando encuentra un `await` y continua una vez que la promesa haya sido resuelta. Debemos
envolver esta operación en un `try...catch` en caso que la promesa sea rechazada.

```javascript
function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('Failed'), 1000)
  })
}

async function bar() {
  try {
    let result = await foo()
  } catch (e) {
    console.log(e)  
  }
}

bar()
```

#### 💻 [Reto 2:  Llamar función async](./Reto-02/Readme.md)

#### 🛡 [Postwork](./Postwork/Readme.md)
