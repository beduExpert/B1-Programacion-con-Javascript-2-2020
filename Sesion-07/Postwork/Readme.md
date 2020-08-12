[`Programación con JavaScript`](../../Readme.md) > [`Sesión 07`](../Readme.md) > `Postwork`

---

## Postwork

### Objetivos

Utilizar loaders para procesar imágenes con webpack.

### Desarrollo

Babel contiene un módulo `@babel/polyfill` el cual incluye `core-js` y `regenerator-runtime` para emular un ambiente 
ES2015+. Esto significa que se pueden usar nuevos _built-ins_ como `Promise` o `WeakMap`, métodos estáticos como 
`Array.from` o `Object.assign`, métodos de instancia como `Array.prototype.includes`, entre otras características. 
Este polyfill se agrega tanto al scope global como los prototype nativos (como `String`) para poder trabajar.

A partir de la versión 7.4.0 de Babel este módulo ha sido deprecado o descontinuado, para seguir obteniendo los mismos
beneficios podemos seguir usando ambas librerias directamente.

```
npm install --save-dev core-js regenerator-runtime
```

En vez de configurar `@babel/polyfill` sólo debemos importar las librerías de la siguiente forma:

```javascript
import "core-js/stable";
import "regenerator-runtime/runtime";
```

Si intentaste trabajar con generators o funciones async seguramente te habrás dado cuenta que Babel estaba teniendo 
problemas para compilar el código correctamente, después de instalar y usar tanto `core-js` como `regenerator-runtime`
no deberías de tener problemas de nuevo.
 
---

### Ejercicios

Con esto puedes configurar Babel en el proyecto para seguir usando ES6+. Puedes revisar el 
[ejemplo 2](../Ejemplo-02/Readme.md) nuevamente para configurar Babel junto con Webpack. Instalando `@babel/preset-env`
 `babel-loader` junto con `core-js` y `regenerator-runtime` debería ser suficiente para el proyecto. De todas formas
 puedes consultar la documentación en caso que quieras revisar otros [plugins](https://babeljs.io/docs/en/plugins) y/o
 [presets](https://babeljs.io/docs/en/presets) que están disponibles.
 
