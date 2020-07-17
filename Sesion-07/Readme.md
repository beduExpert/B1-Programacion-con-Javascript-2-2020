[`Programación con JavaScript`](../Readme.md) > `Sesión 07`

---

# Sesión 7: Babel

## Objetivos

Compilar las nuevas características de JavaScript en código compatible con todos los navegadores

---

## Tabla de Contenidos

- **[Babel](#babel)**


    
---

## Babel

![Babel](./assets/babel.png)

[Babel](https://babeljs.io/) es usado principalmente para convertir código ES6+ en una versión compatible con 
navegadores y ambientes tanto actuales como anteriores.

```javascript
// Babel Input: ES6 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

Podemos empezar instalando dos librerias: `@babel/core` y `@babel/cli`. La primera es el _core_ o núcleo, aquí se
encuentra la principal funcionalidad de Babel. La segunda librería nos permite usar Babel desde la terminal. Ambas se
pueden instalar con npm.

```
npm install --save-dev @babel/core @babel/cli
```

Si cuentas con una versión de npm superior a 5.2 puedes ejecutar el siguiente comando para compilar el código con babel.

> `npm -v` para verificar la versión de npm en consola

```
npx babel src --out-dir dist
```

Gracias a `@babel/cli` el comando anterior funciona y lo que hace es tomar todos los archivos de JavaScript que encuentre
en la carpeta `src`, aplicar las transformaciones que hayamos especificado y colocar los archivos resultantes en la
carpeta `dist`. En este caso no hemos definido alguna transformación por lo que el código resultante será igual al que
se encuentra en `src`.

---

## Plugins

Las transformaciones de código que se mencionaron anteriormente se realizan a través de plugins. Cada plugin le dice a 
babel cómo transformar el código. Por ejemplo, el plugin `@babel/plugin-transform-arrow-functions` permite transformar
arrow functions.

```
npm install --save-dev @babel/plugin-transform-arrow-functions
npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions
```

Con la opción `--plugins=` definimos los plugins que queremos usar.

```javascript
// Babel Input: ES6 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

En esta ocasión el compilado en la carpeta `dist` habrá hecho la transformación del arrow function. Podemos usar
varios [plugins](https://babeljs.io/docs/en/plugins) para transformar distintos features de ES6+.

---

## Presets
