[`Programación con JavaScript`](../../Readme.md) > [`Sesión 07`](../Readme.md) > `Ejemplo 02`

---

## Ejemplo 2: Webpack y babel

### Objetivo

Instalar y configurar babel junto con webpack

#### Requisitos

Crear un nuevo proyecto `app` y configurar webpack. Puedes tomar como referencia el 
[Ejemplo 01](../../Sesion-06/Ejemplo-01/Readme.md) de la sesión anterior. 

La estructura final debería ser como se muestra a continuación:

```
app
|- /dist
|- /node_modules
|- /src
|    |- app.js
|    |- util.js
|- package.json
|- package-lock.json
|- webpack.config.js
```

#### Desarrollo

El único código que webpack puede transformar por sí solo son los módulos de ES6 (`import/export`). Para poder modificar
otras características de ES6+ webpack necesita la ayuda de babel. 

Vamos a empezar instalando las dependencias necesarias: `@babel/core`, `@babel/cli`, `@babel/preset-env`. Adicionalmente
necesitamos instalar un loader para webpack: `babel-loader`

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-loader
```

Ahora vamos a retomar el código del [Ejemplo 1](../Ejemplo-01/Readme.md) con la diferencia que pondremos la función 
`compact` en un módulo aparte.

**`util.js`**
```javascript
export const compact = (array) => array.filter((element) => !!element)
```

**`app.js`**
```javascript
import { compact } from "./util"

const originalArray = [0, 1, false, 2, '', 3]
const compactedArray = compact(originalArray)

console.log(`
Here is the original array: ${originalArray}
And here is the compacted array: ${compactedArray}
`)
```

Ahora debemos decirle a webpack que queremos que use babel siempre que encuentre un archivo `.js`. 

**`webpack.config.js`**
```javascript
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
```

Agregamos el script necesario en `package.json` para ejecutar webpack si es que aún no está hecho.

```json
"scripts": {
  "build": "webpack"
}
```

Listo, acabamos de configurar webpack para que use babel. Si ejecutamos `npm run build` deberíamos poder generar un
`/dist/bundle.js`. Sin embargo, babel aún no está haciendo nada, no le hemos dicho qué preset debe usar para transformar
el código. Lo último que nos falta es crear un archivo `.babelrc` para configurar el preset que queremos usar.

```json
{
  "presets": ["@babel/preset-env"]
}
```

La próxima vez que ejecutemos `npm run build` babel transformará el código antes que webpack genere el bundle.
