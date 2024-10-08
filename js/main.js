(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const products = Array.from(document.getElementsByClassName('product-item'));

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase().trim(); // Convertimos el valor a minúsculas y eliminamos espacios innecesarios

        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase(); // Tomamos el nombre en el atributo data-name
            const productDisplayName = product.querySelector('.product-name').textContent.toLowerCase(); // Buscamos el nombre dentro del HTML

            // Comparamos el nombre del producto con la búsqueda
            if (productName.includes(query) || productDisplayName.includes(query)) {
                product.style.display = 'block'; // Mostramos el producto si coincide
            } else {
                product.style.display = 'none'; // Ocultamos el producto si no coincide
            }
        });
    });
});

