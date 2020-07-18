[`Programación con JavaScript`](../../Readme.md) > [`Sesión 07`](../Readme.md) > `Ejemplo 01`

---

## Ejemplo 1: Instalación y configuración

### Objetivo

Instalar y configurar babel

#### Requisitos

Crear una nueva carpeta para este ejemplo llamada `demo`. Dentro de esta carpeta crearemos dos carpetas más, `src` y 
`dist`. Finalmente, dentro de `src` crearemos un archivo `app.js`.

```
demo
|- /dist
|- /src
    |- app.js
```

#### Desarrollo

Para poder usar babel debemos primero inicializar npm. Desde la consola o terminal debemos ejecutar `npm init -y`
estando en la ruta donde se encuentra la carpeta recién creada. Esto nos mostrará un mensaje confirmando que se creó el
archivo `package.json`

![npm init](./assets/npm-init.png)

Ahora podemos instalar tres dependencias, `@babel/core` que es babel en sí, `@babel/cli` para ejecutar babel desde la
consola o terminal como lo hemos visto antes y el preset `@babel/preset-env`.

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

Para este ejemplo crearemos en `app.js` una función sencilla que elimina los valores falsy de un arreglo.

```javascript
const compact = (array) => array.filter((element) => !!element)

const originalArray = [0, 1, false, 2, '', 3]
const compactedArray = compact(originalArray)

console.log(`
Here is the original array: ${originalArray}
And here is the compacted array: ${compactedArray}
`)
```

Como vimos antes podemos usar la consola para que babel se encargue de transformar el código.

```
npx babel src --out-dir dist --presets=@babel/preset-env
```

Otra forma usar babel es con archivos de configuración. Para esto vamos a crear en la raíz del proyecto (al mismo nivel 
de `package.json`) un archivo llamado `babel.config.json`. Aquí podemos decirle a babel qué plugins y/o presets queremos
que use. 

```json
{
  "presets": [...],
  "plugins": [...]
}
```

No es necesario incluir ambos, en este ejemplo solamente usaremos el `preset-env`.

```json
{
  "presets": [ "@babel/env" ]
}
```

Y para ejecutarlo vamos a agregar un script en `package.json`.

```json
"scripts": {
  "build": "babel src --out-dir dist"
}
```

Ahora desde línea de comandos podemos ejecutar `npm run build`, babel buscará automáticamente si existe 
`babel.config.json` para usar la configuración ahí descrita.

Tanto los plugins como los presets pueden recibir opciones, para esto envolvemos en un arreglo el preset, el segundo 
elemento de dicho arreglo será un objeto con las opciones necesarias.

```json
{
  "presets": [
    [
    "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "70",
          "safari": "11"
        }
      }
    ]
  ]
}
```

Ahora `preset-env` cargará los plugins necesarios para transformar el las características de ES6+ que no sean compatibles
con las versiones de navegadores que se especifican en la lista.
