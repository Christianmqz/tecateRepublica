document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria () {
    const galeria = document.querySelector('.galeria-imagenes');

    galeria.textContent = 'Vamos a crear la galeria';

    // for (let i = 1; i <= 12; i++) {
    //     const imagen = document.createElement('picture');
    //     imagen.innerHTML = `
    //         <source srcset="build/img/thumb/${i}.avif" type="image/avif">
    //         <source srcset="build/img/thumb/${i}.webp" type="image/webp">
    //         <img loading="lazy" width="200" height="300" src="src/scss/img/thumb/${i}.jpg" 
    //         alt="Imagen Galeria">
    //     `;

    //     galeria.appendChild(imagen);
    // }
}