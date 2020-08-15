[`Programación con JavaScript`](../../Readme.md) > [`Sesión 08`](../Readme.md) > `Postwork`

---

## Postwork

### Objetivos

Implementar mock functions con Jest para emular peticiones HTTP

### Desarrollo

Cuando estamos realizando pruebas unitarias normalmente no queremos hacer peticiones HTTP, esto puede hacer mucho más 
lento todo el proceso de hacer pruebas, podemos tener resultados no esperados, y más importante, cada llamada a una API 
puede contar para generar costos extras.

Para estos casos usamos [_mock functions_](https://jestjs.io/docs/en/mock-functions), estas funciones nos permiten 
simular peticiones HTTP y así podemos realizar un testing adecuado sobre la funcionalidad de nuestro código.

Veamos un ejemplo con una función que hace utiliza una [API para el cambio de divisas](http://exchangeratesapi.io/):

```javascript
// src/currency.js
async function convert(base, destination) {
  try {
    const result = await fetch(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    );
    const data = await result.json();
    return data.rates[destination];
  } catch (e) {
    return null;
  }
}

export { convert };
``` 

Normalmente Jest busca una carpeta `__mocks__`, ahí colocamos un archivo con el mismo nombre del módulo que estamos 
intentando simular. En este caso, `fetch` se encuentra disponible de manera global, por lo que podemos sobre escribir
`global.fetch`.

```javascript
// src/currency.test.js
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);
``` 

Teniendo el _mock_ definido podemos enfocarnos en crear pruebas para la función `convert` sin preocuparnos en las 
peticiones a la API.

```javascript
// src/currency.test.js
import { convert } from "./currency";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("finds exchange", async () => {
  const rate = await convert("USD", "CAD");

  expect(rate).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
});
```
 
---

### Ejercicios

Agrega pruebas unitarias a tu proyecto. Enfócate en las funciones que hacen algún tipo de operación o manipulación de
datos. Jest es bastante robusto, puedes apoyarte en [_mock functions_](https://jestjs.io/docs/en/mock-functions) si 
necesitas hacer peticiones HTTP como ya se mencionó anteriormente, incluso puedes consultar la documentación si necesitas
realizar pruebas para código que manipula el [DOM directamente](https://jestjs.io/docs/en/tutorial-jquery). 
