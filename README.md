ToDoApp
=======

### Introducción

Esta aplicación es un típico To-Do.
Para persistir las tareas se usa el localStorage del browser, de forma que no se borren al refrescar la página.
Luego de analizar a la competencia y hacer muchas pruebas con prototipos, el equipo de User Experience llegó a la conculusión que esta aplicación tiene que permitir al usario agregar tareas, editarlas y eliminarlas, pero que no se persistan los cambios hasta que se haga click en el botón guardar. En caso de que el usuario no quiera guardar los cambios, solo debe refrescar la página.

### Objetivo

1. Identificar al menos un problema de diseño y corregirlo.
2. Desarrollar los tests unitarios faltantes.
3. Por el momento esta aplicación cuenta con un único plan básico que es ilimitado. El desarrollador anterior llegó a implementar una serie de contadores que van registrando cada vez que se crea, edita o elimina una tarea. Se pide agregarle el plan gratuito y el plan premium y establecer límites para los diferentes planes. Crear los tests unitarios para esta nueva funcionalidad.

 **El plan gratuito** permite un máximo de 20 creaciones + editaciones, y no más de 5 eliminaciones.
 
 **El plan básico** permite hasta 50 creaciones, hasta 50 ediciones y hasta 50 eliminaciones.
 
 **El plan premium** es ilimitado.

 La aplicación no debería permitirle al usuario guardar los cambios si se excede de los límites del plan seleccionado. En ese caso habría que informarle al usuario que debería seleccionar un plan superior para poder guardar los cambios.

####Restricciones
  No se puede modificar el `taskRepository`

### Tecnologías

- [AngularJs](https://angularjs.org/): MVW (Model-View-Whatever), resuelve concerns de vista, DI, comunicación con servidor, etc
- [Lo-Dash](http://lodash.com/): librería de utilidades varias, sobre todo interesantes para trabajar con colecciones de forma funcional
- [Grunt](http://gruntjs.com/): task runner para automatizar la tarea de levantar el servidor y refrescar ante un cambio en el código

### Cómo correr la aplicación y los tests?

- Instalación de dependencias / setup inicial: `npm install && bower install`
- Servidor: `grunt serve`
- Tests: `grunt test`

Ambos comandos se quedan monitoreando cambios, por lo que conviene correrlos en 2 terminales diferentes.

