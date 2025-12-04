/* ===============================================
   FORM-HANDLER.JS - Integración EmailJS
   El Rincón de Lauri
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    // Configuración de EmailJS
    // Regístrate en https://www.emailjs.com/ y obtén tus credenciales
    const EMAIL_JS_SERVICE_ID = 'TU_SERVICE_ID'; // Cambia esto
    const EMAIL_JS_TEMPLATE_ID = 'TU_TEMPLATE_ID'; // Cambia esto
    const EMAIL_JS_PUBLIC_KEY = 'TU_PUBLIC_KEY'; // Cambia esto

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;

        // Deshabilitar botón y mostrar loading
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        submitBtn.classList.add('loading');

        // Obtener datos del formulario
        const formData = {
            nombre: contactForm.querySelector('#nombre').value,
            email: contactForm.querySelector('#email').value,
            mensaje: contactForm.querySelector('#mensaje').value
        };

        try {
            // Opción 1: Usar EmailJS (requiere incluir su librería)
            // await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, formData, EMAIL_JS_PUBLIC_KEY);

            // Opción 2: Usar FormSpree (más simple)
            // Cambia la URL por tu endpoint de FormSpree
            const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                showMessage('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Error al enviar');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.classList.remove('loading');
        }
    });

    // Función para mostrar mensajes
    function showMessage(text, type) {
        // Eliminar mensaje anterior si existe
        const existingMsg = document.querySelector('.form-message');
        if (existingMsg) existingMsg.remove();

        const message = document.createElement('div');
        message.className = `form-message form-message-${type}`;
        message.textContent = text;

        contactForm.appendChild(message);

        // Animar entrada
        setTimeout(() => message.classList.add('visible'), 10);

        // Eliminar después de 5 segundos
        setTimeout(() => {
            message.classList.remove('visible');
            setTimeout(() => message.remove(), 300);
        }, 5000);
    }

    // Validación en tiempo real
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '' && input.hasAttribute('required')) {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        input.addEventListener('input', () => {
            input.classList.remove('error');
        });
    });
});
