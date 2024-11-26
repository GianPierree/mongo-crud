# Mongo CRUD

Este proyecto es un ejemplo de aplicación CRUD (Crear, Leer, Actualizar, Eliminar) que utiliza **Node.js** y **MongoDB**. Está diseñado siguiendo los principios de **Programación Orientada a Objetos (POO)** y **SOLID**.

## Características

- Conexión dinámica a MongoDB.
- Repositorio y servicios desacoplados.
- Manejo de operaciones CRUD: 
  - Crear documentos.
  - Leer documentos.
  - Actualizar documentos.
  - Eliminar documentos.

## Requisitos Previos

- Node.js (versión 20 o superior).
- MongoDB (instalado y corriendo localmente o en un servicio remoto).
- Git (opcional, para clonar el repositorio).

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/GianPierree/mongo-crud.git
   cd mongo-crud
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

3. Crea un archivo de configuración `.env` en la raíz del proyecto. Agrega las siguientes variables de entorno (ajústalas según tu configuración):

   ```env
   MONGODB_URI=mongodb://localhost:27017
   MONGODB_DB_NAME=your_database_name
   MONGODB_COLLECTION_NAME=your_collection_name
   ```

4. Ejecuta la aplicación en modo producción:

   ```bash
   npm run start
   ```

5. Ejecuta la aplicación en modo local (pruebas o desarrollo):

   ```bash
   npm run local
   ```

## Uso

### Métodos CRUD

1. **Crear Documento:**

   Este método inserta un nuevo documento en la colección especificada.

   ```javascript
   const document = { name: "John Doe", age: 30 };
   await userService.createUser(document);
   ```

2. **Leer Documentos:**

   Este método consulta documentos en la colección según un filtro.

   ```javascript
   const query = { age: { $gte: 25 } };
   const users = await userService.getUsers(query);
   ```

3. **Actualizar Documento:**

   Este método actualiza un documento según el filtro y los datos de actualización.

   ```javascript
   const filter = { name: "John Doe" };
   const update = { age: 35 };
   await userService.updateUser(filter, update);
   ```

4. **Eliminar Documento:**

   Este método elimina un documento según un filtro.

   ```javascript
   const filter = { name: "John Doe" };
   await userService.deleteUser(filter);
   ```

## Arquitectura

- **Provider:** Clase para manejar la conexión a MongoDB.
- **Repositorio:** Maneja las operaciones CRUD directamente sobre la base de datos.
- **Servicio:** Lógica de negocio que utiliza el repositorio.
- **Clase Principal:** Orquesta la conexión a la base de datos y la ejecución de las operaciones CRUD.

## Principios Aplicados

- **SOLID:** El proyecto sigue los principios de diseño SOLID para mantener un código modular, escalable y fácil de mantener.
- **POO:** Las operaciones están encapsuladas en clases para una mejor organización y reusabilidad.

## Scripts Disponibles

- `npm run start`: Ejecuta la aplicación en modo producción.
- `npm run local`: Ejecuta la aplicación en modo desarrollo.

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores.
3. Envía un pull request con una descripción detallada de tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

## Autor

Creado por [Gian Pierre](https://github.com/GianPierree).