document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const rodoBtn = document.getElementById('rodoBtn');
    const rodoContent = document.getElementById('rodoContent');
    const rodoIcon = document.getElementById('rodoIcon');

    // Obsługa Menu
    function toggleMenu() {
        drawer.classList.toggle('open');
        overlay.classList.toggle('active');
    }

    if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if(overlay) overlay.addEventListener('click', toggleMenu);

    // Obsługa RODO
    if(rodoBtn) {
        rodoBtn.addEventListener('click', () => {
            rodoContent.classList.toggle('open');
            rodoIcon.innerText = rodoContent.classList.contains('open') ? '−' : '+';
        });
    }
});
