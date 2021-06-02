document.addEventListener('DOMContentLoaded', function() {
    //encargado de llamar a las funciones
    iniciarApp();

});

function iniciarApp() {

    shownav();
}

function shownav() {

    const nav = document.querySelector('.navegacion');
    const navMenu = document.querySelector('.hamburguesa');
    const navClose = document.querySelector('.close');
    navMenu.addEventListener('click', () => {
        nav.classList.toggle('visible');
    });
    navClose.addEventListener('click', () => {
        nav.classList.toggle('visible');
    });
}