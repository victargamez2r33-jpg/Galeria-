/*
  Versión estática de la galería.
  Se elimina el filtrado, el modal y cualquier interactividad que genere movimiento.
*/

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');

    if (!themeSwitch) return;

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeSwitch.checked = false;
    } else {
        document.body.classList.remove('light-mode');
        themeSwitch.checked = true;
    }

    // Solo queda el cambio de tema, sin animaciones ni desplazamientos adicionales.
    themeSwitch.addEventListener('change', (e) => {
        if (!e.target.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});