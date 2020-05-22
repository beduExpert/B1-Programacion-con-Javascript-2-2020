[`Programación con JavaScript`](../../Readme.md) > [`Sesión 01`](../Readme.md) > `Ejemplo 01`

---

## Ejemplo 1: Sentencias de bloque

### Objetivo

Diferenciar el scope local de una función con el scope de condicionales y ciclos.

#### Requisitos

En una nueva carpeta vamos a crear un archivo `HTML` en blanco llamado `index.html`:

```html
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Ejemplo 1: Sentencias de bloque</title>
  </head>
  <body>
    <script type="text/javascript" src="./ejemplo-1.js"></script>
  </body>
</html>
```

Dentro de la misma carpeta creamos un archivo `ejemplo-1.js` que es donde
se trabajará este ejemplo. Finalmente abre el archivo `index.html`
en Chrome e inspecciona la consola para ver los resultados.

#### Desarrollo

Cuando agrupamos una o varias sentencias dentro de un par de llaves decimos que tenemos Block Statements
o bloque de sentencias. Esto lo usamos todo el tiempo, en funciones por ejemplo, lo usamos para
delimitar el cuerpo de la función. También lo usamos en condicionales como `if/else` o `switch`, e incluso
en bucles como `for` o `while`.

Tiene sentido pensar que cada bloque de sentencias crea un scope local, de hecho este es el caso de las
funciones. Sin embargo, no pasa así en condicionales o bucles.

```javascript
if(true) {
  var name = "John Doe";
  
  console.log(name); // "John Doe"
}

console.log(name); // "John Doe"
```

En esta sentencia `if` estamos declarando una nueva variable `name`, la cual forma parte del scope global,
es por ello que podemos acceder a esta variable fuera del `if`. Lo mismo pasa con los bucles.

```javascript
var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for(var i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]
```

En este ejemplo estamos usando un ciclo `for` para crear un nuevo arreglo que contiene el doble de cada
elemento en el arreglo `numbers`. Además de eso, inconscientemente hemos creado una variable global que
seguirá con vida a lo largo del código.

```javascript
console.log(i); // 5
```

Cuando inicializamos `i` lo hicimos con el único propósito de utilizar esa variable como parte del `for`.
No es necesario seguir teniendo esa variable en el scope global, de hecho podría causar algún problema más
adelante en el código si usamos `i` nuevamente pensando que no tiene ningún valor. 

![Local Scope](./assets/local-scope.png)

> Más adelante se aborda una alternativa a `var i = 0`
