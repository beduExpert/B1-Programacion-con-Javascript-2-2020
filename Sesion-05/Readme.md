[`Programación con JavaScript`](../Readme.md) > `Sesión 05`

---

# Sesión 5: API

🎯 **Objetivos:**

Consumir recursos externos de una API mediante peticiones HTTP

---

## 💻 Tabla de Contenidos

- **[API](#api)**

- **[REST API](#rest-api)**

- **[Métodos HTTP](#métodos-http)**

- **[fetch](#fetch)**

    - [Ejemplo 1: NASA API](./Ejemplo-01/Readme.md)
    
    - [Ejemplo 2: Buscador de GIFs](./Ejemplo-02/Readme.md)
    
    - [Reto 1: Usuarios de GitHub](./Reto-01/Readme.md)
    
    - [Reto 2: Repositorios de GitHub](./Reto-02/Readme.md)
    
    - [Reto 3: Resultados dinámicos](./Reto-03/Readme.md)
   
- **[Postwork](./Postwork/Readme.md)**
    
---

## API

Application Program Interface o simplemente API es un contrato entre una porción de software y otra, donde la información
se comparte de manera estructurada a través de request (petición) y response (respuesta).

![API](./assets/api.png)

Como analogía podemos tomar restaurante, donde el cliente y la cocina son dos softwares distintos. La manera de
comunicarse es mediante una API, en este caso el mesero. El cliente realiza un pedido y el mesero se encarga de llevar
el mensaje a la cocina, una vez completa la petición del cliente el mensaje lleva de regreso lo que solicitó el cliente.

En otras palabras, una API es un mensajero, toma un request de un software para llevarlo a otro y regresa un response.
Esto es algo que existe en todos lados, sistemas operativos, dispositivos móviles, equipos de cómputo, etc.

---

## REST API

REST significa Representational State Transfer. Este es un estilo de arquitectura para diseñar aplicaciones en red que 
se basan en un protocolo cliente-servidor, usualmente es HTTP. Esto permite a una aplicación web realizar una petición
HTTP a un servidor y obtener un response en cierto formato que en la mayoría de los casos es un JSON, una representación
de un objeto de JavaScript.

![REST API](./assets/rest-api.png)

La mayoría de los lenguajes de programación pueden realizar peticiones HTTP, por lo que se puede implementar no solo con
JavaScript.

---

## Métodos HTTP

Cuando realizamos una petición HTTP debemos indicar el método, este define el tipo de acción que deseamos realizar para
un recurso determinado. Los métodos más usados:

`GET`: Este método es utilizado para obtener datos, por ejemplo cuando queremos ver la información de un perfil de 
usuario.

`POST`: Se usa este método para enviar información para ser procesada, es el caso cuando llenamos algún formulario en un
sitio web.

`PUT`: Es utilizado para actualizar datos, por ejemplo cambiar el nombre o correo de un usuario.

`DELETE`: Elimina un recurso. Es necesario especificar el recurso que se desea eliminar.

Otros métodos menos usados:

`HEAD`: Es similar al método `GET`, la diferencia es que `HEAD` no regresa el body del request.

`OPTIONS`: Este método es usado para obtener todos los métodos que un recurso soporta. 

`PATCH`: Se usa para realizar modificaciones parciales.

---

## fetch

El método `fetch()` nos permite realizar peticiones HTTP de manera asíncrona.

```javascript
fetch('http://example.com/data.json')
  .then(function(response) {
    return response.json()  
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })
```

En este ejemplo se está haciendo una petición tipo `GET` a la URL `http://example.com/data.json` lo que nos retorna una
promesa con un objeto `Response`. Esta respuesta contiene información como los headers, la url a la que se hizo la
petición y el body que contiene la información que estamos solicitando. Para extraer este body usamos el método `json()`.

El método `fetch()` acepta un segundo argumento opcional para definir configuraciones del request.

```javascript
fetch('http://example.com/data.json', { method: 'GET' })
  .then(function(response) {
    return response.json()  
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })
```

Cuando se requiera enviar un JSON mediante una petición `POST` se puede usar la propiedad `body` en este segundo 
argumento, junto con `Content-Type` en los `headers`.

```javascript
const data = {
  username: 'John Doe',
  email: 'john@doe.com'
}

fetch('http://example.com/user', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    return response.json()  
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })
```

#### 🕵 [Ejemplo 1: NASA API](./Ejemplo-01/Readme.md)

#### 🕵 [Ejemplo 2: Buscador de GIFs](./Ejemplo-02/Readme.md)

#### 💻 [Reto 1: Usuarios de GitHub](./Reto-01/Readme.md)

#### 💻 [Reto 2: Repositorios de GitHub](./Reto-02/Readme.md)

#### 💻 [Reto 3: Resultados dinámicos](./Reto-03/Readme.md)

#### 🛡 [Postwork](./Postwork/Readme.md)
