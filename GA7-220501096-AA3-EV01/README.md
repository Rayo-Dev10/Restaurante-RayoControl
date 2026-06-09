# Restaurante-RayoControl

## Evidencia GA7-220501096-AA3-EV01

**Codificacion de modulos del software stand-alone, web y movil de acuerdo al proyecto a desarrollar GA7-220501096-AA3-EV01**

## Datos de la evidencia

- **Programa de formacion:** Analisis y Desarrollo de Software
- **Proyecto formativo:** Construccion de software integrador de tecnologias orientadas a servicios
- **Fase del proyecto:** Ejecucion
- **Aprendiz:** Rayo Palatianos
- **Ficha:** 3134559

## Descripcion general

Restaurante-RayoControl es un sistema web administrativo para restaurante.

El proyecto contempla modulos para:

- productos del menu
- pedidos
- clientes
- reservas
- inventario basico
- pagos
- usuarios y roles

En esta evidencia se desarrolla el **modulo de productos del menu** aplicando un framework Java.

## Continuidad tecnica

Esta entrega toma como base funcional la evidencia `GA7-220501096-AA2-EV02`, donde el modulo de productos fue desarrollado con:

- Maven
- Servlets
- JSP
- JDBC
- PostgreSQL
- Tomcat

Para `GA7-220501096-AA3-EV01` se conserva:

- el mismo dominio funcional
- el mismo paquete institucional base `co.edu.sena.rayocontrol`
- la misma tabla `products`
- los mismos campos de negocio

La diferencia principal es arquitectonica: el modulo evoluciona hacia **Spring Boot, Spring Web, Thymeleaf y Spring Data JPA**.

## Framework seleccionado

El framework seleccionado es **Spring Boot**.

Esta decision permite construir una aplicacion Java web stand-alone con:

- servidor embebido
- estructura por capas
- integracion directa con PostgreSQL

## Tecnologias utilizadas

- Java 21
- Maven
- Spring Boot 3.5.14
- Spring Web
- Spring Data JPA
- Thymeleaf
- PostgreSQL

## Modulo codificado

El modulo implementado corresponde a **productos del menu**.

Permite:

- listar productos
- registrar productos
- editar productos
- eliminar productos
- consultar productos por nombre

La informacion se almacena en PostgreSQL mediante la tabla `products`.

## Base de datos

- **Base de datos:** `rayocontrol_db`
- **Usuario local:** `postgres`
- **Tabla principal:** `products`
- **Script de referencia:** `database/schema.sql`

## Campos conservados de la tabla `products`

La evidencia conserva los campos ya probados en el proyecto:

- `product_id`
- `product_name`
- `description`
- `unit_price`
- `stock_quantity`
- `category`
- `is_available`
- `created_at`
- `updated_at`

## Arquitectura aplicada

El proyecto utiliza una estructura por capas:

- `model` para la entidad `Product`
- `repository` para el acceso a datos con Spring Data JPA
- `service` para reglas basicas de negocio
- `controller` para las rutas web
- `templates` para las vistas Thymeleaf

## Relacion con la rubrica

La evidencia cumple con:

- la seleccion y aplicacion de un framework Java mediante Spring Boot
- la integracion de almacenamiento de datos con PostgreSQL
- la aplicacion de estandares de codificacion mediante paquetes institucionales
- nombres descriptivos y separacion de responsabilidades
- versionamiento mediante Git y GitHub

## Ejecucion

Desde la raiz del proyecto ejecutar:

```bash
mvn clean compile
mvn spring-boot:run
```

Luego abrir en el navegador:

- `http://localhost:8080/`
- `http://localhost:8080/products`

## Repositorio

https://github.com/Rayo-Dev10/Restaurante-RayoControl/tree/main/GA7-220501096-AA3-EV01
