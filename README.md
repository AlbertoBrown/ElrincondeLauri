# El Rincón de Lauri - Instrucciones de Configuración

## 📋 Contenido del Proyecto

### Archivos HTML
- `index.html` - Página principal con testimonios
- `galeria.html` - Galería con lightbox y filtros
- `sobre-lauri.html` - Historia de la artista
- `contacto.html` - Formulario con integración de email
- `faq.html` - Preguntas frecuentes con acordeón

### Archivos CSS
- `styles.css` - Estilos globales (incluye loader, menú, lightbox, etc.)
- `landing.css` - Estilos específicos de la landing
- `galeria.css` - Estilos del grid de galería
- `sobre.css` - Estilos de la página sobre Lauri
- `contacto.css` - Estilos del formulario
- `faq.css` - Estilos de preguntas frecuentes

### Archivos JavaScript
- `main.js` - Funcionalidad principal (menú, scroll-top, animaciones)
- `lightbox.js` - Modal para ver imágenes en tamaño completo
- `gallery-filters.js` - Filtros por categoría y tamaño
- `form-handler.js` - Envío de formulario con confirmación
- `music-player.js` - Reproductor de música ambiente
- `faq-accordion.js` - Acordeón de preguntas frecuentes

---

## 🎨 Nuevas Funcionalidades Implementadas

### ✅ Mejoras de UX/UI
- **Loader inicial** - Spinner mientras carga la página
- **Menú hamburguesa** - Navegación responsive en móvil
- **Botón "Volver arriba"** - Aparece al hacer scroll
- **Animaciones fade-in** - Elementos aparecen suavemente
- **Cursor personalizado** - Forma de lápiz/pincel artístico

### ✅ Galería
- **Lightbox/Modal** - Ver imágenes en tamaño completo
- **Navegación con flechas** - Entre imágenes del lightbox
- **Filtros** - Por categoría (flores, corazones, naturaleza) y tamaño (A4/A3)
- **Imágenes de fondo** - `mind2.png` y `mind8.png` con opacidad

### ✅ Formulario de Contacto
- **Integración con EmailJS/FormSpree** - Envío real de emails
- **Validación en tiempo real** - Campos con feedback visual
- **Mensajes de confirmación** - Success/error al enviar

### ✅ Contenido
- **Página FAQ** - 8 preguntas frecuentes con acordeón
- **Sección Testimonios** - En la landing con 3 reseñas
- **Precios visibles** - En FAQ (A4: 18€, A3: 28€)

### ✅ Extras
- **Reproductor de música** - Ambiente relajante (opcional y desactivable)
- **Scroll suave** - En todos los enlaces internos
- **Responsive completo** - Desktop, tablet y móvil

---

## ⚙️ Configuración Necesaria

### 1. Estructura de Carpetas
```
ElrincondeLauri/
├── index.html
├── galeria.html
├── sobre-lauri.html
├── contacto.html
├── faq.html
├── styles.css
├── landing.css
├── galeria.css
├── sobre.css
├── contacto.css
├── faq.css
├── main.js
├── lightbox.js
├── gallery-filters.js
├── form-handler.js
├── music-player.js
├── faq-accordion.js
└── img/
    ├── cara.jpg
    ├── mind1.png
    ├── mind2.png
    ├── mind3.png
    ├── mind4.png
    ├── mind5.png
    ├── mind6.png
    ├── mind7.png
    └── mind8.png
```

### 2. Configurar Envío de Emails (Formulario)

#### Opción A: FormSpree (Recomendado - Más Simple)
1. Ve a https://formspree.io/
2. Crea una cuenta gratis
3. Crea un nuevo formulario
4. Copia tu Form ID
5. En `form-handler.js`, línea 41, reemplaza:
   ```javascript
   const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
   ```
   Por tu Form ID real.

#### Opción B: EmailJS
1. Ve a https://www.emailjs.com/
2. Crea una cuenta
3. Configura un servicio de email
4. Crea una plantilla
5. Obtén tus credenciales (Service ID, Template ID, Public Key)
6. En `form-handler.js`, líneas 10-12, reemplaza las credenciales
7. Incluye la librería de EmailJS en `contacto.html` antes de `form-handler.js`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

### 3. Añadir Música de Fondo (Opcional)

1. Consigue un archivo de música relajante (MP3 o similar)
2. Crea una carpeta `audio/` en la raíz del proyecto
3. Coloca tu archivo de música ahí (ej: `background-music.mp3`)
4. En `music-player.js`, línea 24, descomenta y actualiza:
   ```javascript
   audio.src = 'audio/background-music.mp3';
   ```

### 4. Personalizar Filtros de Galería

En `gallery-filters.js`, líneas 39-48, personaliza las categorías de cada ilustración:

```javascript
const items = [
    { index: 0, category: 'flores', sizes: ['a4', 'a3'] },
    { index: 1, category: 'corazones', sizes: ['a4', 'a3'] },
    // ... personaliza según tus imágenes
];
```

---

## 🚀 Próximos Pasos Recomendados

1. **Optimizar Imágenes**
   - Convertir PNG a WebP para mejor rendimiento
   - Comprimir imágenes sin perder calidad

2. **SEO**
   - Añadir meta tags Open Graph para redes sociales
   - Crear un `sitemap.xml`
   - Añadir `robots.txt`

3. **Analytics**
   - Integrar Google Analytics
   - Configurar eventos de seguimiento

4. **Favicon**
   - Crear un favicon personalizado (logo o inicial "L")

5. **Hosting**
   - Subir a GitHub Pages, Netlify o Vercel
   - Configurar dominio personalizado

---

## 📱 Pruebas Recomendadas

- [ ] Probar en Chrome, Firefox, Safari, Edge
- [ ] Verificar responsive en móvil y tablet
- [ ] Comprobar formulario de contacto
- [ ] Probar navegación del lightbox
- [ ] Verificar filtros de galería
- [ ] Comprobar menú hamburguesa en móvil
- [ ] Probar reproductor de música

---

## 🎯 Características Principales

✨ **Diseño Minimalista** - Inspirado en Authentik  
🎨 **Cursor Artístico** - Forma de lápiz personalizado  
📱 **100% Responsive** - Perfecto en todos los dispositivos  
🖼️ **Lightbox Elegante** - Ver ilustraciones en grande  
🎵 **Música Ambiente** - Opcional y desactivable  
📧 **Formulario Funcional** - Con confirmación visual  
🔍 **Filtros Inteligentes** - Por categoría y tamaño  
⚡ **Animaciones Suaves** - Fade-in y transiciones  

---

**¡Tu sitio web está listo para brillar! 🌟**

Si necesitas ayuda con la configuración, revisa los comentarios en cada archivo JavaScript.
