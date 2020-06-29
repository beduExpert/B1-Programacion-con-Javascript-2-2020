[`Programación con JavaScript`](../Readme.md) > `Sesión 06`

---

# Sesión 6: Webpack

## Objetivos

Procesar aplicaciones modernas de JavaScript con Webpack para producir uno o más bundles

---

## Tabla de Contenidos

- **[ES6 Modules](#es6-modules)**

- **[Webpack](#webpack)**
    
---

## ES6 Modules

En JavaScript, un módulo es una unidad independiente de código que puede ser reutilizado. Los módulos permiten exponer
ciertas partes del código que serán usadas por otros módulos. Esto nos da la flexibilidad suficiente para mantener 
nuestro código mejor organizado en múltiples scripts. Dada la siguiente estructura:

```
app/
  |- app.js
  |- helpers.js
```

En `helpers.js` podemos tener algunas funciones que podrán ser usadas en otras partes del código:

```javascript
const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;
```

Podemos exportar cada módulo de manera independiente usando el keyword `export`.

```javascript
export const sum = (a, b) => a + b;

export const multiply = (a, b) => a * b;
```

O bien en una sola sentencia.

```javascript
const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

export { sum, multiply }
```

Para usar estas funciones en `app.js` usamos el keyword `import` junto con `from` para definir la ruta del archivo.

```javascript
import { sum, multiply } from './helpers.js'

console.log(sum(3, 2)); // 5

console.log(multiply(3, 2)); // 6
```

---

## Webpack

![Webpack](./assets/webpack.png)

Webpack es una herramienta muy usada en el desarrollo de aplicaciones en JavaScript modernas. Después de procesar la
aplicación, webpack genera internamente un grafo de dependencias lo que le permite generar uno o más _bundles_. Este
_bundle_ contiene el código optimizado de todos los módulos y dependencias de tu aplicación.

Algunos navegadores no soportan la nueva sintaxis de ES6 como `import` y `export` para el uso de módulos. Detrás de 
escenas, Webpack transpila el código para que el uso de módulos sea soportado en todos los navegadores. Es importante
tomar en cuenta que Webpack solo modifica sentencias `import` y `export`, para hacer uso de cualquier otra característica
de ES6 es necesario usar un transpilador como Babel.
