[`Programación con JavaScript`](../../Readme.md) > [`Sesión 04`](../Readme.md) > `Postwork`

---

## Postwork

### Objetivos

Implementar correctamente callbacks, promesas y async/await evitando un anti patrón.

### Desarrollo

Trabajar con promesas puede ser algo complicado cuando es la primera vez que estamos implementando programación 
asíncrona, incluso cuando pensamos que ya dominamos el tema y vemos las promesas como algo sencillo es muy común caer
en errores que no percibimos a la primera. Veamos un ejemplo.
 
```javascript
function getSomethingCool(param) {
  return new Promise((resolve, reject) => {
    getStuffDone(param)
      .then((value) => {
        // Some operations with value
        resolve(value);
      })
      .catch(error => {
        reject(error);
      })
  })
}
```

A simple vista todo parece correcto e incluso puede que funcione como esperemos. A esto se le conoce como un anti 
patrón, el problema con `getSomethingCool` está en la promesa dentro del constructor `Promise`. Si `getSuffDone` llega
a lanzar una excepción el error pasa desapercibido en lugar de propagarse a la siguiente promesa, como resultado nos
quedamos con una promesa en estado _pending_ de manera indefinida.  

```javascript
function getSomethingCool(param) {
  return getStuffDone(param)
    .then((value) => {
      // Some operations with value
      return value;
    })
    .catch(error => {
      console.log(error);
    })
}
```

Las promesas además de encadenarse con `.then` se pueden retornar directamente, por lo que podemos reescribir la función
para no usar `new Promise` y así propagar los errores de manera correcta. El mismo error se puede cometer trabajando con
async/await.

```javascript
function foo() { throw 'some weird error' }

function getSomethingCool(param) {
  return new Promise(async (resolve) => {
    const value = await foo(param)
    resolve(value)
  })
}

(async () => {
  await getSomethingCool()
})().catch(e => console.log(e)); // Uncaught Error
```

Cualquier excepción dentro de una función async rechaza la promesa implícita que retorna la misma función, por lo que
igual que en el caso anterior nos quedamos con una promesa en estado _pending_. El hecho de agregar `async` a una 
función nos dice que dicha función retornará una promesa. Una mejor forma de escribir la función anterior sería la
siguiente:

```javascript
function foo() { throw 'some weird error' }

async function getSomethingCool(param) {
  await foo(param)
}

(async () => {
  await getSomethingCool()
})().catch(e => console.log(e)); // some weird error
```

---

### Ejercicios

#### Asynchronous Output

Completar la función `triggerActions` que pasa un callback a `processAction` para producir el siguiente resultado:

```javascript
"Processed Action 1"
"Processed Action 2"
"Processed Action 3"
...
"Processed Action n"
```

Se debe mostrar el mensaje _n_ cantidad de veces, determinado por `triggerActions`. Tomar en cuenta que no se debe 
modificar la función `processAction`.

```javascript
// Don't alter this function
const processAction = (i, callback) => {
  setTimeout(function() {
    callback("Processed Action " + i);
  }, Math.random()*1000);
}

const triggerActions = (count) => {
  // Code goes here
}
```

<details>
  <summary>Solución</summary>

> Tomar esta solución como referencia. Existen múltiples formas de resolver el problema.

```javascript
const processAction = (i, callback) => {
  setTimeout(function() {
    callback("Processed Action " + i);
  }, Math.random()*1000);
}

const triggerActions = (count) => {
  const promises = [];
  const generatePromise = (i) => {
    return new Promise((resolve) => {
      processAction(i, resolve);
    });
  }
  for (let i = 1; i <= count; i += 1) {
    promises.push(generatePromise(i));
  }
  Promise.all(promises)
    .then((strings) => 
      strings.forEach((string) => console.log(string)));
}

triggerActions(10);
```

</details>
