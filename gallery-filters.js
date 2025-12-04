/* ===============================================
   GALLERY-FILTERS.JS - Filtros de Galería
   El Rincón de Lauri
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    // Crear barra de filtros
    const filterBar = document.createElement('div');
    filterBar.className = 'filter-bar';
    filterBar.innerHTML = `
        <div class="filter-group">
            <button class="filter-btn active" data-filter="all">Todas</button>
            <button class="filter-btn" data-filter="flores">Flores</button>
            <button class="filter-btn" data-filter="corazones">Corazones</button>
            <button class="filter-btn" data-filter="naturaleza">Naturaleza</button>
        </div>
        <div class="filter-group">
            <select class="filter-select" id="sizeFilter">
                <option value="all">Todos los tamaños</option>
                <option value="a4">Solo A4</option>
                <option value="a3">Solo A3</option>
            </select>
        </div>
    `;

    // Insertar antes del grid
    galleryGrid.parentElement.insertBefore(filterBar, galleryGrid);

    // Añadir atributos data a las imágenes (ejemplo)
    // Deberás personalizar esto según tus ilustraciones
    const items = [
        { index: 0, category: 'flores', sizes: ['a4', 'a3'] },
        { index: 1, category: 'corazones', sizes: ['a4', 'a3'] },
        { index: 2, category: 'naturaleza', sizes: ['a4', 'a3'] },
        { index: 3, category: 'flores', sizes: ['a4', 'a3'] },
        { index: 4, category: 'corazones', sizes: ['a4', 'a3'] },
        { index: 5, category: 'naturaleza', sizes: ['a4', 'a3'] },
        { index: 6, category: 'flores', sizes: ['a4', 'a3'] },
        { index: 7, category: 'naturaleza', sizes: ['a4', 'a3'] }
    ];

    const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        if (items[index]) {
            item.dataset.category = items[index].category;
            item.dataset.sizes = items[index].sizes.join(',');
        }
    });

    // Funcionalidad de filtrado
    const filterBtns = filterBar.querySelectorAll('.filter-btn');
    const sizeFilter = filterBar.querySelector('#sizeFilter');

    let currentCategory = 'all';
    let currentSize = 'all';

    function applyFilters() {
        galleryItems.forEach(item => {
            const category = item.dataset.category;
            const sizes = item.dataset.sizes ? item.dataset.sizes.split(',') : [];

            const categoryMatch = currentCategory === 'all' || category === currentCategory;
            const sizeMatch = currentSize === 'all' || sizes.includes(currentSize);

            if (categoryMatch && sizeMatch) {
                item.style.display = 'flex';
                setTimeout(() => item.classList.add('fade-in-visible'), 10);
            } else {
                item.classList.remove('fade-in-visible');
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    }

    // Filtros por categoría
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.filter;
            applyFilters();
        });
    });

    // Filtro por tamaño
    sizeFilter.addEventListener('change', () => {
        currentSize = sizeFilter.value;
        applyFilters();
    });
});
