package co.edu.sena.rayocontrol.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import co.edu.sena.rayocontrol.model.CustomerOrder;
import co.edu.sena.rayocontrol.model.Product;
import co.edu.sena.rayocontrol.repository.CustomerOrderRepository;
import java.math.BigDecimal;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

/**
 * Pruebas unitarias del modulo de pedidos.
 */
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
    @Mock
    private CustomerOrderRepository customerOrderRepository;

    @Mock
    private ProductService productService;

    @InjectMocks
    private OrderService orderService;

    @Test
    void createOrderWithProductCalculatesTotalAmount() {
        Product product = new Product(1, "Pechuga gratinada", "Plato a la carta", new BigDecimal("22000.00"), 12, "Main Course", true);
        when(productService.findById(1)).thenReturn(product);
        when(customerOrderRepository.save(any(CustomerOrder.class))).thenAnswer(invocation -> invocation.getArgument(0));

        CustomerOrder order = orderService.createOrder("Cliente mostrador", "2", 1, 2);

        assertEquals("Cliente mostrador", order.getCustomerName());
        assertEquals(1, order.getItems().size());
        assertEquals(new BigDecimal("44000.00"), order.getTotalAmount());
    }

    @Test
    void createOrderRejectsQuantityLowerThanOne() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class,
                () -> orderService.createOrder("Cliente mostrador", "2", 1, 0));

        assertEquals("La cantidad debe ser mayor o igual a 1.", exception.getMessage());
    }

    @Test
    void createOrderRejectsEmptyCustomerName() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class,
                () -> orderService.createOrder(" ", "2", 1, 1));

        assertEquals("El nombre del cliente o mesa es obligatorio.", exception.getMessage());
    }
}