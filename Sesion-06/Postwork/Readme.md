[`Programación con JavaScript`](../../Readme.md) > [`Sesión 06`](../Readme.md) > `Postwork`

---

## Postwork

### Objetivos

Utilizar loaders para procesar imágenes con webpack.

### Desarrollo

Uno de los beneficios de crear un grafo de dependencias de la manera que lo hace webpack es que cada módulo determina 
de manera explícita, así se puede evitar incluir en el bundle final módulos que no estén siendo usados.

Webpack nos permite incluir cualquier tipo de archivo que no sea JavaScript mediante loaders. Esto implica que 
obtenemos los mismos beneficios mencionados anteriormente con todo lo necesario para construir un sitio o aplicación 
web. 

Ya vimos cómo usar `css-loader` y `style-loader` para trabajar con estilos CSS. Otro loader bastante útil es 
`file-loader`, que nos permite integrar imágenes de manera sencilla. 

```
npm install --save-dev file-loader
```

Después de instalar el loader podemos agregarlo en `webpack.config.js`  

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']  }
    ]
  }
}
```

Con esto podemos `import MyImage from './my-image.png'` para que la imagen sea procesada y agregada en `dist/`, la 
variable `MyImage` que acabamos de crear contiene la url final de la imagen después de ser procesada. Si a la par 
estamos usando `ccs-loader` el mismo proceso ocurre cuando hacemos algo como `url('./my-image.png')` desde CSS. El 
loader reconoce que se trata de un archivo local y reemplaza `'./my-image.png'` por la url final de la imagen.

Usando imágenes desde JavaScript.

```javascript
import Background from './background.png';

function component() {
  const img = new Image();
  img.src = Background;
  
  return img;
}

document.body.appendChild(component());
```

Usando imágenes desde CSS.

```css
.section {
  background: url("./background.png");
}
```

Después de generar el build de la aplicación la imagen debería de haber cambiado el nombre por algo similar a 
`cda45674bb47cbe1ca4b20303.png`, esto significa que webpack encontró y procesó la imagen correctamente. 

---

### Ejercicios

Ahora puedes darle continuidad al proyecto que comenzaste a planear en la sesión anterior. Como primer paso debes
instalar y configurar webpack. Recuerda incluir los loaders que consideres necesarios para trabajar y Webpack Dev Server
para hacer más fácil el desarrollo.

Puedes apoyarte de los ejemplos y retos vistos en la sesión para realizar este primer paso. También puedes consultar la
documentación oficial de webpack si deseas ver [plugins](https://webpack.js.org/plugins/) y/o 
[loaders](https://webpack.js.org/loaders/) que no hayan sido abarcados en la sesión.

Por último, toma en cuenta que webpack solo modifica `import` y `export`, en la siguiente sesión veremos cómo 
implementar Babel para poder usar otras características de ES6+ como arrow functions, spread operator, object 
destructuring, etc. 
