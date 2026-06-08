<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ page import="java.util.List" %>
        <%@ page import="co.edu.sena.rayocontrol.model.Product" %>
            <% List<Product> products = (List<Product>) request.getAttribute("products"); %>
                    <!DOCTYPE html>
                    <html lang="es">

                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Productos</title>
                        <link rel="stylesheet" href="<%= request.getContextPath() %>/assets/css/styles.css">
                    </head>

                    <body>
                        <header class="topbar">
                            <div>
                                <h1>Productos del menú</h1>
                                <p>Administración web de productos mediante Servlets, JSP y JDBC.</p>
                            </div><a class="button" href="<%= request.getContextPath() %>/products?action=new">Nuevo
                                producto</a>
                        </header>
                        <main class="container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Producto</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Stock</th>
                                        <th>Categoría</th>
                                        <th>Disponible</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <% if (products !=null && !products.isEmpty()) { for (Product product : products) {
                                        %>
                                        <tr>
                                            <td>
                                                <%= product.getProductId() %>
                                            </td>
                                            <td>
                                                <%= product.getProductName() %>
                                            </td>
                                            <td>
                                                <%= product.getDescription() %>
                                            </td>
                                            <td>$ <%= product.getUnitPrice() %>
                                            </td>
                                            <td>
                                                <%= product.getStockQuantity() %>
                                            </td>
                                            <td>
                                                <%= product.getCategory() %>
                                            </td>
                                            <td>
                                                <%= product.isAvailable() ? "Sí" : "No" %>
                                            </td>
                                            <td class="actions"><a class="link"
                                                    href="<%= request.getContextPath() %>/products?action=edit&id=<%= product.getProductId() %>">Editar</a>
                                                <form method="post"
                                                    action="<%= request.getContextPath() %>/products?action=delete">
                                                    <input type="hidden" name="productId"
                                                        value="<%= product.getProductId() %>"><button class="danger"
                                                        type="submit">Eliminar</button></form>
                                            </td>
                                        </tr>
                                        <% } } else { %>
                                            <tr>
                                                <td colspan="8">No hay productos registrados.</td>
                                            </tr>
                                            <% } %>
                                </tbody>
                            </table>
                        </main>
                    </body>

                    </html>