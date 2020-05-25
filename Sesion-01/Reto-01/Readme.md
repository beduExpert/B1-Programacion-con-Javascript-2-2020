[`Programación con JavaScript`](../../Readme.md) > [`Sesión 01`](../Readme.md) > `Reto 01`

---

## Reto 1: Custom logger

### Objetivos

Implementar el método `bind` para cambiar el contexto de `this`

#### Requisitos

`N/A`

#### Desarrollo

El siguiente objeto nos permite agregar un nombre antes de mostrar en consola algún mensaje. Una buena opción
cuando queremos saber en qué parte de nuestra aplicación se encuentra ese `log`.

```javascript
var logger = {
  name: "Logger Helper",
  log: function(message) {
    console.log(this.name + ":", message);
  }
};

logger.log("Hello World!"); // Logger Helper: Hello World!
```

Usando el mismo método `logger.log()` mostrar en consola un arreglo de mensajes.

<details>
  <summary>Solución</summary>

```javascript
var messages = ["First log", "Second log", "Third log"];

// Sin implementar el método bind
messages.forEach(function(message) {
  logger.log(message);
});

// Implementando el método bind
messages.forEach(logger.log.bind(logger));
```

</details>
