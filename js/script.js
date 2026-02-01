// Initialize Animate On Scroll
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
    });

    // --- Navbar Glass Effect on Scroll ---
    const navbar = document.getElementById('mainNav');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'rgba(18, 18, 18, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'rgba(18, 18, 18, 0.85)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '15px 0';
        }
    };

    window.addEventListener('scroll', handleScroll);

    // --- Mobile Menu Logic ---
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    // 1. Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

    // 2. Expand Navbar on Hover (Mobile/Vertical Layout)
    // We attach the listener to the entire navbar container
    const navbarContainer = document.querySelector('.navbar');

    navbarContainer.addEventListener('mouseenter', () => {
        // Only trigger if we are in the mobile breakpoint (Bootstrap lg is 992px)
        if (window.innerWidth < 992) {
            bsCollapse.show();
        }
    });

    navbarContainer.addEventListener('mouseleave', () => {
        if (window.innerWidth < 992) {
            bsCollapse.hide();
        }
    });
});