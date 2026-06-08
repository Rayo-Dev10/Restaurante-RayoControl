package co.edu.sena.rayocontrol.servlet;

import co.edu.sena.rayocontrol.dao.ProductDao;
import co.edu.sena.rayocontrol.model.Product;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.Optional;

@WebServlet("/products")
public class ProductServlet extends HttpServlet {
    private ProductDao productDao;

    @Override
    public void init() {
        productDao = new ProductDao();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getParameter("action");
        try {
            if (action == null || action.isBlank() || action.equals("list")) {
                listProducts(request, response);
            } else if (action.equals("new")) {
                showCreateForm(request, response);
            } else if (action.equals("edit")) {
                showEditForm(request, response);
            } else {
                listProducts(request, response);
            }
        } catch (SQLException exception) {
            throw new ServletException(exception);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getParameter("action");
        try {
            if ("create".equals(action)) {
                createProduct(request, response);
            } else if ("update".equals(action)) {
                updateProduct(request, response);
            } else if ("delete".equals(action)) {
                deleteProduct(request, response);
            } else {
                response.sendRedirect(request.getContextPath() + "/products");
            }
        } catch (SQLException exception) {
            throw new ServletException(exception);
        }
    }

    private void listProducts(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, ServletException, IOException {
        request.setAttribute("products", productDao.getAllProducts());
        request.getRequestDispatcher("/products.jsp").forward(request, response);
    }

    private void showCreateForm(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setAttribute("mode", "create");
        request.getRequestDispatcher("/product-form.jsp").forward(request, response);
    }

    private void showEditForm(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, ServletException, IOException {
        int productId = Integer.parseInt(request.getParameter("id"));
        Optional<Product> product = productDao.findProductById(productId);
        if (product.isPresent()) {
            request.setAttribute("mode", "update");
            request.setAttribute("product", product.get());
            request.getRequestDispatcher("/product-form.jsp").forward(request, response);
        } else {
            response.sendRedirect(request.getContextPath() + "/products");
        }
    }

    private void createProduct(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException {
        Product product = readProductFromRequest(request, 0);
        productDao.createProduct(product);
        response.sendRedirect(request.getContextPath() + "/products");
    }

    private void updateProduct(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException {
        int productId = Integer.parseInt(request.getParameter("productId"));
        Product product = readProductFromRequest(request, productId);
        productDao.updateProduct(product);
        response.sendRedirect(request.getContextPath() + "/products");
    }

    private void deleteProduct(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException {
        int productId = Integer.parseInt(request.getParameter("productId"));
        productDao.deleteProduct(productId);
        response.sendRedirect(request.getContextPath() + "/products");
    }

    private Product readProductFromRequest(HttpServletRequest request, int productId) {
        String productName = request.getParameter("productName");
        String description = request.getParameter("description");
        BigDecimal unitPrice = new BigDecimal(request.getParameter("unitPrice"));
        int stockQuantity = Integer.parseInt(request.getParameter("stockQuantity"));
        String category = request.getParameter("category");
        boolean available = "true".equals(request.getParameter("available"));
        return new Product(productId, productName, description, unitPrice, stockQuantity, category, available);
    }
}