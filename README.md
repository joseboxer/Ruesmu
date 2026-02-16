# Almacenes Ruesmu - Web

Página web moderna y profesional para **Almacenes Ruesmu**, almacén de materiales de construcción en Dos Hermanas (Sevilla).

## Contenido

- **Productos**: Cerámica, sanitarios, mamparas, placas de ducha, griferías, mobiliario y accesorios de baño
- **Ubicación**: C/. Cierzo, n.º 14 - Polígono Industrial Ciudad Blanca, Dos Hermanas
- **Contacto**: Teléfono 955 679 858

## Estructura del proyecto

```
Ruesmu/
├── index.html           # Página principal
├── css/
│   └── styles.css       # Estilos
├── js/
│   └── main.js          # Interactividad
├── images/
│   ├── logo.png         # Logo Ruesmu (header)
│   └── logo-footer.png  # Logo sin fondo (footer)
├── vendor/
│   └── font-awesome/     # Iconos (local)
│       ├── css/
│       └── webfonts/
└── README.md
```

**Recursos externos** (solo empresas robustas): Google Fonts, Facebook SDK. El resto (Font Awesome, etc.) está en el proyecto.

## Cómo ejecutar

1. Abre `index.html` directamente en el navegador, o
2. Usa un servidor local:
   ```bash
   cd /Users/josea/Ruesmu
   python3 -m http.server 8000
   ```
   Luego visita http://localhost:8000

## Personalización

- **Galería**: Las imágenes actuales son placeholders. Para usar tus fotos de [Facebook (Azulejos Ruesmu)](https://www.facebook.com/profile.php?id=100063700772108&sk=photos): descarga las fotos que quieras mostrar, guárdalas en `images/galeria/` y actualiza los `src` en la sección galería de `index.html`. El embed de Facebook muestra tu timeline en vivo.
- **Mapa**: El mapa usa OpenStreetMap. Para usar Google Maps, obtén el código de inserción desde [Google Maps](https://www.google.com/maps) (busca la dirección → Compartir → Insertar mapa).
- **Formulario de contacto**: Usa [Formspree](https://formspree.io). Crea una cuenta gratuita, crea un formulario y copia tu ID. En `index.html`, reemplaza `YOUR_FORM_ID` en el `action` del form por tu ID (ej: `action="https://formspree.io/f/xyzabcde"`).
- **SEO**: Cuando tengas el dominio definitivo, actualiza `og:url` y la URL en el JSON-LD de Schema.org en `index.html`.

## Tecnologías

- HTML5
- CSS3 (variables, Grid, Flexbox)
- JavaScript vanilla
- Fuentes: DM Serif Display, Outfit (Google Fonts)
