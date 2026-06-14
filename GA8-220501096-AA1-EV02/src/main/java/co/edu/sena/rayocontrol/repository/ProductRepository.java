package co.edu.sena.rayocontrol.repository;

import co.edu.sena.rayocontrol.model.Product;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/** Repositorio JPA encargado del acceso a datos de productos en PostgreSQL. */
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAllByOrderByProductIdAsc();

    List<Product> findByProductNameContainingIgnoreCaseOrderByProductIdAsc(String productName);
}
