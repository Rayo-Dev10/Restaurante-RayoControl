package co.edu.sena.rayocontrol.service;

import co.edu.sena.rayocontrol.model.CustomerOrder;
import co.edu.sena.rayocontrol.model.Product;
import co.edu.sena.rayocontrol.repository.CustomerOrderRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Servicio del modulo de pedidos. Integra pedidos con productos registrados.
 */
@Service
@Transactional
public class OrderService {
    private final CustomerOrderRepository customerOrderRepository;
    private final ProductService productService;

    public OrderService(CustomerOrderRepository customerOrderRepository, ProductService productService) {
        this.customerOrderRepository = customerOrderRepository;
        this.productService = productService;
    }

    @Transactional(readOnly = true)
    public List<CustomerOrder> findAll() {
        return customerOrderRepository.findAllByOrderByOrderIdDesc();
    }

    @Transactional(readOnly = true)
    public CustomerOrder findById(Integer orderId) {
        return customerOrderRepository.findByOrderId(orderId)
                .orElseThrow(() -> new IllegalArgumentException("No existe un pedido con el id: " + orderId));
    }

    public CustomerOrder createOrder(String customerName, String tableNumber, Integer productId, Integer quantity) {
        if (customerName == null || customerName.trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre del cliente o mesa es obligatorio.");
        }
        if (productId == null) {
            throw new IllegalArgumentException("Debe seleccionar un producto.");
        }
        if (quantity == null || quantity < 1) {
            throw new IllegalArgumentException("La cantidad debe ser mayor o igual a 1.");
        }

        Product product = productService.findById(productId);
        if (!product.isAvailable()) {
            throw new IllegalArgumentException("El producto seleccionado no se encuentra disponible.");
        }

        CustomerOrder order = new CustomerOrder();
        order.setCustomerName(customerName);
        order.setTableNumber(tableNumber);
        order.setOrderStatus("REGISTRADO");
        order.addItem(product, quantity);

        return customerOrderRepository.save(order);
    }

    public void deleteById(Integer orderId) {
        if (!customerOrderRepository.existsById(orderId)) {
            throw new IllegalArgumentException("No existe un pedido con el id: " + orderId);
        }
        customerOrderRepository.deleteById(orderId);
    }
}