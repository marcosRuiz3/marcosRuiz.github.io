document.addEventListener("DOMContentLoaded", function() {
    // 1. HTML SIN 'bg-dark' PARA PERMITIR EL EFECTO CRISTAL
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-gradient" href="index.html">Marcos Ruiz Barrajón</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="sobre-mi.html">Sobre mí</a></li>
                    <li class="nav-item"><a class="nav-link" href="trayectoria.html">Trayectoria</a></li>
                    <li class="nav-item"><a class="nav-link" href="proyectos.html">Proyectos</a></li>
                    <li class="nav-item ms-lg-2">
                        <a class="nav-link contact-btn-nav" href="contacto.html">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    // 2. INYECTAR
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        
        // 3. MARCAR PÁGINA ACTIVA
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            // No marcamos 'active' en el botón de contacto para que mantenga su estilo de botón
            if (linkPage === currentPage && !link.classList.contains('contact-btn-nav')) {
                link.classList.add('active');
            }
        });

        // 4. DETECTAR SCROLL (Para oscurecer la barra al bajar)
        const navbar = document.querySelector('.navbar');
        
        function checkScroll() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Chequear al inicio
    }
});