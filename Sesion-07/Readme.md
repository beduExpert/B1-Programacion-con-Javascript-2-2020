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
