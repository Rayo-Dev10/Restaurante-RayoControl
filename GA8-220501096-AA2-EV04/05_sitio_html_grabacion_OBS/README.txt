GA8-220501096-AA2-EV04 - HTML grabable para OBS con assets numéricos

VERSIÓN ITERADA
Esta versión está preparada para reemplazar directamente las 30 imágenes generadas en Nano Banana Pro.

PASOS
1. Descomprime este ZIP.
2. Entra a la carpeta assets.
3. Reemplaza los archivos vacíos 1.png, 2.png, 3.png ... 30.png por tus imágenes generadas.
4. Conserva exactamente los nombres numéricos: 1.png, 2.png, 3.png, etc.
5. Abre index.html con Live Server en VS Code o directamente en Chrome/Edge.
6. Presiona F para pantalla completa.
7. Presiona G para grabar o detener el audio de la lámina actual.
8. Presiona A para probar el audio de la lámina actual.
9. Cuando todo esté listo, abre OBS, inicia grabación y presiona Enter.
10. Enter reproduce todo desde la portada como si fuera el video final.
11. Esc detiene la reproducción automática.

CONTROLES
- Flecha derecha o espacio: avanzar manualmente.
- Flecha izquierda: retroceder manualmente.
- G: iniciar/detener grabación de audio de la lámina actual.
- A: reproducir audio de la lámina actual.
- Enter: reproducir todo desde portada.
- Esc: detener reproducción automática.
- F: pantalla completa.
- H: ayuda.

CORRECCIONES DE ESTA VERSIÓN
- Las imágenes ahora se buscan directamente en assets/1.png ... assets/30.png.
- Se agregaron 30 placeholders .png vacíos para reemplazo directo.
- Si una imagen está vacía o falla, se usa un respaldo SVG local de assets/fallback.
- Se eliminaron láminas metacognitivas como fases del video.
- La presentación quedó en 11 láminas centradas en el contenido para audiencia.
- Se agregaron animaciones variadas: entradas laterales, zoom, giro, balanceo, vibración sutil, flotación, perspectiva 3D y respiración visual.
- Se evitó el efecto de pantalla negra durante transiciones.
- Enter queda reservado únicamente para reproducción automática completa.
- El audio se guarda en la lámina donde inició la grabación.

VERIFICACIÓN DE IMÁGENES
Puedes ejecutar en PowerShell:
.\verificar_imagenes_assets.ps1

Ese script muestra si cada PNG está vacío o si ya fue reemplazado por una imagen válida.
