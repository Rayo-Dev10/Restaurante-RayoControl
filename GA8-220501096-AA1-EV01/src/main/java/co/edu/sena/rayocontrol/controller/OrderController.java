package co.edu.sena.rayocontrol.controller;

import co.edu.sena.rayocontrol.service.OrderService;
import co.edu.sena.rayocontrol.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

/**
 * Controlador web del modulo de pedidos.
 */
@Controller
@RequestMapping("/orders")
public class OrderController {
    private final OrderService orderService;
    private final ProductService productService;

    public OrderController(OrderService orderService, ProductService productService) {
        this.orderService = orderService;
        this.productService = productService;
    }

    @GetMapping
    public String listOrders(Model model) {
        model.addAttribute("orders", orderService.findAll());
        return "orders/list";
    }

    @GetMapping("/new")
    public String showCreateForm(Model model) {
        model.addAttribute("products", productService.findAll(null));
        model.addAttribute("pageTitle", "Nuevo pedido");
        return "orders/form";
    }

    @PostMapping("/save")
    public String saveOrder(@RequestParam String customerName,
            @RequestParam(required = false) String tableNumber,
            @RequestParam Integer productId,
            @RequestParam Integer quantity,
            Model model,
            RedirectAttributes redirectAttributes) {
        try {
            orderService.createOrder(customerName, tableNumber, productId, quantity);
            redirectAttributes.addFlashAttribute("successMessage", "Pedido registrado correctamente.");
            return "redirect:/orders";
        } catch (IllegalArgumentException ex) {
            model.addAttribute("errorMessage", ex.getMessage());
            model.addAttribute("products", productService.findAll(null));
            model.addAttribute("pageTitle", "Nuevo pedido");
            model.addAttribute("customerName", customerName);
            model.addAttribute("tableNumber", tableNumber);
            model.addAttribute("productId", productId);
            model.addAttribute("quantity", quantity);
            return "orders/form";
        }
    }

    @GetMapping("/{id}")
    public String showDetail(@PathVariable Integer id, Model model) {
        model.addAttribute("customerOrder", orderService.findById(id));
        return "orders/detail";
    }

    @PostMapping("/delete/{id}")
    public String deleteOrder(@PathVariable Integer id, RedirectAttributes redirectAttributes) {
        orderService.deleteById(id);
        redirectAttributes.addFlashAttribute("successMessage", "Pedido eliminado correctamente.");
        return "redirect:/orders";
    }
}