package co.edu.sena.rayocontrol.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Controlador inicial de la aplicacion. Conserva una pagina de entrada similar
 * a la evidencia anterior.
 */
@Controller
public class HomeController {
    @GetMapping("/")
    public String showHomePage() {
        return "index";
    }
}