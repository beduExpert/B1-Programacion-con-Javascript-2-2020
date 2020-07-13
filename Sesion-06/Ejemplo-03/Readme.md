[`Programación con JavaScript`](../../Readme.md) > [`Sesión 06`](../Readme.md) > `Ejemplo 03`

---

## Ejemplo 3: Webpack Dev Server

### Objetivo

Instalar y configurar webpack dev server

#### Requisitos

Continuar con el código del [ejemplo 2](../Ejemplo-02/Readme.md)

#### Desarrollo

Webpack Dev Server nos puede ahorrar tiempo de desarrollo. Cada vez que guardemos algún cambio en nuestro código webpack
automáticamente creará un bundle y abrirá nuestra aplicación en el navegador. Así no tenemos que generar el build 
manualmente cada vez que hagamos cambios.

Antes de empezar haremos un par de cambios a la configuración de webpack. Vamos a eliminar `mode: 'development'` de
`webpack.config.js`. Después en `package.json` vamos a modificar el apartado de scripts de la siguiente manera:

```javascript
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
},
```

Esto nos permite controlar qué modo deseamos que webpack utilice al momento de generar el bundle. Una vez que nuestra
aplicación se encuentre lista podemos usar `npm run build` para generar una versión optimizada para producción.

Instalamos el plugin `webpack-dev-server`.

```
npm install --save-dev webpack-dev-server
```

Ahora lo agregamos en el archivo de configuración de webpack.

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
    contentBase: './dist'
  }
}
```

Con la propiedad `contentBase` le decimos a webpack qué carpeta queremos que use al iniciar el servidor local. Recuerda
que `src` es nuestro código fuente, es aquí donde desarrollamos la aplicación. La carpeta `dist` es código final para
distribución.

Lo siguiente es agregar un nuevo script en `package.json` que usaremos para iniciar webpack dev server.

```javascript
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production",
  "start": "webpack-dev-server --mode development --open"
},
```

La opción `--open` es para abrir el HTML inmediatamente. Ahora podemos ejecutar `npm run start` para iniciar un servidor
local con webpack.

![Webpack Dev Server](./assets/dev-server.png)

Si cambiamos el header que tenemos en `index.html`, al momento de guardar los cambios webpack generará un nuevo bundle y
actualizará el navegador automáticamente.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack Dev Server</title>
</head>
<body>
  <h1>Webpack Dev Server</h1>
</body>
</html>
```

![Dev Server Updated](./assets/dev-server-updated.png)
