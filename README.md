# Proyecto de e-commerce "ch-react-helix" 

Desarrollado en React con Firebase.

Realizado por Mariano Martínez en Coderhouse


## Características del proyecto

El sitio permite explorar una galería general de productos, filtrarlos por categoría a través del dropdown menu, y acceder a la vista de detalle de cada uno de ellos.

- Se pueden agregar productos a un carrito de compras desde la vista de listado o desde la vista de detalle del producto. 

- Al confirmar el agregado al carrito redirecciona a la vista del carrito, donde se debe completar un formulario para habilitar el botón para completar la compra. 

- Al completar la compra se le devuelve al usuario el número de orden.


## Base de datos

- La base de datos es de Firebase. 
- El stock de productos es actualizado al completar una compra.
- Las órdenes son almacenadas en una colección, con los datos de items, comprador, fecha, monto total y estado de la orden.


## Dependencias

Instalar las dependencias:

```
npm install
```

### Dependencias utilizadas

- "react": "^16.13.1"

- "firebase": "^7.2.3" 
  - (para base de datos)

- "bootstrap": "^4.5.3" (para estilos)

- "react-bootstrap": "^1.3.0" (para estilos, utilizada solamente en NavBar.js)

- "react-loadingmask": "^4.0.6" (para máscaras durante la búsqueda de datos en base de datos)

- "react-router-dom": "^5.2.0" (para ruteo entre URLs)

- "react-dom": "^16.13.1"

- "react-scripts": "3.4.3"

### Correr el proyecto

```
npm start
```

El proyecto se visualiza en el navegador en la URL 

```
localhost:3000
```

