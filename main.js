// main.js
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');

    function toggleSidebar() {
        drawer.classList.toggle('open');
        overlay.classList.toggle('active');
        
        // Animacja przycisku hamburgera
        const spans = menuBtn.querySelectorAll('span');
        if(drawer.classList.contains('open')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }

    if(menuBtn) menuBtn.addEventListener('click', toggleSidebar);
    if(overlay) overlay.addEventListener('click', toggleSidebar);

    // Podświetlanie aktywnej strony
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('#drawer a').forEach(link => {
        if(link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            link.style.color = 'var(--gold-light)';
        }
    });
});
