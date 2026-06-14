# ACTA DE PRUEBAS Y ACEPTACIÓN

## GA8-220501096-AA1-EV02 - Módulos integrados

## Restaurante-RayoControl

---

## 1. Identificación del acta

| Campo                    | Información                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| Programa de formación    | Análisis y Desarrollo de Software                                         |
| Institución              | Servicio Nacional de Aprendizaje - SENA                                   |
| Ficha                    | 3134559                                                                   |
| Aprendiz                 | Rayo Palatianos                                                           |
| Proyecto                 | Restaurante-RayoControl                                                   |
| Evidencia                | GA8-220501096-AA1-EV02 - Módulos integrados                               |
| Actividad de aprendizaje | GA8-220501096-AA1 - Integrar módulos                                      |
| Resultado de aprendizaje | 220501096-04 - Codificar el software de acuerdo con el diseño establecido |
| Tipo de evidencia        | Producto                                                                  |
| Fecha de pruebas         | 14 de junio de 2026                                                       |
| Ambiente                 | Local                                                                     |
| Responsable de pruebas   | Aprendiz desarrollador                                                    |

---

## 2. Propósito del acta

El presente documento registra las pruebas realizadas sobre los módulos integrados de Restaurante-RayoControl y deja constancia de su aceptación funcional para la evidencia GA8-220501096-AA1-EV02.

Las pruebas verifican el funcionamiento integrado de los módulos de productos y pedidos, la compilación del sistema, la ejecución satisfactoria de las pruebas unitarias y la generación del archivo compilado mediante Maven.

---

## 3. Alcance de las pruebas

Las pruebas cubren la versión actual del sistema, compuesta por los siguientes módulos:

| Módulo                      | Alcance                                               |
| --------------------------- | ----------------------------------------------------- |
| Productos                   | Crear, consultar, buscar, editar y eliminar productos |
| Pedidos                     | Crear, consultar, eliminar y ver detalle de pedidos   |
| Integración producto-pedido | Crear pedidos a partir de productos existentes        |
| Base de datos               | Persistencia en PostgreSQL                            |
| Compilación                 | Generación del archivo JAR                            |
| Pruebas unitarias           | Validación de servicios principales                   |
| Control de versiones        | Disponibilidad del código en GitHub                   |

---

## 4. Elementos evaluados

| Elemento                     | Archivo o ruta                                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| Código fuente                | `src/main/java`                                                                          |
| Vistas web                   | `src/main/resources/templates`                                                           |
| Recursos estáticos           | `src/main/resources/static`                                                              |
| Configuración                | `src/main/resources/application.properties`                                              |
| Script SQL                   | `database/schema.sql`                                                                    |
| Pruebas unitarias            | `src/test/java`                                                                          |
| Archivo compilado            | `target/rayocontrol-ga8-aa1-ev02.jar`                                                    |
| Archivo entregable compilado | `dist/rayocontrol-ga8-aa1-ev02.jar`                                                      |
| Repositorio                  | `https://github.com/Rayo-Dev10/Restaurante-RayoControl/tree/main/GA8-220501096-AA1-EV02` |

---

## 5. Datos de prueba utilizados

### 5.1 Producto de prueba

| Campo                  | Valor                                   |
| ---------------------- | --------------------------------------- |
| Nombre                 | Arepa con queso                         |
| Descripción            | Producto de prueba para integración GA8 |
| Precio unitario        | 7000                                    |
| Cantidad en inventario | 10                                      |
| Categoría              | Entrada                                 |
| Disponible             | Sí                                      |

### 5.2 Pedido de prueba

| Campo                | Valor              |
| -------------------- | ------------------ |
| Cliente o referencia | Cliente prueba GA8 |
| Mesa                 | 1                  |
| Producto             | Arepa con queso    |
| Cantidad             | 2                  |
| Precio unitario      | 7000               |
| Subtotal esperado    | 14000              |
| Total esperado       | 14000              |

---

## 6. Pruebas manuales aplicadas

| No. | Prueba                        | Procedimiento                                           | Resultado esperado                                              | Resultado obtenido                                  | Estado   |
| --: | ----------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------- | -------- |
|   1 | Acceso a la página inicial    | Abrir `http://localhost:8080`                           | El sistema muestra la página inicial de Restaurante-RayoControl | La página inicial se muestra correctamente          | Aprobada |
|   2 | Acceso al módulo de productos | Abrir `http://localhost:8080/products`                  | El sistema muestra el listado de productos                      | El listado de productos se muestra correctamente    | Aprobada |
|   3 | Creación de producto          | Ingresar a nuevo producto y diligenciar los datos       | El sistema guarda el producto y retorna al listado              | El producto se registra correctamente               | Aprobada |
|   4 | Búsqueda de producto          | Buscar un producto por nombre                           | El sistema filtra los productos coincidentes                    | La búsqueda responde correctamente                  | Aprobada |
|   5 | Edición de producto           | Abrir producto existente y modificar datos              | El sistema actualiza la información                             | El producto queda actualizado                       | Aprobada |
|   6 | Eliminación de producto       | Eliminar producto desde el listado                      | El sistema elimina el registro seleccionado                     | El producto se elimina correctamente                | Aprobada |
|   7 | Acceso al módulo de pedidos   | Abrir `http://localhost:8080/orders`                    | El sistema muestra el listado de pedidos                        | El listado de pedidos se muestra correctamente      | Aprobada |
|   8 | Creación de pedido            | Registrar pedido con cliente, mesa, producto y cantidad | El sistema crea un pedido asociado al producto                  | El pedido se registra correctamente                 | Aprobada |
|   9 | Cálculo del total             | Crear pedido con producto de precio 7000 y cantidad 2   | El total debe ser 14000                                         | El total corresponde al cálculo esperado            | Aprobada |
|  10 | Detalle del pedido            | Abrir opción Ver detalle                                | El sistema muestra producto, cantidad, precio y subtotal        | El detalle se muestra correctamente                 | Aprobada |
|  11 | Validación de cantidad        | Intentar crear pedido con cantidad menor a 1            | El sistema debe rechazar el pedido                              | La validación impide registrar cantidad inválida    | Aprobada |
|  12 | Validación de cliente         | Intentar crear pedido sin cliente o referencia          | El sistema debe rechazar el pedido                              | La validación impide registrar el pedido incompleto | Aprobada |
|  13 | Eliminación de pedido         | Eliminar pedido desde listado                           | El sistema elimina el pedido seleccionado                       | El pedido se elimina correctamente                  | Aprobada |

---

## 7. Pruebas unitarias aplicadas

Las pruebas unitarias fueron ejecutadas con Maven mediante el comando:

```bash
mvn test
```

También se ejecutan dentro del ciclo de construcción con:

```bash
mvn clean package
```

### 7.1 Pruebas del módulo de productos

Archivo:

```text
src/test/java/co/edu/sena/rayocontrol/service/ProductServiceTest.java
```

| No. | Prueba                                           | Objetivo                                                           | Resultado |
| --: | ------------------------------------------------ | ------------------------------------------------------------------ | --------- |
|   1 | `findAllWithoutSearchReturnsProductsOrderedById` | Verificar consulta de productos sin búsqueda                       | Aprobada  |
|   2 | `findByIdReturnsExistingProduct`                 | Verificar consulta de producto existente por ID                    | Aprobada  |
|   3 | `saveProductAssignsZeroStockWhenStockIsNull`     | Verificar asignación de inventario cero cuando el valor llega nulo | Aprobada  |

### 7.2 Pruebas del módulo de pedidos

Archivo:

```text
src/test/java/co/edu/sena/rayocontrol/service/OrderServiceTest.java
```

| No. | Prueba                                        | Objetivo                                        | Resultado |
| --: | --------------------------------------------- | ----------------------------------------------- | --------- |
|   1 | `createOrderWithProductCalculatesTotalAmount` | Verificar creación de pedido y cálculo de total | Aprobada  |
|   2 | `createOrderRejectsQuantityLowerThanOne`      | Verificar rechazo de cantidad menor a uno       | Aprobada  |
|   3 | `createOrderRejectsEmptyCustomerName`         | Verificar rechazo de cliente o referencia vacía | Aprobada  |

### 7.3 Resultado general de pruebas unitarias

Resultado registrado:

```text
Tests run: 6, Failures: 0, Errors: 0, Skipped: 0
BUILD SUCCESS
```

Estado general:

```text
Aprobado
```

---

## 8. Prueba de compilación

Comando ejecutado:

```bash
mvn clean package
```

Resultado esperado:

```text
BUILD SUCCESS
```

Resultado obtenido:

```text
BUILD SUCCESS
```

Archivo generado:

```text
target/rayocontrol-ga8-aa1-ev02.jar
```

Estado:

```text
Aprobado
```

---

## 9. Prueba de ejecución local

Comando ejecutado:

```bash
mvn spring-boot:run
```

Resultado esperado:

```text
Tomcat started on port 8080
Started RayoControlApplication
```

Ruta de validación:

```text
http://localhost:8080
```

Estado:

```text
Aprobado
```

---

## 10. Prueba de base de datos

| Elemento                 | Validación                                                | Resultado |
| ------------------------ | --------------------------------------------------------- | --------- |
| Base de datos            | Existe `rayocontrol_db`                                   | Aprobado  |
| Tabla `products`         | Permite almacenar productos                               | Aprobado  |
| Tabla `customer_orders`  | Permite almacenar pedidos                                 | Aprobado  |
| Tabla `order_items`      | Permite almacenar detalles de pedido                      | Aprobado  |
| Relación pedido-producto | El detalle del pedido se asocia a producto existente      | Aprobado  |
| Script SQL               | `database/schema.sql` define estructura y datos iniciales | Aprobado  |

---

## 11. Prueba de integración producto-pedido

### 11.1 Objetivo

Verificar que el módulo de pedidos utilice productos existentes del módulo de productos para crear el detalle del pedido.

### 11.2 Procedimiento

1. Registrar o seleccionar un producto existente.
2. Ingresar al formulario de nuevo pedido.
3. Seleccionar el producto.
4. Ingresar cliente o referencia.
5. Ingresar mesa.
6. Indicar cantidad.
7. Guardar pedido.
8. Abrir el detalle del pedido.

### 11.3 Resultado esperado

El sistema debe crear un pedido con detalle asociado al producto seleccionado, calcular subtotal y total, y mostrar la información en la pantalla de detalle.

### 11.4 Resultado obtenido

El sistema crea el pedido correctamente, muestra el producto seleccionado, la cantidad, el precio unitario, el subtotal y el total del pedido.

### 11.5 Estado

```text
Aprobado
```

---

## 12. Incidencias encontradas y correcciones aplicadas

| Incidencia                           | Causa                                                           | Corrección                                                              | Estado     |
| ------------------------------------ | --------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------- |
| Error `illegal character: '\ufeff'`  | Archivo Java guardado en UTF-8 con BOM                          | Se guardó `RayoControlApplication.java` en UTF-8 sin BOM                | Corregida  |
| JAR generado con nombre EV01         | Valor anterior en `finalName` del `pom.xml`                     | Se actualizó a `rayocontrol-ga8-aa1-ev02`                               | Corregida  |
| Advertencias de Mockito y Byte Buddy | Advertencia del entorno de pruebas con carga dinámica de agente | No afecta el resultado de la evidencia; las pruebas pasan correctamente | Registrada |
| Recurso de pruebas no existente      | Faltaba `src/test/resources`                                    | Se creó carpeta con `.gitkeep`                                          | Corregida  |

---

## 13. Criterios de aceptación

| Criterio                                     | Estado   |
| -------------------------------------------- | -------- |
| Módulos codificados y documentados           | Aceptado |
| Documento técnico del sistema                | Aceptado |
| Ambiente de desarrollo y pruebas documentado | Aceptado |
| Código gestionado con control de versiones   | Aceptado |
| Acta con aplicación de pruebas y aceptación  | Aceptado |
| Archivo compilado generado                   | Aceptado |
| Pruebas unitarias exitosas                   | Aceptado |
| Funcionamiento local validado                | Aceptado |

---

## 14. Aceptación de la evidencia

Con base en las pruebas manuales, pruebas unitarias, compilación del proyecto, ejecución local y verificación de integración entre productos y pedidos, se acepta la versión entregada de Restaurante-RayoControl para la evidencia GA8-220501096-AA1-EV02 - Módulos integrados.

La aplicación cumple el propósito de integrar módulos codificados de productos y pedidos, documentar su funcionamiento, generar archivo compilado, dejar evidencia de pruebas y publicar el código fuente mediante control de versiones.

---

## 15. Firma de aceptación

| Rol                    | Nombre                           | Aceptación    |
| ---------------------- | -------------------------------- | ------------- |
| Aprendiz desarrollador | Rayo Palatianos                  | Aceptado      |
| Instructor             | David Guillermo Acevedo Cárdenas | Para revisión |

---

## 16. Observaciones finales

Esta acta deja constancia de que los módulos entregados fueron probados, compilados y aceptados para su presentación académica.
