package co.edu.sena.rayocontrol.app;

import co.edu.sena.rayocontrol.dao.ProductDao;
import co.edu.sena.rayocontrol.model.Product;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

/**
 * Console interface for testing the product CRUD module.
 */
public class Main {

    private static final Scanner SCANNER = new Scanner(System.in);
    private static final ProductDao PRODUCT_DAO = new ProductDao();

    public static void main(String[] args) {
        int option;

        do {
            printMenu();
            option = readInteger("Select an option: ");
            processOption(option);
        } while (option != 6);

        System.out.println("Application closed.");
    }

    private static void printMenu() {
        System.out.println("\n=== Restaurante-RayoControl | Product Module ===");
        System.out.println("1. Create product");
        System.out.println("2. List products");
        System.out.println("3. Find product by ID");
        System.out.println("4. Update product");
        System.out.println("5. Delete product");
        System.out.println("6. Exit");
    }

    private static void processOption(int option) {
        try {
            switch (option) {
                case 1 -> createProduct();
                case 2 -> listProducts();
                case 3 -> findProductById();
                case 4 -> updateProduct();
                case 5 -> deleteProduct();
                case 6 -> { }
                default -> System.out.println("Invalid option. Try again.");
            }
        } catch (SQLException exception) {
            System.out.println("Database error: " + exception.getMessage());
        }
    }

    private static void createProduct() throws SQLException {
        Product product = readProductData(false);
        Product createdProduct = PRODUCT_DAO.createProduct(product);
        System.out.println("Product created with ID: " + createdProduct.getProductId());
    }

    private static void listProducts() throws SQLException {
        List<Product> products = PRODUCT_DAO.getAllProducts();

        if (products.isEmpty()) {
            System.out.println("No products registered.");
            return;
        }

        products.forEach(System.out::println);
    }

    private static void findProductById() throws SQLException {
        int productId = readInteger("Product ID: ");
        Optional<Product> product = PRODUCT_DAO.findProductById(productId);
        System.out.println(product.map(Product::toString).orElse("Product not found."));
    }

    private static void updateProduct() throws SQLException {
        int productId = readInteger("Product ID to update: ");

        if (PRODUCT_DAO.findProductById(productId).isEmpty()) {
            System.out.println("Product not found.");
            return;
        }

        Product product = readProductData(true);
        product.setProductId(productId);

        boolean updated = PRODUCT_DAO.updateProduct(product);
        System.out.println(updated ? "Product updated successfully." : "Product was not updated.");
    }

    private static void deleteProduct() throws SQLException {
        int productId = readInteger("Product ID to delete: ");
        boolean deleted = PRODUCT_DAO.deleteProduct(productId);
        System.out.println(deleted ? "Product deleted successfully." : "Product not found.");
    }

    private static Product readProductData(boolean updating) {
        if (updating) {
            System.out.println("Enter the new product data.");
        }

        String productName = readText("Product name: ");
        String description = readText("Description: ");
        BigDecimal unitPrice = readBigDecimal("Unit price: ");
        int stockQuantity = readInteger("Stock quantity: ");
        String category = readText("Category: ");
        boolean available = readBoolean("Available? (true/false): ");

        return new Product(productName, description, unitPrice, stockQuantity, category, available);
    }

    private static String readText(String message) {
        System.out.print(message);
        return SCANNER.nextLine().trim();
    }

    private static int readInteger(String message) {
        while (true) {
            try {
                System.out.print(message);
                return Integer.parseInt(SCANNER.nextLine().trim());
            } catch (NumberFormatException exception) {
                System.out.println("Enter a valid integer number.");
            }
        }
    }

    private static BigDecimal readBigDecimal(String message) {
        while (true) {
            try {
                System.out.print(message);
                return new BigDecimal(SCANNER.nextLine().trim());
            } catch (NumberFormatException exception) {
                System.out.println("Enter a valid decimal number.");
            }
        }
    }

    private static boolean readBoolean(String message) {
        while (true) {
            System.out.print(message);
            String value = SCANNER.nextLine().trim().toLowerCase();

            if ("true".equals(value) || "false".equals(value)) {
                return Boolean.parseBoolean(value);
            }

            System.out.println("Enter true or false.");
        }
    }
}
