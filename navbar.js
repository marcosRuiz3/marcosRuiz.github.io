// navbar.js ACTUALIZADO

document.addEventListener("DOMContentLoaded", function() {
    // 1. HTML DE LA BARRA (Mejorado)
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.html">Marcos Ruiz</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="sobre-mi.html">Sobre mí</a></li>
                    <li class="nav-item"><a class="nav-link" href="trayectoria.html">Trayectoria</a></li>
                    <li class="nav-item"><a class="nav-link" href="proyectos.html">Portfolio</a></li>
                    <li class="nav-item ms-lg-2">
                        <a class="nav-link px-4 py-2 rounded-pill border border-primary text-primary" 
                           style="background: rgba(59,130,246,0.1); transition: all 0.3s;"
                           onmouseover="this.style.background='rgba(59,130,246,0.8)'; this.style.color='white!important'"
                           onmouseout="this.style.background='rgba(59,130,246,0.1)'; this.style.color='#3b82f6'"
                           href="contacto.html">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    // 2. INYECTAR HTML
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        
        // 3. DETECTAR PÁGINA ACTIVA
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage && !link.classList.contains('rounded-pill')) {
                link.classList.add('active');
            }
        });

        // 4. LÓGICA DE SCROLL (NUEVO)
        const navbar = document.querySelector('.navbar');
        
        function checkScroll() {
            if (window.scrollY > 50) { // Si bajamos más de 50px
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Escuchar el evento scroll
        window.addEventListener('scroll', checkScroll);
        // Comprobar al cargar (por si refrescamos a mitad de página)
        checkScroll();
    }
});