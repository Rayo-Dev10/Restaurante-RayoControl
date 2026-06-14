# AMBIENTE DE DESARROLLO Y PRUEBAS

## GA8-220501096-AA1-EV02 - Módulos integrados

## Restaurante-RayoControl

---

## 1. Identificación del documento

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
| Fecha                    | 14 de junio de 2026                                                       |

---

## 2. Propósito del documento

Este documento describe el ambiente de desarrollo y pruebas utilizado para construir, compilar, ejecutar y validar los módulos integrados del sistema Restaurante-RayoControl.

Se presenta la configuración del entorno, la base de datos, los comandos principales de ejecución y la estructura de pruebas aplicada al proyecto.

---

## 3. Resumen del ambiente utilizado

| Elemento               | Descripción                 |
| ---------------------- | --------------------------- |
| Sistema operativo      | Windows                     |
| Editor de código       | Visual Studio Code          |
| Lenguaje principal     | Java 21                     |
| Framework              | Spring Boot 3.5.14          |
| Gestor de dependencias | Maven                       |
| Base de datos          | PostgreSQL                  |
| Motor de plantillas    | Thymeleaf                   |
| Persistencia           | Spring Data JPA e Hibernate |
| Pruebas                | JUnit 5 y Mockito           |
| Control de versiones   | Git                         |
| Repositorio remoto     | GitHub                      |
| Navegador de prueba    | Navegador web moderno       |
| Puerto local           | 8080                        |

---

## 4. Herramientas de desarrollo

### 4.1 Java

El proyecto utiliza Java 21 como versión de compilación y ejecución.

La versión se define en el archivo `pom.xml`:

```xml
<java.version>21</java.version>
```

Java se utiliza para desarrollar las entidades, controladores, servicios, repositorios y pruebas unitarias del sistema.

### 4.2 Maven

Maven se utiliza para:

* Administrar dependencias.
* Compilar el proyecto.
* Ejecutar pruebas.
* Generar el archivo JAR.
* Empaquetar la aplicación Spring Boot.

Comandos principales:

```bash
mvn clean package
mvn test
mvn spring-boot:run
```

### 4.3 Spring Boot

Spring Boot se utiliza como framework principal de la aplicación. Permite ejecutar el sistema con servidor Tomcat embebido, sin necesidad de instalar Apache Tomcat de forma externa.

Dependencias principales utilizadas:

* `spring-boot-starter-web`
* `spring-boot-starter-thymeleaf`
* `spring-boot-starter-data-jpa`
* `spring-boot-starter-validation`
* `postgresql`
* `spring-boot-starter-test`

### 4.4 Visual Studio Code

Visual Studio Code se utiliza como editor de código para organizar el proyecto, revisar archivos, modificar clases, ejecutar comandos desde terminal y validar la estructura de carpetas.

Durante el desarrollo se trabajó con archivos Java en codificación `UTF-8` sin BOM para evitar errores de compilación asociados a caracteres no válidos al inicio de los archivos fuente.

### 4.5 Git y GitHub

Git se utiliza para registrar los cambios del proyecto en control de versiones.

GitHub se utiliza para publicar el código fuente de la evidencia.

Repositorio de la evidencia:

```text
https://github.com/Rayo-Dev10/Restaurante-RayoControl/tree/main/GA8-220501096-AA1-EV02
```

---

## 5. Ambiente de base de datos

### 5.1 Motor de base de datos

El sistema utiliza PostgreSQL como sistema gestor de base de datos relacional.

Base de datos utilizada:

```text
rayocontrol_db
```

### 5.2 Script de creación

El script de base de datos se encuentra en:

```text
database/schema.sql
```

Este script crea las tablas principales del sistema:

| Tabla             | Función                           |
| ----------------- | --------------------------------- |
| `products`        | Almacenar productos del menú      |
| `customer_orders` | Almacenar pedidos registrados     |
| `order_items`     | Almacenar detalles de cada pedido |

### 5.3 Datos iniciales

El script incluye productos iniciales para facilitar las pruebas funcionales:

| Producto          | Descripción                         |
| ----------------- | ----------------------------------- |
| Menu ejecutivo    | Almuerzo completo del día           |
| Limonada natural  | Bebida fría preparada al momento    |
| Pechuga gratinada | Plato a la carta con acompañamiento |

### 5.4 Configuración de conexión

La configuración de conexión se encuentra en:

```text
src/main/resources/application.properties
```

Configuración principal:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/rayocontrol_db
spring.datasource.username=${DB_USERNAME:postgres}
spring.datasource.password=${DB_PASSWORD:colombia}
spring.datasource.driver-class-name=org.postgresql.Driver
```

La configuración permite usar variables de entorno para usuario y contraseña. Si no se definen variables, toma los valores por defecto indicados.

---

## 6. Configuración de persistencia

La persistencia se gestiona con Spring Data JPA e Hibernate.

Configuraciones principales:

```properties
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.open-in-view=false
```

### 6.1 Uso de `ddl-auto=validate`

La opción `validate` permite que Hibernate verifique que las entidades Java coincidan con la estructura existente de la base de datos, sin crear ni modificar tablas automáticamente.

La estructura de la base de datos se controla mediante el script:

```text
database/schema.sql
```

### 6.2 Uso de `open-in-view=false`

La opción `spring.jpa.open-in-view=false` evita mantener sesiones de persistencia abiertas durante la renderización completa de las vistas. Esto contribuye a una separación clara entre la capa de servicios y la capa de presentación.

Para consultar el detalle de pedidos junto con sus productos asociados, se utiliza carga controlada desde el repositorio mediante `@EntityGraph`.

---

## 7. Configuración del servidor de aplicación

El sistema se ejecuta en entorno local mediante Spring Boot.

Puerto configurado:

```properties
server.port=8080
```

Rutas principales de prueba:

| Ruta                                | Función             |
| ----------------------------------- | ------------------- |
| `http://localhost:8080`             | Página inicial      |
| `http://localhost:8080/products`    | Módulo de productos |
| `http://localhost:8080/orders`      | Módulo de pedidos   |
| `http://localhost:8080/orders/{id}` | Detalle de pedido   |

No se requiere instalar Apache Tomcat de forma separada, porque Spring Boot ejecuta la aplicación con Tomcat embebido.

---

## 8. Ambiente de pruebas

### 8.1 Pruebas manuales

Las pruebas manuales se realizan desde el navegador web, ejecutando la aplicación localmente.

Flujo general de prueba:

1. Iniciar la aplicación.
2. Abrir la página inicial.
3. Ingresar al módulo de productos.
4. Crear un producto de prueba.
5. Verificar que el producto aparezca en el listado.
6. Ingresar al módulo de pedidos.
7. Crear un pedido seleccionando un producto existente.
8. Verificar que el pedido aparezca en el listado.
9. Abrir el detalle del pedido.
10. Validar producto, cantidad, precio unitario, subtotal y total.

### 8.2 Pruebas unitarias

Las pruebas unitarias se ubican en:

```text
src/test/java/co/edu/sena/rayocontrol/service/
```

Archivos de prueba:

| Archivo                   | Módulo    |
| ------------------------- | --------- |
| `ProductServiceTest.java` | Productos |
| `OrderServiceTest.java`   | Pedidos   |

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

## 9. Preparación del ambiente local

### 9.1 Crear base de datos

En PostgreSQL se debe crear la base de datos:

```text
rayocontrol_db
```

### 9.2 Ejecutar script SQL

Ejecutar el archivo:

```text
database/schema.sql
```

Este script crea tablas y carga datos iniciales para las pruebas.

### 9.3 Verificar credenciales

Verificar en:

```text
src/main/resources/application.properties
```

Credenciales por defecto:

```text
Usuario: postgres
Contraseña: colombia
```

También se pueden definir variables de entorno:

```text
DB_USERNAME
DB_PASSWORD
```

---

## 10. Comandos de compilación y ejecución

### 10.1 Compilar el proyecto

```bash
mvn clean package
```

Este comando limpia compilaciones anteriores, compila el código fuente, ejecuta pruebas y genera el archivo JAR.

Resultado esperado:

```text
BUILD SUCCESS
```

Archivo generado:

```text
target/rayocontrol-ga8-aa1-ev02.jar
```

### 10.2 Ejecutar pruebas unitarias

```bash
mvn test
```

Resultado esperado:

```text
Tests run: 6, Failures: 0, Errors: 0, Skipped: 0
BUILD SUCCESS
```

### 10.3 Ejecutar la aplicación

```bash
mvn spring-boot:run
```

Resultado esperado:

```text
Tomcat started on port 8080
Started RayoControlApplication
```

### 10.4 Abrir la aplicación

```text
http://localhost:8080
```

---

## 11. Archivo compilado

Después de ejecutar:

```bash
mvn clean package
```

se genera el archivo:

```text
target/rayocontrol-ga8-aa1-ev02.jar
```

El proyecto también dispone del archivo compilado en:

```text
dist/rayocontrol-ga8-aa1-ev02.jar
```

---

## 12. Estructura de pruebas por módulo

### 12.1 Módulo de productos

Prueba principal:

```text
ProductServiceTest.java
```

Aspectos evaluados:

* Consulta de productos sin término de búsqueda.
* Búsqueda de producto por identificador.
* Guardado de producto con inventario nulo.
* Asignación automática de inventario cero cuando corresponde.

### 12.2 Módulo de pedidos

Prueba principal:

```text
OrderServiceTest.java
```

Aspectos evaluados:

* Creación de pedido con producto existente.
* Cálculo del total del pedido.
* Rechazo de cantidad menor a uno.
* Rechazo de cliente o referencia vacía.

---

## 13. Consideraciones de seguridad y configuración

La versión actual trabaja con configuración local y aplica medidas básicas de organización y validación:

* Separación de responsabilidades por capas.
* Validación de entradas en entidades y servicios.
* Uso de repositorios JPA.
* Configuración de credenciales mediante variables de entorno opcionales.
* Exclusión de archivos generados mediante `.gitignore`.

---

## 14. Archivos ignorados por Git

El archivo `.gitignore` excluye archivos generados o propios del entorno local:

```text
target/
.vscode/
.idea/
*.iml
*.class
*.log
.DS_Store
```

Esto evita subir al repositorio archivos temporales, configuraciones locales del editor o productos de compilación generados automáticamente.

La carpeta `dist` se conserva como soporte del archivo compilado entregado.

---

## 15. Conclusión del ambiente

El ambiente de desarrollo y pruebas utilizado permitió construir, compilar, ejecutar y validar los módulos integrados de Restaurante-RayoControl. La configuración local con Java 21, Maven, Spring Boot y PostgreSQL permitió comprobar el funcionamiento de la aplicación web, mientras que JUnit y Mockito permitieron validar la lógica de los servicios principales.

El proyecto cuenta con una estructura reproducible, comandos claros de ejecución, base de datos definida mediante script SQL, pruebas unitarias y archivo JAR generado correctamente, lo cual soporta la entrega técnica de la evidencia GA8-220501096-AA1-EV02.
