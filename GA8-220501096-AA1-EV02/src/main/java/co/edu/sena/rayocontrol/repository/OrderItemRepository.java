package co.edu.sena.rayocontrol.repository;

import co.edu.sena.rayocontrol.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

/** Repositorio JPA para los detalles de pedido. */
public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
}
