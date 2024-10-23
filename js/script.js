window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Función para abrir el modal y mostrar la imagen seleccionada
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    fullImage.src = imageSrc; // Establece la imagen seleccionada en el modal
    modal.style.display = "block"; // Muestra el modal
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Oculta el modal
}