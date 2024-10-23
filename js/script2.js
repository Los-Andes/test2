document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.event-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!slider || !prevBtn || !nextBtn) return; // Verificación para evitar errores

    // Ancho de una tarjeta más el margen dinámico
    const cardWidth = slider.querySelector('.event-card').offsetWidth +
        parseInt(getComputedStyle(slider.querySelector('.event-card')).marginRight);

    // Función para deslizar hacia la izquierda
    prevBtn.addEventListener('click', () => {
        if (slider.scrollLeft > 0) { // Verificar si no estamos al inicio
            slider.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        }
    });

    // Función para deslizar hacia la derecha
    nextBtn.addEventListener('click', () => {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        if (slider.scrollLeft < maxScrollLeft) { // Verificar si no estamos al final
            slider.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        }
    });

    // Animación de aparición de secciones con IntersectionObserver
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar después de ser visible
            }
        });
    });

    sections.forEach(section => observer.observe(section));
});



function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

window.addEventListener('load', () => {
    const message = document.querySelector('.whatsapp-message');
    setTimeout(() => {
        message.style.opacity = '1';
        message.style.transform = 'translateX(0)';
    }, 2000); // Aparece después de 2 segundos
});