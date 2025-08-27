// Funcionalidad del modal de cobertura para index.html

document.addEventListener('DOMContentLoaded', function() {
    // Mapear títulos y descripciones de departamentos
    var departamentos = {
        'La Paz - El Alto': 'La Paz - El Alto: Av. del Policía 553 Edificio Montenegro 2do. Piso -Ciudad Satélite',
        'Santa Cruz': 'no se sabe aun',
        'Cochabamba': 'no se saber aun',
        'Oruro': 'Calle Pagador 6338 entre Calles Murguia y Aldaa Edificio Cámara de Minería 2do piso.',
        'Beni': 'Calle 18 de noviembre esquina calle La Paz Nro. 113 2do. piso'
    };

    // Agregar funcionalidad a todas las tarjetas de departamento
    var cards = document.querySelectorAll('.service-item h5.mb-2');
    cards.forEach(function(card) {
        var departamento = card.textContent.trim();
        card.parentElement.style.cursor = 'pointer';
        card.parentElement.addEventListener('click', function() {
            openModal(departamento, departamentos[departamento]);
        });
    });

    // Configurar botón de cerrar modal
    document.getElementById('closeModalLaPaz').onclick = function() {
        closeModal();
    };

    // Cerrar modal al hacer click fuera del contenido
    document.getElementById('modalLaPaz').onclick = function(e) {
        if (e.target === this) {
            closeModal();
        }
    };

    // Función para abrir el modal
    function openModal(titulo, descripcion) {
        document.getElementById('modalCoberturaTitulo').textContent = titulo;
        document.getElementById('modalCoberturaDesc').textContent = descripcion || '';
        document.getElementById('modalCoberturaImg').src = 'img/la Paz.jpg';
        document.getElementById('modalLaPaz').style.display = 'flex';
    }

    // Función para cerrar el modal
    function closeModal() {
        document.getElementById('modalLaPaz').style.display = 'none';
    }
});
