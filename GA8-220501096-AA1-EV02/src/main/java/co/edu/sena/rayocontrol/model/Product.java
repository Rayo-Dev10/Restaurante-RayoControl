package co.edu.sena.rayocontrol.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Entidad JPA que representa un producto del menu almacenado en la tabla
 * products.
 */
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer productId;
    @NotBlank(message = "El nombre del producto es obligatorio.")
    @Column(name = "product_name", nullable = false, length = 100)
    private String productName;
    @Column(name = "description", length = 255)
    private String description;
    @NotNull(message = "El precio unitario es obligatorio.")
    @PositiveOrZero(message = "El precio unitario no puede ser negativo.")
    @Column(name = "unit_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal unitPrice;
    @NotNull(message = "La cantidad en inventario es obligatoria.")
    @Min(value = 0, message = "La cantidad en inventario no puede ser negativa.")
    @Column(name = "stock_quantity", nullable = false)
    private Integer stockQuantity = 0;
    @NotBlank(message = "La categoria es obligatoria.")
    @Column(name = "category", nullable = false, length = 80)
    private String category;
    @Column(name = "is_available", nullable = false)
    private boolean available = true;
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    public Product() {
    }

    public Product(Integer productId, String productName, String description, BigDecimal unitPrice,
            Integer stockQuantity, String category, boolean available) {
        this.productId = productId;
        this.productName = productName;
        this.description = description;
        this.unitPrice = unitPrice;
        this.stockQuantity = stockQuantity;
        this.category = category;
        this.available = available;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = normalizeText(productName);
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = normalizeText(description);
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    public Integer getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity == null ? 0 : stockQuantity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = normalizeText(category);
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getStatusText() {
        return available ? "Si" : "No";
    }

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
        if (stockQuantity == null) {
            stockQuantity = 0;
        }
    }

    @PreUpdate
    public void preUpdate() {
        updatedAt = LocalDateTime.now();
        if (stockQuantity == null) {
            stockQuantity = 0;
        }
    }

    private String normalizeText(String value) {
        return value == null ? null : value.trim();
    }
}
