// JavaScript para funcionalidades interactivas

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para enlaces
    const links = document.querySelectorAll('header nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Ajusta el desplazamiento por el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Formulario de contacto: manejo básico
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            alert(`Gracias, ${formData.get('name')}! Hemos recibido tu mensaje.`);
            contactForm.reset();
        });
    }

    // Google Maps API
    const initMap = () => {
        const mapElement = document.getElementById('map');
        if (mapElement) {
            const map = new google.maps.Map(mapElement, {
                center: { lat: -34.397, lng: 150.644 }, // Cambia estas coordenadas a las deseadas
                zoom: 8
            });
        }
    };

    // Carga el script de Google Maps
    const loadGoogleMapsScript = () => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    };

    loadGoogleMapsScript();
});
