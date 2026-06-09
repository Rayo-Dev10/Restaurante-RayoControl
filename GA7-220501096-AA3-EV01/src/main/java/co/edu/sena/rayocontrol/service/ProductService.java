package co.edu.sena.rayocontrol.service;

import co.edu.sena.rayocontrol.model.Product;
import co.edu.sena.rayocontrol.repository.ProductRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Servicio del modulo de productos. Centraliza reglas basicas antes de acceder
 * al repositorio.
 */
@Service
@Transactional
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Transactional(readOnly = true)
    public List<Product> findAll(String searchTerm) {
        if (searchTerm == null || searchTerm.trim().isEmpty()) {
            return productRepository.findAllByOrderByProductIdAsc();
        }
        return productRepository.findByProductNameContainingIgnoreCaseOrderByProductIdAsc(searchTerm.trim());
    }

    @Transactional(readOnly = true)
    public Product findById(Integer productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("No existe un producto con el id: " + productId));
    }

    public Product save(Product product) {
        if (product.getStockQuantity() == null) {
            product.setStockQuantity(0);
        }
        return productRepository.save(product);
    }

    public void deleteById(Integer productId) {
        if (!productRepository.existsById(productId)) {
            throw new IllegalArgumentException("No existe un producto con el id: " + productId);
        }
        productRepository.deleteById(productId);
    }
}