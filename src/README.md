# Laura Rodríguez Fotografía — AstroJS

Sitio web minimalista y glamuroso para sesiones de fotografía profesional.

## Stack

- **Framework:** [Astro v6](https://astro.build)
- **Estilos:** CSS puro con variables (sin Tailwind, sin preprocesador)
- **Fuentes:** Cormorant Garamond + Jost (Google Fonts)
- **Páginas:** SSG (Static Site Generation) — cero JS innecesario

---

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev       # → http://localhost:4321

# Build de producción
npm run build     # → dist/

# Preview del build
npm run preview
```

---

## Estructura del proyecto

```
src/
├── data/
│   └── site.ts           ← ✏️  EDITA AQUÍ todo el contenido del sitio
├── layouts/
│   └── Layout.astro      ← HTML base, SEO, cursor animado
├── components/
│   ├── Nav.astro          ← Navegación sticky + menú mobile
│   ├── Hero.astro         ← Sección hero principal
│   ├── Stats.astro        ← Barra de estadísticas
│   ├── Services.astro     ← 6 tipos de sesiones
│   ├── GalleryPreview.astro ← Galería con filtros (homepage)
│   ├── About.astro        ← Sección "Sobre mí"
│   ├── Booking.astro      ← Formulario + plataformas de reserva
│   └── Footer.astro       ← Redes sociales + footer
├── pages/
│   ├── index.astro        ← Homepage
│   └── galeria.astro      ← Página de galería completa + lightbox
├── styles/
│   └── global.css         ← Variables CSS y estilos base
public/
├── favicon.svg
├── robots.txt
└── images/               ← 📁 Coloca tus imágenes aquí
    ├── hero.jpg
    ├── laura-portrait.jpg
    └── gallery/
        ├── familia-1.jpg
        ├── bebes-1.jpg
        └── ...
```

---

## ✏️ Cómo personalizar el contenido

Abre **`src/data/site.ts`** y edita:

| Sección | Qué puedes cambiar |
|---|---|
| `SITE` | Nombre, tagline, teléfono, WhatsApp, email, stats |
| `ABOUT` | Cita y párrafos del "Sobre mí" |
| `SERVICES` | Nombre, ícono y descripción de cada servicio |
| `GALLERY_ITEMS` | Agrega/quita fotos de la galería |
| `BOOKING_PLATFORMS` | URLs de tus plataformas de reserva |
| `SOCIAL_LINKS` | URLs de tus redes sociales |

---

## 🖼️ Cómo agregar imágenes reales

### Imagen del Hero
En `src/components/Hero.astro`, reemplaza el bloque placeholder:
```astro
<!-- Antes (placeholder) -->
<p class="hero-img-label">Tu foto principal aquí</p>

<!-- Después (imagen real) -->
<img src="/images/hero.jpg" alt="Laura Rodríguez Fotografía" />
```

### Foto de perfil (About)
En `src/components/About.astro`:
```astro
<!-- Antes -->
<div class="about-photo-placeholder">Tu foto aquí</div>

<!-- Después -->
<img src="/images/laura-portrait.jpg" alt="Laura Rodríguez" />
```

### Galería
En `src/data/site.ts`, agrega `src` a cada item:
```ts
{ id: 'g1', category: 'bodas', label: 'Bodas', icon: '💍',
  src: '/images/gallery/bodas-1.jpg',   // ← agrega esto
  alt: 'Fotografía de boda', span: 'featured' },
```

---

## 📅 Plataformas de reserva recomendadas

| Plataforma | Ideal para | Plan gratuito |
|---|---|---|
| [Cal.com](https://cal.com) | Sincronización de calendarios | ✅ |
| [Pixieset Studio Manager](https://pixieset.com) | Contratos, facturas, galería | ✅ limitado |
| [Koalendar](https://koalendar.com) | Pagos Stripe integrados | ✅ |
| WhatsApp | Contacto directo | ✅ |

Actualiza los links en `src/data/site.ts` → `BOOKING_PLATFORMS`.

---

## 🚀 Deploy

### Netlify (recomendado)
```bash
npm run build
# Sube la carpeta dist/ a Netlify
# O conecta el repo en netlify.com → Build command: npm run build → Publish dir: dist
```

### Vercel
```bash
# Instala Vercel CLI
npm i -g vercel
vercel
```

### GitHub Pages
Añade al `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/tu-repo',
});
```

---

## 🎨 Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `--sage` | `#b5c9b0` | Bordes, detalles |
| `--sage-light` | `#d4e4cf` | Fondos secundarios |
| `--sage-pale` | `#eaf2e8` | Hover states |
| `--sage-mist` | `#f4f8f3` | Fondos suaves |
| `--sage-deep` | `#7a9e74` | Acentos, íconos |
| `--sage-ink` | `#4a6b45` | CTA buttons, nav |
| `--cream` | `#faf9f6` | Fondo principal |
| `--ink` | `#2c2c28` | Texto principal |

Todos los colores están en `src/styles/global.css` → `:root`.
