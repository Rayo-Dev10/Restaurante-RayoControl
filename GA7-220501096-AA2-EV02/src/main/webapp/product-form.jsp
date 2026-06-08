<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ page import="co.edu.sena.rayocontrol.model.Product" %>
        <% String mode=(String) request.getAttribute("mode"); Product product=(Product) request.getAttribute("product");
            boolean editing="update" .equals(mode); String action=editing ? "update" : "create" ; %>
            <!DOCTYPE html>
            <html lang="es">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>
                    <%= editing ? "Editar producto" : "Nuevo producto" %>
                </title>
                <link rel="stylesheet" href="<%= request.getContextPath() %>/assets/css/styles.css">
            </head>

            <body>
                <main class="form-page">
                    <section class="card">
                        <h1>
                            <%= editing ? "Editar producto" : "Nuevo producto" %>
                        </h1>
                        <form method="post" action="<%= request.getContextPath() %>/products?action=<%= action %>">
                            <% if (editing) { %><input type="hidden" name="productId"
                                    value="<%= product.getProductId() %>">
                                <% } %><label>Nombre del producto<input type="text" name="productName"
                                            value="<%= editing ? product.getProductName() : "" %>"
                                            required></label><label>Descripción<input type="text" name="description"
                                            value="<%= editing ? product.getDescription() : "" %>"></label><label>Precio
                                        unitario<input type="number" step="0.01" min="0" name="unitPrice"
                                            value="<%= editing ? product.getUnitPrice() : "" %>"
                                            required></label><label>Cantidad en inventario<input type="number" min="0"
                                            name="stockQuantity"
                                            value="<%= editing ? product.getStockQuantity() : "" %>"
                                            required></label><label>Categoría<input type="text" name="category"
                                            value="<%= editing ? product.getCategory() : "" %>"
                                            required></label><label>Disponible<select name="available">
                                            <option value="true" <%=editing && product.isAvailable() ? "selected" : ""
                                                %>>Sí</option>
                                            <option value="false" <%=editing && !product.isAvailable() ? "selected" : ""
                                                %>>No</option>
                                        </select></label>
                                    <div class="form-actions"><button class="button" type="submit">Guardar</button><a
                                            class="secondary"
                                            href="<%= request.getContextPath() %>/products">Cancelar</a></div>
                        </form>
                    </section>
                </main>
            </body>

            </html>