# Mauricio Quezada — Portafolio de automatización

Sitio estático para GitHub Pages, en español, inglés y francés. Sin compilación ni dependencias de JavaScript externas.

Galería técnica, resumen de áreas de formación y certificados en carrusel sin contadores públicos. Las herramientas se agrupan en siete bloques compactos con iconos decorativos y listas desplegables. El carrusel se detiene con el cursor, el foco, la pestaña oculta o la sección fuera de pantalla. Respeta movimiento reducido y permite pausar, navegar y desplegar todos los documentos.

El perfil destaca la experiencia principal en Siemens, el trabajo multimarca y la integración entre programación de procesos, instrumentación y diseño eléctrico. Instrumentación distingue nivel, presión, temperatura, caudal y pesaje; agrupa fabricantes de procesos, pesaje, sensores e interfaces de señales. Los relés de seguridad tienen un bloque independiente, con énfasis en Pilz y ReeR. Diseño eléctrico incluye armarios, esquemas de control y potencia, motores, variadores, arrancadores y servos. JUMO queda fuera por indicación del propietario.

Visión por ordenador distingue la familiaridad con fabricantes de los conocimientos en desarrollo con OpenCV, YOLO y redes neuronales durante el máster. Estas menciones no representan certificaciones adicionales. El contador de software excluye los fabricantes de equipos.

La portada utiliza la foto proporcionada por Mauricio y destaca la descarga de su CV actual en francés. La galería presenta una selección de trabajos de diseño, implementación, puesta en marcha y mantenimiento.

## Editar el contenido

| Archivo | Contenido |
| --- | --- |
| `index.html` | Estructura, enlaces, botones y símbolos SVG locales |
| `css/style.css` | Estilo base y adaptación de la primera versión |
| `css/enhancements.css` | Mejoras visuales y controles de esta versión |
| `js/script.js` | Traducciones, filtros, menú y visor |
| `js/gallery-data.js` | Categorías, rutas y títulos de imágenes |
| `js/gallery-media.js` | Rutas y dimensiones de miniaturas |
| `assets/gallery/` | Imágenes originales |
| `assets/thumbs/` | Miniaturas WebP |
| `assets/CV_Mauricio_Quezada.pdf` | CV original |
| `assets/image.png` | Foto de perfil proporcionada por Mauricio |
| `assets/icons/` | SVG Siemens iX y licencia MIT |
| `css/portfolio.css` | Certificados, distintivo y herramientas |
| `js/portfolio.js` | Herramientas, nuevas traducciones y carrusel |
| `js/certificates-data.js` | Título, entidad, fecha, tipo, PDF y vista previa |
| `js/brands-data.js` | Iconos locales y procedencia |
| `assets/rename-map.json` | Correspondencia de nombres originales y normalizados |

## Añadir imágenes o certificados

1. Usa nombres en minúsculas, sin espacios ni acentos, con guiones: `01-programacion-plc-en-tia-portal.png` o `2025-03-24-siemens-wincc-unified-v19.pdf`.
2. Guarda el original en `assets/gallery/<categoria>/` o `assets/certificates/`. `certificates` es correcto en inglés.
3. Añade una entrada al manifiesto correspondiente. Para certificados usa una fecha ISO (`YYYY-MM-DD` o `YYYY-MM`), un identificador único y un tipo: `professional`, `course`, `attendance` o `language`. Conserva la precisión de fecha del documento.
4. Genera miniaturas con `python tools/generate-media.py`. Requiere Pillow y pypdfium2. Los originales no se modifican.
5. Comprueba la página y sube los archivos. Los certificados se incorporan al carrusel sin mostrar una cantidad total.

Al reemplazar el CV, actualiza también el parámetro `v` de sus tres enlaces en `index.html` para evitar descargas de una versión almacenada en caché. Ese parámetro corresponde a los primeros 12 caracteres del SHA-256 del PDF. Aplica el mismo criterio a los enlaces de `css/portfolio.css`, `js/script.js`, `js/brands-data.js` y `js/portfolio.js` si modificas esos archivos.

La copia duplicada de AutoCAD N3 se conserva como `.duplicate.pdf`, pero no se muestra dos veces. Los títulos y fechas proceden de los documentos. Autodesk Certified Professional: AutoCAD se presenta con su fecha histórica (2020), sin afirmar una vigencia actual.

## Vista local y publicación

Ejecuta `python -m http.server 8000` desde esta carpeta y abre `http://localhost:8000`. En GitHub Pages publica la rama `main`, carpeta raíz `/`. Las rutas son relativas. Google Fonts es el único recurso de presentación externo; existen alternativas tipográficas locales.

## Iconos y licencia

Iconos de [Siemens iX](https://github.com/siemens/ix-icons), versión 3.4.0, bajo licencia MIT. Conserva `assets/icons/LICENSE-SIEMENS-IX.txt` al redistribuir. La página utiliza solo un conjunto de símbolos locales; los colores se adaptan a la interfaz. El favicon MQ pertenece a este proyecto.

Iconos de fabricantes en `assets/brands/`, con sus URL de origen en `assets/brands/sources.json`. Las marcas pertenecen a sus titulares y se usan para identificar herramientas, sin indicar patrocinio ni certificación. Schneider Electric procede de [Simple Icons](https://github.com/simple-icons/simple-icons), CC0; los derechos de marca siguen perteneciendo a su titular. Si falta un icono se muestra un símbolo de categoría Siemens iX junto al nombre completo.

Cuando el manifiesto contiene `label`, se usa una etiqueta legible como alternativa al icono. WinCC se identifica en la cabecera con una etiqueta tipográfica, no con un logotipo oficial recreado. IDS conserva su nombre en la lista y una etiqueta IDS en las miniaturas.

Familias de seguridad contrastadas con [Rockwell Guardmaster](https://www.rockwellautomation.com/en-gb/products/hardware/allen-bradley/safety-products/safety-relays/guardmaster-safety-relays.html), [Schneider Harmony XPS / Preventa](https://www.se.com/es/es/product-range/65900-harmony-xps/), [Pilz](https://www.pilz.com/en-GB/products/relay-modules/safety-relays-protection-relays) y [ReeR](https://int.reersafety.com/product-category/safety-controllers-and-interfaces/interfaces/page/2/). No se atribuyen al propietario modelos concretos que no haya indicado.

Nombres de productos contrastados con [AVEVA](https://www.aveva.com/en/perspectives/blog/citect-scada-becomes-aveva-plant-scada/) y [Rockwell Automation](https://www.rockwellautomation.com/en-ca/products/software/factorytalk/designsuite/studio-5000.html).

## Próxima mejora editorial

Desarrollar tres casos de estudio: problema, responsabilidad personal, arquitectura, herramientas y resultado medible. La galería usa las descripciones del propietario sin inventar métricas ni resultados.
