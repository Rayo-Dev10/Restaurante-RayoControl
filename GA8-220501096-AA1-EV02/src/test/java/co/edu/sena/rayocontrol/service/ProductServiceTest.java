package co.edu.sena.rayocontrol.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import co.edu.sena.rayocontrol.model.Product;
import co.edu.sena.rayocontrol.repository.ProductRepository;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

/**
 * Pruebas unitarias del modulo de productos.
 */
@ExtendWith(MockitoExtension.class)
class ProductServiceTest {
    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    void findAllWithoutSearchReturnsProductsOrderedById() {
        Product product = new Product(1, "Limonada natural", "Bebida fria", new BigDecimal("5000.00"), 10, "Beverage", true);
        when(productRepository.findAllByOrderByProductIdAsc()).thenReturn(List.of(product));

        List<Product> products = productService.findAll("");

        assertEquals(1, products.size());
        assertEquals("Limonada natural", products.get(0).getProductName());
        verify(productRepository).findAllByOrderByProductIdAsc();
    }

    @Test
    void findByIdReturnsExistingProduct() {
        Product product = new Product(1, "Menu ejecutivo", "Almuerzo completo", new BigDecimal("15000.00"), 20, "Lunch", true);
        when(productRepository.findById(1)).thenReturn(Optional.of(product));

        Product result = productService.findById(1);

        assertEquals("Menu ejecutivo", result.getProductName());
    }

    @Test
    void saveProductAssignsZeroStockWhenStockIsNull() {
        Product product = new Product(null, "Cafe", "Bebida caliente", new BigDecimal("3000.00"), null, "Beverage", true);
        when(productRepository.save(product)).thenReturn(product);

        Product saved = productService.save(product);

        assertEquals(0, saved.getStockQuantity());
        verify(productRepository).save(product);
    }
}
