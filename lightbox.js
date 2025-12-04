/* ===============================================
   LIGHTBOX.JS - Modal para Galería
   El Rincón de Lauri
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-image-wrapper');
    
    if (galleryImages.length === 0) return;

    // Crear estructura del lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Cerrar">&times;</button>
            <button class="lightbox-prev" aria-label="Anterior">‹</button>
            <button class="lightbox-next" aria-label="Siguiente">›</button>
            <img src="" alt="" class="lightbox-image">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    const images = Array.from(galleryImages);

    // Función para mostrar imagen
    function showImage(index) {
        const img = images[index].querySelector('.gallery-image');
        const caption = images[index].parentElement.querySelector('.gallery-caption');
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption ? caption.textContent : '';
        currentIndex = index;
        
        // Actualizar estado de los botones
        prevBtn.style.display = index === 0 ? 'none' : 'flex';
        nextBtn.style.display = index === images.length - 1 ? 'none' : 'flex';
    }

    // Abrir lightbox al hacer click en imagen
    galleryImages.forEach((wrapper, index) => {
        wrapper.style.cursor = 'pointer';
        wrapper.addEventListener('click', () => {
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            showImage(index);
        });
    });

    // Cerrar lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navegación
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            showImage(currentIndex + 1);
        }
    });

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            showImage(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
            showImage(currentIndex + 1);
        }
    });
});
