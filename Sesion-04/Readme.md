[`Programación con JavaScript`](../Readme.md) > `Sesión 04`

---

# Sesión 4: Programación Asíncrona

## Objetivos

Realizar operaciones de manera asíncrona y distinguir entre las distintas opciones que proporciona JS

---

## Tabla de Contenidos

- **[Asincronía](#asincronía)**

- **[Callbacks](#callbacks)**

- **[Promesas](#promesas)**

- **[Async/await](#asyncawait)**

---

## Asincronía

En un ambiente síncrono solo podemos tener una tarea o proceso ejecutándose a la vez y debemos esperar a que termine 
para ejecutar el siguiente proceso. Digamos que queremos obtener información de dos fuentes distintas, por ejemplo leer
el disco duro y obtener un recurso a través de la red, una vez que tenemos los resultados los combinamos antes de seguir
con cualquier otro proceso. Esto significa que debemos hacer una operación primero, esperar a que termine e iniciar la
segunda operación. La desventaja es que el tiempo total será la suma del tiempo de respuesta de ambas operaciones, 
además que bloqueamos cualquier otro proceso.

En un sistema síncrono la solución a este problema sería iniciar otro _thread_. Un thread es un programa corriendo cuya
ejecución se puede intercalar con otros programas del sistema operativo, esto es posible porque la mayoría de 
computadoras modernas cuentan con múltiples procesadores. En otras palabras, podemos iniciar las dos tareas en 
procesadores distintos, una vez que ambos terminan se sincronizan para combinar los resultados.

JavaScript es un lenguaje de programación de un solo thread, es decir, no podemos usar varios procesadores. El motor de 
JavaScript solo puede procesar una sentencia a la vez en un único thread. Si estamos haciendo una operación como las 
descritas anteriormente nuestro thread principal se bloquea hasta que dicha operación termine. En términos del browser, 
esto significa que la página web deja de responder hasta que la tarea finalice. 

Aquí es donde JavaScript asíncrono entra en juego. Mediante el uso de callbacks, promesas y async/await podemos realizar
operaciones con largos tiempos de respuesta sin bloquear el thread principal. 

---

## Callbacks

...

---

## Promesas

...

---

## Async/await 

...
