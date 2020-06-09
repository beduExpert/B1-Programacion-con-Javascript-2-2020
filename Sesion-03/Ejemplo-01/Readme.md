[`Programación con JavaScript`](../../Readme.md) > [`Sesión 03`](../Readme.md) > `Ejemplo 01`

---

## Ejemplo 1: Arrow functions y this

### Objetivo

Diferenciar el valor de `this` entre arrow functions y funciones normales

#### Requisitos

Crear un archivo `index.html` con la siguiente estructura:

```html
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Ejemplo 1: Arrow functions y this</title>
    <style>
      .box {
        width: 250px;
        height: 250px;
      }
      .red { background-color: #8b0000; }
      .blue { background-color: #6495ed; }
    </style>
  </head>
  <body>
  
    <div class="box red"></div>
    
    <script type="text/javascript" src="./ejemplo-1.js"></script>
  </body>
</html>
```

Dentro de la misma carpeta creamos un archivo `ejemplo-1.js` que es donde
se trabajará este ejemplo. Finalmente abre el archivo `index.html`
en Chrome e inspecciona la consola para ver los resultados.

#### Desarrollo

Al hacer click en el cuadro vamos a cambiar el color jugando con las clases `red` y `blue`. Lo primero es agregar un 
event listener.

```javascript
const box = document.querySelector('.box');

box.addEventListener('click', () => {
  console.log(this);
})
```

Si hacemos click en el cuadro se mostrará la global `window`, esto es porque los arrow functions no cambian el valor de 
`this`, pasan el mismo valor que tine el scope padre. 

```javascript
const box = document.querySelector('.box');

box.addEventListener('click', function() {
  console.log(this);
})
```

Ahora vemos en consola que `this` está haciendo referencia al nodo `box`.

```javascript
const box = document.querySelector('.box');

box.addEventListener('click', function () {
  this.classList.toggle('red');
  this.classList.toggle('blue');
})
```

Con esto podemos intercambiar las clases `red` y `blue` al momento de hacer click en el cuadro. Si queremos regresar al
color inicial podemos implementar la lógica con un `setTimeout` para que las clases cambien de nuevo después de un 
segundo.

```javascript
const box = document.querySelector('.box');

box.addEventListener('click', function () {
  this.classList.toggle('red');
  this.classList.toggle('blue');

  setTimeout(function() {
    this.classList.toggle('red');
    this.classList.toggle('blue');
  }, 1000);
})
```

El problema con esto es que después de un segundo tendremos un error en consola `Uncaught TypeError: Cannot read 
property 'toggle' of undefined`. La función dentro de `setTimeout` está creando un nuevo contexto lo que cambia el valor
de `this` y se pierde la referencia a `box` que ya teníamos. Para resolverlo podemos hacer uso de un arrow function.

```javascript
const box = document.querySelector('.box');

box.addEventListener('click', function () {
  this.classList.toggle('red');
  this.classList.toggle('blue');

  setTimeout(() => {
    this.classList.toggle('red');
    this.classList.toggle('blue');
  }, 1000);
})
```
