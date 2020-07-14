[`Programación con JavaScript`](../Readme.md) > `Sesión 06`

---

# Sesión 6: Webpack

## Objetivos

Procesar aplicaciones modernas de JavaScript con Webpack para producir uno o más bundles

---

## Tabla de Contenidos

- **[ES6 Modules](#es6-modules)**

- **[Webpack](#webpack)**

    - [Entry](#entry)
    
    - [Output](#output)
    
    - [Ejemplo 1: Instalación y configuración](./Ejemplo-01/Readme.md)
    
    - [Loaders](#loaders)
    
    - [Plugins](#plugins)
    
    - [Ejemplo 2: Webpack y CSS](./Ejemplo-02/Readme.md)
    
    - [Ejemplo 3: Webpack Dev Server](./Ejemplo-03/Readme.md)
    
    - [Reto 1: Find your GIF](./Reto-01/Readme.md)
    
    - [Reto 2: Find your GIF II](./Reto-02/Readme.md)
    
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

### Entry

El punto de entrada le dice a webpack cuál módulo debe ser usado para comenzar a crear el grafo de dependencias. Webpack
se encargará de buscar todos los módulos y librerias que utiliza dicho punto de entrada. El valor por default es 
`./src/index.js`, pero podemos especificar una ruta diferente.

```javascript
module.exports = {
  entry: './path/to/entre/file.js'
}
```

### Output

La salida especifica dónde deben colocarse los bundles resultantes y cómo se deben llamar los archivos. Por default el
bundle principal es `./dist/main.js`. Para cambiar este valor agregamos una propiedad `output` cuyo valor es un objeto
que nos permite definir la ruta y el nombre del archivo.

```javascript
const path = require('path');

module.exports = {
  entry: './path/to/entre/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
```

A diferencia del `entry`, cuando estamos definiendo la ruta del `output` necesitamos una ruta absoluta, por ello usamos
`path` que es un módulo de Node.js. El método `path.resolve()` genera una ruta con los argumentos que le pasamos, 
`__dirname` es una variable cuyo valor es la ruta absoluta, `dist` es la carpeta donde queremos colocar el bundle final.

#### [Ejemplo 1: Instalación y configuración](./Ejemplo-01/Readme.md)

### Loaders

Webpack solamente entiende archivos de JavaScript y JSON. Usando `loaders` webpack puede procesar otro tipo de archivos
y convertirlos en módulos que serán agregados al grafo de dependencias.

```javascript
const path = require('path');

module.exports = {
  entry: './path/to/entre/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ] 
  }
}
```

Cada `loader` tiene dos propiedades, la primera es `test`, aquí definimos con una expresión regular el tipo de archivos 
que deseamos procesar, con la segunda propiedad `use` indicamos el tipo de `loader` que debe ser usado. En el ejemplo
anterior estamos usando `raw-loader` para procesar todos los archivos `txt` del proyecto.

> Los loaders deben ser instalados previamente: `npm install --save-dev raw-loader`

### Plugins

Los `loaders` nos ayudan a transformar ciertos tipos de módulos, mientras que los plugins permiten una amplia gama de
tareas como optimización de los bundles, manejo de assets, inyección de variables de entorno, etc. Para usar un plugin
debemos importarlo y agregarlo al arreglo `plugins`.

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './path/to/entre/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' }
    ] 
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
```

La mayoría de los plugins pueden ser configurados. En este ejemplo, `html-webpack-plugin` genera un archivo html listo
para ser usado inyectando automáticamente los bundles generados por webpack.

> Los plugins deben ser instalados previamente: `npm install --save-dev html-webpack-plugin`

#### [Ejemplo 2: Webpack y CSS](./Ejemplo-02/Readme.md)

#### [Ejemplo 3: Webpack Dev Server](./Ejemplo-03/Readme.md)

#### [Reto 1: Find your GIF](./Reto-01/Readme.md)

#### [Reto 2: Find your GIF II](./Reto-02/Readme.md)
