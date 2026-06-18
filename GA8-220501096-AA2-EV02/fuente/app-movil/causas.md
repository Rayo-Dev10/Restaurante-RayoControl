# Posibles causas de por qué la app no corre

## Alcance de la revisión

Se revisaron los archivos principales del proyecto (`package.json`, `index.html`, `src/main.js`, vistas, componentes, datos y servicios) y además se ejecutaron estas validaciones:

- `npm run build`
- `npm run test`
- `node -v`

Resultado resumido:

- `npm run build`: falla
- `npm run test`: pasa, 9 de 9 pruebas
- `node -v`: `v22.16.0`

## Causas confirmadas

### 1. Falta la exportación `ProductsView`

**Evidencia**

- En [src/main.js](C:/Users/Rayo/Documents/GitHub/Restaurante-RayoControl/GA8-220501096-AA2-EV02/app-movil/src/main.js) se importa `ProductsView`.
- El archivo [src/views/ProductsView.js](C:/Users/Rayo/Documents/GitHub/Restaurante-RayoControl/GA8-220501096-AA2-EV02/app-movil/src/views/ProductsView.js) está vacío.
- El comando `npm run build` falla con el error: `"ProductsView" is not exported by "src/views/ProductsView.js"`.

**Por qué impide que corra**

Vite no puede resolver esa importación, por lo tanto la aplicación no compila ni levanta correctamente.

**Posible solución**

Crear o restaurar la función `ProductsView` y exportarla correctamente desde `src/views/ProductsView.js`, o eliminar la importación y la ruta si esa vista no se va a usar.

## Posibles causas adicionales

### 2. Se está intentando ejecutar como APK, pero el proyecto actual no tiene estructura móvil real

**Evidencia**

- En [src/views/AboutView.js](C:/Users/Rayo/Documents/GitHub/Restaurante-RayoControl/GA8-220501096-AA2-EV02/app-movil/src/views/AboutView.js) se menciona `Capacitor`, `Android Studio` y `BlueStacks`.
- En el proyecto revisado no aparecen archivos típicos de Capacitor o Android como `capacitor.config.*`, carpeta `android/` o configuración nativa.

**Por qué podría impedir que corra**

Si se está intentando abrir o compilar esto como aplicación móvil nativa, el proyecto no tiene la estructura necesaria para hacerlo. Lo que hay ahora es una app web con Vite.

**Posible solución**

Decidir si el objetivo es:

- correrla como web con `npm run dev`, o
- convertirla en móvil real agregando Capacitor, inicializando plataforma Android y generando el proyecto nativo.

### 3. Dependencias no instaladas en otra máquina o en otro intento de ejecución

**Evidencia**

- El proyecto depende de `vite` y `vitest` definidos en [package.json](C:/Users/Rayo/Documents/GitHub/Restaurante-RayoControl/GA8-220501096-AA2-EV02/app-movil/package.json).
- En esta revisión sí existe `node_modules`, pero en otro entorno eso podría no estar instalado.

**Por qué podría impedir que corra**

Sin instalar dependencias, comandos como `npm run dev` o `npm run build` fallan inmediatamente.

**Posible solución**

Ejecutar la instalación de dependencias antes de arrancar la app, usando el mismo gestor de paquetes del proyecto. Como existe `pnpm-lock.yaml`, lo más consistente sería usar `pnpm install`.

### 4. Se está abriendo `index.html` directamente en el navegador en vez de usar el servidor de Vite

**Evidencia**

- En [index.html](C:/Users/Rayo/Documents/GitHub/Restaurante-RayoControl/GA8-220501096-AA2-EV02/app-movil/index.html) el script se carga como módulo desde `/src/main.js`.

**Por qué podría impedir que corra**

Ese tipo de carga está pensada para ejecutarse con Vite. Si se abre el archivo con doble clic usando `file://`, es común que los módulos no se resuelvan como se espera.

**Posible solución**

Levantar la app con el servidor de desarrollo del proyecto en vez de abrir el HTML directamente.

### 5. Diferencias de versión de Node en otros equipos

**Evidencia**

- En esta máquina la versión es `v22.16.0`, que sí es compatible con el stack actual.
- El archivo [package.json](C:/Users/Rayo/Documents/GitHub/Restaurante-RayoControl/GA8-220501096-AA2-EV02/app-movil/package.json) no fija una versión mínima de Node en `engines`.

**Por qué podría impedir que corra**

En otros equipos, una versión vieja de Node puede hacer que Vite no arranque o falle durante instalación y build.

**Posible solución**

Documentar una versión mínima recomendada de Node y usar una versión moderna y estable en todos los entornos.

## Conclusión

La causa principal y comprobada en este proyecto es la falta de exportación de `ProductsView`, porque actualmente `src/views/ProductsView.js` está vacío y eso rompe el build. Las pruebas unitarias sí pasan, así que el problema no parece estar en los servicios probados sino en el ensamblaje de la interfaz.
