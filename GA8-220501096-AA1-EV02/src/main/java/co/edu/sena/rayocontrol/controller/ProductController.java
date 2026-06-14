package co.edu.sena.rayocontrol.controller;

import co.edu.sena.rayocontrol.model.Product;
import co.edu.sena.rayocontrol.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

/**
 * Controlador web del modulo de productos. Reemplaza el servlet de EV02 usando
 * Spring MVC.
 */
@Controller
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public String listProducts(@RequestParam(value = "search", required = false) String search, Model model) {
        model.addAttribute("products", productService.findAll(search));
        model.addAttribute("search", search == null ? "" : search.trim());
        return "products/list";
    }

    @GetMapping("/new")
    public String showCreateForm(Model model) {
        model.addAttribute("product", new Product());
        model.addAttribute("pageTitle", "Nuevo producto");
        return "products/form";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Integer id, Model model) {
        model.addAttribute("product", productService.findById(id));
        model.addAttribute("pageTitle", "Editar producto");
        return "products/form";
    }

    @PostMapping("/save")
    public String saveProduct(@Valid @ModelAttribute("product") Product product, BindingResult bindingResult,
            Model model, RedirectAttributes redirectAttributes) {
        if (bindingResult.hasErrors()) {
            model.addAttribute("pageTitle", product.getProductId() == null ? "Nuevo producto" : "Editar producto");
            return "products/form";
        }
        productService.save(product);
        redirectAttributes.addFlashAttribute("successMessage", "Producto guardado correctamente.");
        return "redirect:/products";
    }

    @PostMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Integer id, RedirectAttributes redirectAttributes) {
        productService.deleteById(id);
        redirectAttributes.addFlashAttribute("successMessage", "Producto eliminado correctamente.");
        return "redirect:/products";
    }
}
