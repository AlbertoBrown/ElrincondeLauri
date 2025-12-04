/* ===============================================
   FAQ-ACCORDION.JS - Funcionalidad FAQ
   El Rincón de Lauri
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Cerrar todos los items
            faqItems.forEach(i => i.classList.remove('active'));

            // Abrir el actual si no estaba activo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
