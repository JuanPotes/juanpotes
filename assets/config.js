'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
    nombre: "Juan David Potes Medina",
    profesion: "Desarrollador Junior",
    correo: "jdpotes32@misena.edu.co",
    telefono: "+57 312 6390862",
    perfil: "Actualmente estudiando tecnología ADSI (Analisis y Desarrollo de Sistemas de Información) e Ingeniería Electrónica. Capacidad para el trabajo en equipo y liderazgo. Habilidad en distintas herramientas ofimaticas. Nivel B2+ en Inglés. ",
    habilidades: {
        comunicativas: ['Atención, ', 'Actitud positiva, ', 'Confiabilidad, ', 'Tolerancia, ', 'Iniciativa'],
        gestion: ['Trabajo en equipo, ', 'Liderazgo, ', 'Flexibilidad a Cambios, ', 'Dinamismo, ', 'Servicio al cliente '],
        tecnicas: ['MySQL, ', 'Java, ', 'HTML5, ', 'CSS, ', 'JavaScript, ', 'Herramientas Ofimaticas']
    },
    hobbies: ['Cantar ', 'Practicar artes marciales ', 'Practicar instrumentos varios ', 'Componer musica', 'Jugar videojuegos']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://previews.123rf.com/images/karpenkoilia/karpenkoilia1709/karpenkoilia170900117/86423976-concepto-de-web-de-l%C3%ADnea-moderna-para-la-programaci%C3%B3n-banner-web-lineal-para-la-codificaci%C3%B3n-.jpg";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser() {
    // Head titulo:
    $('#titulo').html(persona.nombre);
    // Header:
    $('#nombre').html(persona.nombre);
    $('#profesion').html(persona.profesion);
    // Footer:
    $('#correo').html(persona.correo);
    $('#telefono').html(persona.telefono);
    // Sección lateral:
    $('#banner').html('<img src="' + banner + '" class="img-fluid mt-2" alt="">');
    $('#perfil').html(persona.perfil);
    $('#comunicativas').html(persona.habilidades.comunicativas);
    $('#gestion').html(persona.habilidades.gestion);
    $('#tecnicas').html(persona.habilidades.tecnicas);
    // Invocamos una segunda función para traer cada uno de los elementos del arreglo:
    var aficiones = persona.hobbies.map(function(bar) {
        return '<li class="list-group-item">' + bar + '</li>'
    });
    $('#hobbies').html(aficiones);
}