# Restaurante-RayoControl - GA7-220501096-AA4-EV03

## Evidencia

**Componente frontend del proyecto formativo y proyectos de clase (listas de chequeo) GA7-220501096-AA4-EV03**

Programa de formación: Tecnólogo en Análisis y Desarrollo de Software (SENA)  
Proyecto formativo: Construcción de software integrador de tecnologías orientadas a servicios  
Fase: Ejecución  
Aprendiz: Rayo Palatianos  
Ficha: 3134559  
Instructor: David Guillermo Acevedo Cárdenas  

## Descripción

Este proyecto implementa el componente frontend del sistema **Restaurante-RayoControl** usando React. La interfaz representa los módulos principales del sistema administrativo de un restaurante: dashboard, productos del menú, pedidos, clientes, reservas, inventario, pagos y acceso de usuarios.

La evidencia se centra en el desarrollo frontend, por lo tanto no realiza consumo de API ni conexión con base de datos. Los datos se manejan localmente para demostrar navegación, componentes, estado, eventos y cumplimiento de los requisitos visuales del proyecto.

## Continuidad del proyecto

Esta entrega da continuidad a las evidencias anteriores de Restaurante-RayoControl:

- GA7-AA2-EV02: módulo web con Servlets, JSP, JDBC, PostgreSQL y Tomcat.
- GA7-AA3-EV01: módulo web con Spring Boot, Thymeleaf, JPA y PostgreSQL.
- GA7-AA4-EV03: componente frontend con React JS.

La pantalla de **Acceso** se deja preparada de manera visual para facilitar la siguiente evidencia: **GA7-220501096-AA5-EV01**, donde se diseñarán servicios web para registro e inicio de sesión.

## Tecnologías

- React
- Vite
- JavaScript
- CSS puro
- LocalStorage

## Módulos incluidos

- Dashboard
- Productos
- Pedidos
- Clientes
- Reservas
- Inventario
- Pagos
- Acceso

## Funcionalidades principales

- Navegación interna entre módulos.
- Listado de productos.
- Creación de productos.
- Edición de productos.
- Eliminación de productos.
- Cambio de disponibilidad.
- Persistencia local de productos con LocalStorage.
- Interfaz visual para registro e inicio de sesión sin consumo de API.

## Ejecución

Desde la raíz del proyecto:

```cmd
npm install
npm run dev
```

Luego abrir la URL indicada por Vite, normalmente:

```txt
http://localhost:5173/
```

## Relación con la lista de chequeo

1. El diseño frontend cumple con los prototipos del proyecto porque representa los módulos principales definidos para Restaurante-RayoControl.
2. Se entregan los archivos completos del proyecto y el archivo `enlace_repositorio.txt`.
3. La navegación funciona entre todas las secciones del frontend.
4. El sistema cumple los requisitos iniciales: productos, pedidos, clientes, reservas, inventario, pagos y usuarios/acceso.

## Repositorio

```txt
https://github.com/Rayo-Dev10/Restaurante-RayoControl/tree/main/GA7-220501096-AA4-EV03
```
