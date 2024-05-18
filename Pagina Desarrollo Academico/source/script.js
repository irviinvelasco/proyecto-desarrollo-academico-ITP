document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('btn-menu');
    const containerMenu = document.querySelector('.container-menu');
    const body = document.body;

    menuBtn.addEventListener('change', function() {
        if (menuBtn.checked) {
            containerMenu.classList.add('active');
            body.classList.add('menu-abierto');
        } else {
            containerMenu.classList.remove('active');
            body.classList.remove('menu-abierto');
        }
    });
});


