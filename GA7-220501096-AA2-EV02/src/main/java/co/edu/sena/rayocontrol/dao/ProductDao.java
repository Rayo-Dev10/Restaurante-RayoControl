package co.edu.sena.rayocontrol.dao;

import co.edu.sena.rayocontrol.config.DatabaseConnection;
import co.edu.sena.rayocontrol.model.Product;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class ProductDao {
    public Product createProduct(Product product) throws SQLException {
        String sql = "INSERT INTO products (product_name, description, unit_price, stock_quantity, category, is_available) VALUES (?, ?, ?, ?, ?, ?) RETURNING product_id";
        try (Connection connection = DatabaseConnection.getConnection();
                PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, product.getProductName());
            statement.setString(2, product.getDescription());
            statement.setBigDecimal(3, product.getUnitPrice());
            statement.setInt(4, product.getStockQuantity());
            statement.setString(5, product.getCategory());
            statement.setBoolean(6, product.isAvailable());
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    product.setProductId(resultSet.getInt("product_id"));
                }
            }
        }
        return product;
    }

    public List<Product> getAllProducts() throws SQLException {
        String sql = "SELECT product_id, product_name, description, unit_price, stock_quantity, category, is_available FROM products ORDER BY product_id";
        List<Product> products = new ArrayList<>();
        try (Connection connection = DatabaseConnection.getConnection();
                Statement statement = connection.createStatement();
                ResultSet resultSet = statement.executeQuery(sql)) {
            while (resultSet.next()) {
                products.add(mapResultSetToProduct(resultSet));
            }
        }
        return products;
    }

    public Optional<Product> findProductById(int productId) throws SQLException {
        String sql = "SELECT product_id, product_name, description, unit_price, stock_quantity, category, is_available FROM products WHERE product_id = ?";
        try (Connection connection = DatabaseConnection.getConnection();
                PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, productId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    return Optional.of(mapResultSetToProduct(resultSet));
                }
            }
        }
        return Optional.empty();
    }

    public boolean updateProduct(Product product) throws SQLException {
        String sql = "UPDATE products SET product_name = ?, description = ?, unit_price = ?, stock_quantity = ?, category = ?, is_available = ?, updated_at = CURRENT_TIMESTAMP WHERE product_id = ?";
        try (Connection connection = DatabaseConnection.getConnection();
                PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, product.getProductName());
            statement.setString(2, product.getDescription());
            statement.setBigDecimal(3, product.getUnitPrice());
            statement.setInt(4, product.getStockQuantity());
            statement.setString(5, product.getCategory());
            statement.setBoolean(6, product.isAvailable());
            statement.setInt(7, product.getProductId());
            return statement.executeUpdate() > 0;
        }
    }

    public boolean deleteProduct(int productId) throws SQLException {
        String sql = "DELETE FROM products WHERE product_id = ?";
        try (Connection connection = DatabaseConnection.getConnection();
                PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, productId);
            return statement.executeUpdate() > 0;
        }
    }

    private Product mapResultSetToProduct(ResultSet resultSet) throws SQLException {
        return new Product(resultSet.getInt("product_id"), resultSet.getString("product_name"),
                resultSet.getString("description"), resultSet.getBigDecimal("unit_price"),
                resultSet.getInt("stock_quantity"), resultSet.getString("category"),
                resultSet.getBoolean("is_available"));
    }
}