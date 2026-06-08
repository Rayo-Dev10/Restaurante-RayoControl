<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %><!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Restaurante RayoControl</title>
    <link
      rel="stylesheet"
      href="<%= request.getContextPath() %>/assets/css/styles.css"
    />
  </head>
  <body>
    <main class="home">
      <section class="hero">
        <h1>Restaurante RayoControl</h1>
        <p>Sistema web para la administración de productos del menú.</p>
        <a class="button" href="<%= request.getContextPath() %>/products"
          >Abrir módulo de productos</a
        >
      </section>
    </main>
  </body>
</html>
