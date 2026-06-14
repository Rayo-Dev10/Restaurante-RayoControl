# DOCUMENTO TÉCNICO DEL SISTEMA

## GA8-220501096-AA1-EV02 - Módulos integrados

## Restaurante-RayoControl

---

## 1. Identificación de la evidencia

| Campo                    | Información                                                                   |
| ------------------------ | ----------------------------------------------------------------------------- |
| Programa de formación    | Análisis y Desarrollo de Software                                             |
| Institución              | Servicio Nacional de Aprendizaje - SENA                                       |
| Ficha                    | 3134559                                                                       |
| Aprendiz                 | Rayo Palatianos                                                               |
| Proyecto                 | Restaurante-RayoControl                                                       |
| Fase del proyecto        | Ejecución                                                                     |
| Resultado de aprendizaje | 220501096-04 - Codificar el software de acuerdo con el diseño establecido     |
| Actividad de aprendizaje | GA8-220501096-AA1 - Integrar módulos                                          |
| Evidencia                | GA8-220501096-AA1-EV02 - Módulos integrados                                   |
| Tipo de evidencia        | Producto                                                                      |
| Producto para entregar   | Código fuente, archivo compilado, documentación técnica y URL del repositorio |
| Formato de entrega       | PDF                                                                           |
| Fecha                    | 14 de junio de 2026                                                           |

---

## 2. Propósito del documento

El presente documento técnico describe la entrega de los módulos integrados del sistema Restaurante-RayoControl, desarrollado como aplicación web para apoyar la administración básica de productos del menú y pedidos de restaurante.

El documento presenta los módulos codificados, su funcionamiento, la arquitectura técnica utilizada, la base de datos, las rutas principales del sistema, las pruebas implementadas y el uso de control de versiones.

La versión actual del sistema integra los módulos de productos y pedidos. Estos módulos permiten registrar productos del menú, consultar productos existentes, registrar pedidos asociados a productos disponibles y consultar el detalle de cada pedido con cantidad, precio unitario, subtotal y total.

---

## 3. Alcance de la versión entregada

La versión entregada corresponde a una aplicación web funcional con integración entre los módulos de productos y pedidos.

### 3.1 Funcionalidades incluidas

* Página inicial del sistema.
* Consulta de productos registrados.
* Búsqueda de productos por nombre.
* Registro de nuevos productos.
* Edición de productos existentes.
* Eliminación de productos.
* Registro de pedidos asociados a productos existentes.
* Validación básica de datos de pedido.
* Consulta del listado de pedidos.
* Consulta del detalle de un pedido.
* Cálculo de subtotal por producto.
* Cálculo de total del pedido.
* Persistencia de datos en PostgreSQL.
* Pruebas unitarias para servicios principales.
* Generación de archivo compilado JAR mediante Maven.

---

## 4. Tecnologías utilizadas

| Tecnología         | Uso dentro del proyecto                         |
| ------------------ | ----------------------------------------------- |
| Java 21            | Lenguaje principal de desarrollo                |
| Spring Boot 3.5.14 | Framework base de la aplicación web             |
| Spring MVC         | Gestión de controladores y rutas web            |
| Spring Data JPA    | Acceso a datos mediante repositorios            |
| Hibernate          | Mapeo objeto-relacional                         |
| Thymeleaf          | Motor de plantillas HTML                        |
| PostgreSQL         | Sistema gestor de base de datos                 |
| Maven              | Gestión de dependencias, compilación y pruebas  |
| JUnit 5            | Ejecución de pruebas unitarias                  |
| Mockito            | Simulación de dependencias en pruebas unitarias |
| Git                | Control de versiones local                      |
| GitHub             | Publicación del código fuente                   |
| Visual Studio Code | Entorno de edición y desarrollo                 |

---

## 5. Arquitectura general del sistema

El sistema se encuentra organizado mediante una arquitectura por capas. Esta decisión facilita la separación de responsabilidades, el mantenimiento del código y la evolución ordenada de la aplicación.

Las capas principales son:

1. Capa de presentación.
2. Capa de controladores.
3. Capa de servicios.
4. Capa de repositorios.
5. Capa de modelo.
6. Capa de persistencia.

---

## 6. Estructura general del proyecto

La estructura principal del proyecto es la siguiente:

```text
GA8-220501096-AA1-EV02/
├── database/
│   └── schema.sql
├── dist/
│   ├── rayocontrol-ga8-aa1-ev02.jar
│   └── README.txt
├── evidencias-capturas/
├── src/
│   ├── main/
│   │   ├── java/co/edu/sena/rayocontrol/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   ├── service/
│   │   │   └── RayoControlApplication.java
│   │   └── resources/
│   │       ├── static/
│   │       ├── templates/
│   │       └── application.properties
│   └── test/
│       ├── java/
│       └── resources/
├── ACTA_PRUEBAS_ACEPTACION.md
├── AMBIENTE_DESARROLLO_PRUEBAS.md
├── DOCUMENTO_TECNICO.md
├── enlace_repositorio.txt
├── INSTRUCCIONES_EJECUCION.txt
├── pom.xml
└── README.md
```

---

## 7. Descripción de capas

### 7.1 Capa de presentación

La capa de presentación está construida con HTML, Thymeleaf y CSS. Permite al usuario interactuar con la aplicación desde un navegador web.

Archivos principales:

| Archivo                        | Función                                       |
| ------------------------------ | --------------------------------------------- |
| `templates/index.html`         | Página inicial del sistema                    |
| `templates/products/list.html` | Listado y búsqueda de productos               |
| `templates/products/form.html` | Formulario de creación y edición de productos |
| `templates/orders/list.html`   | Listado de pedidos                            |
| `templates/orders/form.html`   | Formulario de creación de pedidos             |
| `templates/orders/detail.html` | Detalle del pedido                            |
| `static/assets/css/styles.css` | Estilos visuales de la aplicación             |

### 7.2 Capa de controladores

La capa de controladores recibe las solicitudes del navegador y dirige el flujo hacia los servicios correspondientes.

| Archivo                  | Responsabilidad                                |
| ------------------------ | ---------------------------------------------- |
| `HomeController.java`    | Atiende la ruta inicial del sistema            |
| `ProductController.java` | Gestiona las rutas web del módulo de productos |
| `OrderController.java`   | Gestiona las rutas web del módulo de pedidos   |

### 7.3 Capa de servicios

La capa de servicios contiene la lógica principal del sistema. Allí se centralizan validaciones, consultas, creación de registros y reglas básicas de negocio.

| Archivo               | Responsabilidad                                               |
| --------------------- | ------------------------------------------------------------- |
| `ProductService.java` | Administra operaciones de productos                           |
| `OrderService.java`   | Administra operaciones de pedidos e integración con productos |

### 7.4 Capa de repositorios

La capa de repositorios permite el acceso a la base de datos mediante Spring Data JPA.

| Archivo                        | Responsabilidad                      |
| ------------------------------ | ------------------------------------ |
| `ProductRepository.java`       | Acceso a datos de productos          |
| `CustomerOrderRepository.java` | Acceso a datos de pedidos            |
| `OrderItemRepository.java`     | Acceso a datos del detalle de pedido |

### 7.5 Capa de modelo

La capa de modelo representa las entidades principales del sistema y su relación con las tablas de la base de datos.

| Archivo              | Tabla asociada    | Descripción                           |
| -------------------- | ----------------- | ------------------------------------- |
| `Product.java`       | `products`        | Producto del menú                     |
| `CustomerOrder.java` | `customer_orders` | Pedido registrado                     |
| `OrderItem.java`     | `order_items`     | Detalle de pedido asociado a producto |

---

## 8. Módulos integrados

### 8.1 Módulo de productos

El módulo de productos permite administrar los productos disponibles en el menú del restaurante.

#### Componentes del módulo

| Componente          | Archivo                        |
| ------------------- | ------------------------------ |
| Controlador         | `ProductController.java`       |
| Modelo              | `Product.java`                 |
| Repositorio         | `ProductRepository.java`       |
| Servicio            | `ProductService.java`          |
| Vista de listado    | `templates/products/list.html` |
| Vista de formulario | `templates/products/form.html` |
| Prueba unitaria     | `ProductServiceTest.java`      |

#### Datos de entrada

| Dato                   | Tipo             | Validación               |
| ---------------------- | ---------------- | ------------------------ |
| Nombre del producto    | Texto            | Obligatorio              |
| Descripción            | Texto            | Opcional                 |
| Precio unitario        | Numérico decimal | Obligatorio, no negativo |
| Cantidad en inventario | Número entero    | Obligatorio, no negativo |
| Categoría              | Texto            | Obligatorio              |
| Disponible             | Booleano         | Sí o no                  |

#### Datos de salida

| Salida                   | Descripción                            |
| ------------------------ | -------------------------------------- |
| Listado de productos     | Muestra productos registrados          |
| Resultado de búsqueda    | Filtra productos por nombre            |
| Mensaje de éxito         | Indica producto guardado correctamente |
| Datos editables          | Permite modificar producto existente   |
| Estado de disponibilidad | Informa si el producto está disponible |

#### Reglas aplicadas

* No se permite guardar productos sin nombre.
* No se permite guardar productos sin categoría.
* No se permite guardar precios negativos.
* No se permite guardar inventario negativo.
* Si el inventario llega nulo desde el formulario o servicio, se asigna cero como valor seguro.

---

### 8.2 Módulo de pedidos

El módulo de pedidos permite registrar pedidos de clientes o mesas, seleccionando productos previamente registrados en el módulo de productos.

#### Componentes del módulo

| Componente             | Archivo                        |
| ---------------------- | ------------------------------ |
| Controlador            | `OrderController.java`         |
| Modelo de pedido       | `CustomerOrder.java`           |
| Modelo de detalle      | `OrderItem.java`               |
| Repositorio de pedido  | `CustomerOrderRepository.java` |
| Repositorio de detalle | `OrderItemRepository.java`     |
| Servicio               | `OrderService.java`            |
| Vista de listado       | `templates/orders/list.html`   |
| Vista de formulario    | `templates/orders/form.html`   |
| Vista de detalle       | `templates/orders/detail.html` |
| Prueba unitaria        | `OrderServiceTest.java`        |

#### Datos de entrada

| Dato                 | Tipo          | Validación                     |
| -------------------- | ------------- | ------------------------------ |
| Cliente o referencia | Texto         | Obligatorio                    |
| Número de mesa       | Texto         | Opcional                       |
| Producto             | Identificador | Obligatorio                    |
| Cantidad             | Número entero | Obligatorio, mayor o igual a 1 |

#### Datos de salida

| Salida                 | Descripción                                                    |
| ---------------------- | -------------------------------------------------------------- |
| Pedido registrado      | Se crea un pedido asociado a producto existente                |
| Listado de pedidos     | Muestra pedidos ordenados por identificador descendente        |
| Detalle del pedido     | Muestra producto, cantidad, precio unitario y subtotal         |
| Total del pedido       | Suma los subtotales de los ítems                               |
| Mensajes de validación | Informa errores cuando faltan datos o la cantidad no es válida |

#### Reglas aplicadas

* No se permite crear pedido sin cliente o referencia.
* No se permite crear pedido sin producto.
* No se permite crear pedido con cantidad menor a 1.
* No se permite crear pedido con producto no disponible.
* El precio unitario del detalle se toma desde el producto seleccionado.
* El subtotal se calcula multiplicando precio unitario por cantidad.
* El total del pedido se calcula sumando los subtotales.

---

### 8.3 Integración entre productos y pedidos

La integración principal del sistema ocurre cuando se registra un pedido a partir de un producto existente.

El flujo es el siguiente:

1. El usuario ingresa al módulo de pedidos.
2. El sistema consulta los productos registrados mediante `ProductService`.
3. El usuario selecciona un producto disponible.
4. El usuario define la cantidad.
5. `OrderService` consulta el producto seleccionado.
6. El sistema valida disponibilidad y cantidad.
7. El pedido se crea en `customer_orders`.
8. El detalle se crea en `order_items`.
9. El detalle queda relacionado con el producto registrado en `products`.
10. El sistema calcula subtotal y total.
11. El pedido queda disponible para consulta en el listado y detalle.

Esta relación demuestra el funcionamiento integrado de los módulos dentro de una misma aplicación.

---

## 9. Base de datos

La base de datos utilizada es PostgreSQL.

El script principal se encuentra en:

```text
database/schema.sql
```

### 9.1 Tablas principales

| Tabla             | Descripción                                          |
| ----------------- | ---------------------------------------------------- |
| `products`        | Almacena productos del menú                          |
| `customer_orders` | Almacena pedidos registrados                         |
| `order_items`     | Almacena detalles de pedido y relación con productos |

### 9.2 Relación entre tablas

| Relación                          | Descripción                                                   |
| --------------------------------- | ------------------------------------------------------------- |
| `customer_orders` a `order_items` | Un pedido puede tener uno o varios detalles                   |
| `products` a `order_items`        | Un producto puede aparecer en uno o varios detalles de pedido |

### 9.3 Integridad referencial

La tabla `order_items` contiene claves foráneas hacia:

* `customer_orders(order_id)`
* `products(product_id)`

Esto permite mantener consistencia entre los pedidos, sus detalles y los productos asociados.

---

## 10. Configuración principal del sistema

El archivo de configuración principal se encuentra en:

```text
src/main/resources/application.properties
```

Configuraciones principales:

| Configuración          | Valor            |
| ---------------------- | ---------------- |
| Puerto de ejecución    | `8080`           |
| Base de datos          | `rayocontrol_db` |
| Motor de base de datos | PostgreSQL       |
| Control de esquema JPA | `validate`       |
| Pool de conexiones     | HikariCP         |
| Motor de vistas        | Thymeleaf        |
| Perfil de ejecución    | Local            |

El sistema permite definir usuario y contraseña de base de datos mediante variables de entorno:

```properties
spring.datasource.username=${DB_USERNAME:postgres}
spring.datasource.password=${DB_PASSWORD:colombia}
```

Esto permite mantener valores por defecto para el entorno local.

---

## 11. Rutas principales del sistema

| Ruta                                 | Descripción                  |
| ------------------------------------ | ---------------------------- |
| `http://localhost:8080`              | Página inicial               |
| `http://localhost:8080/products`     | Listado de productos         |
| `http://localhost:8080/products/new` | Formulario de nuevo producto |
| `http://localhost:8080/orders`       | Listado de pedidos           |
| `http://localhost:8080/orders/new`   | Formulario de nuevo pedido   |
| `http://localhost:8080/orders/{id}`  | Detalle de pedido            |

---

## 12. Archivo compilado

El proyecto genera un archivo JAR mediante Maven.

Comando utilizado:

```bash
mvn clean package
```

Archivo generado:

```text
target/rayocontrol-ga8-aa1-ev02.jar
```

El archivo compilado también se encuentra disponible en:

```text
dist/rayocontrol-ga8-aa1-ev02.jar
```

---

## 13. Control de versiones

El proyecto se gestiona con Git y se publica en GitHub.

Repositorio de la evidencia:

```text
https://github.com/Rayo-Dev10/Restaurante-RayoControl/tree/main/GA8-220501096-AA1-EV02
```

El control de versiones permite mantener trazabilidad del desarrollo y conservar el código fuente de la evidencia.

---

## 14. Pruebas implementadas

Se implementaron pruebas unitarias para los servicios principales.

| Archivo                   | Módulo evaluado |
| ------------------------- | --------------- |
| `ProductServiceTest.java` | Productos       |
| `OrderServiceTest.java`   | Pedidos         |

Las pruebas verifican operaciones como:

* Consulta de productos.
* Búsqueda de producto por identificador.
* Asignación segura de inventario en cero.
* Creación de pedido con producto.
* Cálculo de total del pedido.
* Validación de cantidad mínima.
* Validación de cliente obligatorio.

Comando de ejecución:

```bash
mvn test
```

Resultado esperado:

```text
Tests run: 6, Failures: 0, Errors: 0, Skipped: 0
BUILD SUCCESS
```

---

## 15. Manual técnico resumido de ejecución

### 15.1 Requisitos previos

* Java 21 instalado.
* Maven instalado.
* PostgreSQL instalado.
* Base de datos `rayocontrol_db` creada.
* Script `database/schema.sql` ejecutado.
* Credenciales configuradas en `application.properties` o mediante variables de entorno.

### 15.2 Comandos principales

Compilar:

```bash
mvn clean package
```

Ejecutar pruebas:

```bash
mvn test
```

Ejecutar aplicación:

```bash
mvn spring-boot:run
```

Abrir en navegador:

```text
http://localhost:8080
```

---

## 16. Consideraciones técnicas

* La aplicación usa Spring Boot con Tomcat embebido, por lo que no requiere instalación externa de Apache Tomcat.
* La carpeta `target` es generada automáticamente por Maven.
* La carpeta `dist` permite identificar el archivo JAR compilado disponible en el proyecto.
* La aplicación valida la estructura de base de datos mediante `spring.jpa.hibernate.ddl-auto=validate`.
* La relación entre pedidos y productos se consulta con `@EntityGraph` para cargar el detalle del pedido junto con sus productos asociados.
* Las pruebas unitarias se enfocan en la lógica de servicios para validar el comportamiento central de los módulos integrados.

---

## 17. Conclusión técnica

La evidencia GA8-220501096-AA1-EV02 presenta una versión funcional de Restaurante-RayoControl con módulos integrados de productos y pedidos. La solución demuestra organización por capas, persistencia en PostgreSQL, vistas web con Thymeleaf, servicios con reglas básicas de negocio, pruebas unitarias y generación de archivo compilado mediante Maven.

La integración entre productos y pedidos permite evidenciar el funcionamiento articulado de los módulos dentro de una misma aplicación web.
