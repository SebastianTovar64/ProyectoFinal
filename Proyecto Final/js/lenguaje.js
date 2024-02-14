document.getElementById('language-selector').addEventListener('change', function (event) {
    var language = event.target.value;
    switch (language) {
        case 'es':
            window.location.href = 'http://tudominio.com/es';
            break;
        // Agrega más casos para otros idiomas si es necesario
        default:
            window.location.href = 'http://tudominio.com';
            break;
    }
});