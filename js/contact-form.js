// Funcionalidad del formulario de contacto para contact.html

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Manejo del formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        // Simular envío (puedes reemplazar con tu lógica real)
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...';
        submitBtn.disabled = true;

        // Simular delay de envío
        setTimeout(() => {
            document.getElementById('respuesta').innerHTML = 
                '<div class="alert alert-success">¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.</div>';
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
});
