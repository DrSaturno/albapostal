# Alba Postal HTML — Setup

## Estructura
```
alba-postal-html/
├── index.html
├── contacto.html
├── sucursales.html
├── servicios/
│   ├── logistica-ecommerce.html
│   ├── servicio-postal.html
│   ├── agentes-carga.html
│   └── envios.html
├── css/styles.css
├── js/components.js
├── js/main.js
└── images/       ← copiar desde albapostal/alba-postal-web/public/
```

## Paso 1 — Copiar imágenes
Copiar todo el contenido de:
`albapostal/alba-postal-web/public/`

Dentro de:
`alba-postal-html/`

Debe quedar:
- `alba-postal-html/images/` (con todas las imágenes)
- `alba-postal-html/logo.png`
- `alba-postal-html/logo2.png`

## Paso 2 — Deploy en Netlify (recomendado para HTML puro)
1. Ir a netlify.com → Add new site → Deploy manually
2. Arrastrar la carpeta `alba-postal-html/` completa
3. Listo — URL disponible al instante

## Paso 3 — Deploy en Vercel
1. Subir `alba-postal-html/` a un repo de GitHub
2. Importar desde Vercel
3. Framework: Other (sin build)
4. Root directory: `alba-postal-html/`
