// Validación de Formulario de Inicio de Sesión
$("#loginForm").submit(function(event) {
    event.preventDefault();
    // $("#mensajeModal").text("Inicio de sesión exitoso").modal("show");
});

// Validación de Formulario de Registro
$("#registroForm").submit(function(event) {
    event.preventDefault();
    // $("#registroModal").modal("hide");
    // $("#mensajeRegistroModal").text("Registro exitoso").modal("show");
});

// Mostrar el modal al cargar la página por primera vez
$(document).ready(function () {
    // Muestra el modal al cargar la página por primera vez
    $('#ageModal').modal('show');

    // Oculta todas las secciones excepto "Home"
    $('.section-content').not('#home').hide();

    // Cuando se hace clic en un enlace de navegación
    $('a.nav-link').on('click', function(event) {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();
        
        // Obtiene el identificador de la sección a la que se va a navegar (sin el símbolo '#')
        var targetSection = $(this).attr('href').substring(1);
        
        // Oculta todas las secciones con la clase '.section-content'
        $('.section-content').hide();
        
        // Muestra solo la sección correspondiente al enlace clickeado
        $('#' + targetSection).show();
    });
    
    // Muestra la sección "Home" por defecto cuando se carga la página
    $('#home').show();
});

