# Definición de componentes frontend

Este archivo documenta los componentes React utilizados en el frontend de Restaurante-RayoControl. Se incluye como apoyo técnico dentro de la evidencia GA7-220501096-AA4-EV03 y retoma de forma breve la intención de la evidencia de verificación de componentes frontend.

## App

Componente principal de la aplicación. Controla la página activa, centraliza el estado de productos y conecta la navegación con las páginas.

Justificación: permite organizar la aplicación en una estructura única y mantener la navegación del frontend sin recargar la página.

## AppHeader

Encabezado superior del sistema. Presenta el nombre del proyecto, la evidencia y el enfoque del módulo.

Justificación: mejora la identificación del sistema y mantiene coherencia visual con una interfaz administrativa.

## AppNavigation

Menú de navegación entre módulos.

Justificación: permite verificar que la navegación del frontend funciona correctamente, requisito central de la lista de chequeo.

## DashboardCard

Tarjeta de resumen para mostrar indicadores del sistema.

Justificación: facilita la visualización rápida de información del restaurante, como productos, pedidos, reservas o pagos.

## SectionHeader

Encabezado reutilizable para las secciones internas.

Justificación: evita repetir estructura visual en cada página y favorece el estándar de codificación.

## ProductForm

Formulario para crear y editar productos.

Justificación: permite demostrar eventos de React como onChange y onSubmit, además del manejo de estado del formulario.

## ProductTable

Tabla para listar productos y ejecutar acciones.

Justificación: permite demostrar eventos de clic para editar, eliminar y cambiar disponibilidad de productos.

## Páginas

Las páginas agrupan componentes por módulo: DashboardPage, ProductsPage, OrdersPage, CustomersPage, ReservationsPage, InventoryPage, PaymentsPage y AccessPage.

Justificación: esta separación permite alinear el frontend con los módulos definidos para Restaurante-RayoControl y prepara el proyecto para futuras integraciones.
