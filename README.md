# Mauricio Quezada — Portafolio de automatización

Sitio estático para GitHub Pages, en español, inglés y francés. Sin compilación ni dependencias de JavaScript externas.

37 imágenes técnicas, 24 certificados distintos, 29 herramientas y 9 fabricantes. El carrusel se detiene con el cursor, el foco, la pestaña oculta o la sección fuera de pantalla. Respeta movimiento reducido y permite pausar, navegar y desplegar todos los documentos.

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
5. Comprueba la página y sube los archivos. Las cifras de certificados y herramientas se calculan a partir del contenido.

La copia duplicada de AutoCAD N3 se conserva como `.duplicate.pdf`, pero no se muestra dos veces. Los títulos y fechas proceden de los documentos. Autodesk Certified Professional: AutoCAD se presenta con su fecha histórica (2020), sin afirmar una vigencia actual.

## Vista local y publicación

Ejecuta `python -m http.server 8000` desde esta carpeta y abre `http://localhost:8000`. En GitHub Pages publica la rama `main`, carpeta raíz `/`. Las rutas son relativas. Google Fonts es el único recurso de presentación externo; existen alternativas tipográficas locales.

## Iconos y licencia

Iconos de [Siemens iX](https://github.com/siemens/ix-icons), versión 3.4.0, bajo licencia MIT. Conserva `assets/icons/LICENSE-SIEMENS-IX.txt` al redistribuir. La página utiliza solo un conjunto de símbolos locales; los colores se adaptan a la interfaz. El favicon MQ pertenece a este proyecto.

Iconos de fabricantes en `assets/brands/`, con sus URL de origen en `assets/brands/sources.json`. Las marcas pertenecen a sus titulares y se usan para identificar herramientas, sin indicar patrocinio ni certificación. Schneider Electric procede de [Simple Icons](https://github.com/simple-icons/simple-icons), CC0; los derechos de marca siguen perteneciendo a su titular. Si falta un icono se muestra un símbolo de categoría Siemens iX junto al nombre completo.

Nombres de productos contrastados con [AVEVA](https://www.aveva.com/en/perspectives/blog/citect-scada-becomes-aveva-plant-scada/) y [Rockwell Automation](https://www.rockwellautomation.com/en-ca/products/software/factorytalk/designsuite/studio-5000.html).

## Próxima mejora editorial

Desarrollar tres casos de estudio: problema, responsabilidad personal, arquitectura, herramientas y resultado medible. La galería usa las descripciones del propietario sin inventar métricas ni resultados.
