package co.edu.sena.rayocontrol.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

/**
 * Detalle de pedido. Cada item conecta un pedido con un producto existente.
 */
@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_item_id")
    private Integer orderItemId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private CustomerOrder customerOrder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @NotNull(message = "La cantidad es obligatoria.")
    @Min(value = 1, message = "La cantidad debe ser mayor o igual a 1.")
    @Column(name = "quantity", nullable = false)
    private Integer quantity = 1;

    @NotNull(message = "El precio unitario es obligatorio.")
    @Column(name = "unit_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal unitPrice = BigDecimal.ZERO;

    @Column(name = "subtotal", nullable = false, precision = 10, scale = 2)
    private BigDecimal subtotal = BigDecimal.ZERO;

    public OrderItem() {
    }

    public Integer getOrderItemId() {
        return orderItemId;
    }

    public CustomerOrder getCustomerOrder() {
        return customerOrder;
    }

    public void setCustomerOrder(CustomerOrder customerOrder) {
        this.customerOrder = customerOrder;
    }

    public Product getProduct() {
        return product;
    }

    public String getProductName() {
        return product == null ? "" : product.getProductName();
    }

    public void setProduct(Product product) {
        this.product = product;
        if (product != null) {
            this.unitPrice = product.getUnitPrice();
            recalculateSubtotal();
        }
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity == null ? 1 : quantity;
        recalculateSubtotal();
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice == null ? BigDecimal.ZERO : unitPrice;
        recalculateSubtotal();
    }

    public BigDecimal getSubtotal() {
        return subtotal == null ? BigDecimal.ZERO : subtotal;
    }

    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal == null ? BigDecimal.ZERO : subtotal;
    }

    public void recalculateSubtotal() {
        BigDecimal price = unitPrice == null ? BigDecimal.ZERO : unitPrice;
        int safeQuantity = quantity == null ? 1 : quantity;
        this.subtotal = price.multiply(BigDecimal.valueOf(safeQuantity));
    }

    @PrePersist
    public void prePersist() {
        recalculateSubtotal();
    }

    @PreUpdate
    public void preUpdate() {
        recalculateSubtotal();
    }
}
