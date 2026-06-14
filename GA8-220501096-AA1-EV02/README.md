# Restaurante-RayoControl - GA8-220501096-AA1-EV02

Evidencia: Modulos integrados.

Esta entrega presenta los modulos integrados del proyecto Restaurante-RayoControl, desarrollados con Java 21, Spring Boot, Thymeleaf, Spring Data JPA, PostgreSQL y Maven.

## Modulos integrados

- Productos: administracion de productos del menu del restaurante.
- Pedidos: registro de pedidos asociados a productos existentes.
- Integracion producto-pedido: cada pedido se construye a partir de un producto registrado, su cantidad, precio unitario y subtotal.

## Estructura principal

- `src/main/java`: codigo fuente Java organizado por capas.
- `src/main/resources/templates`: vistas web Thymeleaf.
- `src/main/resources/static`: recursos estaticos.
- `database/schema.sql`: script de base de datos.
- `src/test/java`: pruebas unitarias.
- `DOCUMENTO_TECNICO.md`: documentacion tecnica del sistema.
- `AMBIENTE_DESARROLLO_PRUEBAS.md`: ambiente de desarrollo y pruebas.
- `ACTA_PRUEBAS_ACEPTACION.md`: acta de pruebas y aceptacion.

## Ejecucion

```bash
mvn clean package
mvn test
mvn spring-boot:run
```

## Solucion aplicada (correccion de build)

El error de compilacion original:

```
illegal character: '\ufeff'
class, interface, enum, or record expected
```

se producia porque el archivo `RayoControlApplication.java` se guardo con codificacion
**UTF-8 con BOM** (Byte Order Mark). El compilador `javac` interpreta el caracter BOM
(`\ufeff`) al inicio del archivo como un caracter ilegal antes de la declaracion del
paquete, lo que provoca un fallo en cascada de "class, interface, enum, or record expected".

**Correccion:** se regrabo el archivo en **UTF-8 sin BOM**. Adicionalmente, se agrego
configuracion explicita de `encoding=UTF-8` en `maven-compiler-plugin` y
`maven-resources-plugin` dentro de `pom.xml` para evitar que el problema se repita en
otros archivos fuente o de recursos, independientemente de la configuracion regional del
editor o sistema operativo.

### Recomendacion para evitar el problema a futuro (VS Code)

En `.vscode/settings.json` (no incluido en el repo por `.gitignore`):

```json
{
  "files.encoding": "utf8"
}
```

Evitar la opcion "UTF-8 with BOM" al guardar archivos `.java`.
