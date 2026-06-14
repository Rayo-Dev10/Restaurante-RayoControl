package co.edu.sena.rayocontrol.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.NotBlank;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Entidad JPA que representa un pedido del restaurante.
 * Integra el modulo de pedidos con el modulo de productos.
 */
@Entity
@Table(name = "customer_orders")
public class CustomerOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer orderId;

    @NotBlank(message = "El nombre del cliente o mesa es obligatorio.")
    @Column(name = "customer_name", nullable = false, length = 100)
    private String customerName;

    @Column(name = "table_number", length = 20)
    private String tableNumber;

    @Column(name = "order_status", nullable = false, length = 30)
    private String orderStatus = "REGISTRADO";

    @Column(name = "total_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalAmount = BigDecimal.ZERO;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "customerOrder", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items = new ArrayList<>();

    public CustomerOrder() {
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = normalizeText(customerName);
    }

    public String getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(String tableNumber) {
        this.tableNumber = normalizeText(tableNumber);
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = normalizeText(orderStatus);
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount == null ? BigDecimal.ZERO : totalAmount;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items == null ? new ArrayList<>() : items;
    }

    public void addItem(Product product, Integer quantity) {
        OrderItem item = new OrderItem();
        item.setCustomerOrder(this);
        item.setProduct(product);
        item.setQuantity(quantity);
        item.setUnitPrice(product.getUnitPrice());
        item.recalculateSubtotal();
        this.items.add(item);
        recalculateTotal();
    }

    public void recalculateTotal() {
        this.totalAmount = items.stream()
                .map(OrderItem::getSubtotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    @Transient
    public String getDisplayName() {
        if (tableNumber == null || tableNumber.isBlank()) {
            return customerName;
        }
        return customerName + " - Mesa " + tableNumber;
    }

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
        if (orderStatus == null || orderStatus.isBlank()) {
            orderStatus = "REGISTRADO";
        }
        recalculateTotal();
    }

    @PreUpdate
    public void preUpdate() {
        updatedAt = LocalDateTime.now();
        recalculateTotal();
    }

    private String normalizeText(String value) {
        return value == null ? null : value.trim();
    }
}
