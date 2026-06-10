package co.edu.sena.rayocontrol.repository;

import co.edu.sena.rayocontrol.model.CustomerOrder;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

/** Repositorio JPA encargado del acceso a datos de pedidos. */
public interface CustomerOrderRepository extends JpaRepository<CustomerOrder, Integer> {
    List<CustomerOrder> findAllByOrderByOrderIdDesc();

    @EntityGraph(attributePaths = {"items", "items.product"})
    Optional<CustomerOrder> findByOrderId(Integer orderId);
}