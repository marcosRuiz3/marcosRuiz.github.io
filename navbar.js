// navbar.js

document.addEventListener("DOMContentLoaded", function() {
    // 1. Definimos el HTML de la barra de navegación
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.html">Marcos Ruiz Barrajón</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="sobre-mi.html">Sobre mí</a></li>
                    <li class="nav-item"><a class="nav-link" href="trayectoria.html">Trayectoria</a></li>
                    <li class="nav-item"><a class="nav-link" href="proyectos.html">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    // 2. Inyectamos el HTML en el div con id "navbar-placeholder"
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        
        // 3. Lógica para marcar el enlace ACTIVO automáticamente
        const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Detecta el archivo actual
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            // Obtenemos el href del enlace (ej: "sobre-mi.html")
            const linkPage = link.getAttribute('href');
            
            // Si coincide con la página actual, le añadimos la clase 'active'
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active'); // Por seguridad
            }
        });
    }
});