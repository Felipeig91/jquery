// ===================================================================
// FORMULARIO DE CONTACTO CON VALIDACIONES EN JQUERY
// ===================================================================

// $.ready() - Espera a que el DOM esté completamente cargado
// Esto garantiza que todos los elementos HTML estén disponibles
// antes de ejecutar el código jQuery
$(document).ready(function () {

  // ===================================================================
  // SECCIÓN 1: LIMPIAR ERRORES EN TIEMPO REAL
  // ===================================================================
  // Cuando el usuario escribe o cambia un campo, se limpian los errores
  // Esto mejora la experiencia del usuario al dar feedback inmediato
  // .on("input change") = escucha eventos de escritura y cambios
  // $(this) = el elemento que disparó el evento (campo que se escribió)
  $("#nombre, #email, #edad, #pais, #mensaje").on("input change", function () {
    // Remover la clase "error" del campo (rojo en CSS)
    $(this).removeClass("error");
    
    // Limpiar el texto del mensaje de error correspondiente
    // Usa template literals para construir dinámicamente el ID del error
    // Ejemplo: "#errorNombre", "#errorEmail", etc.
    $(`#error${$(this).attr("id").charAt(0).toUpperCase() + $(this).attr("id").slice(1)}`).text("");
  });

  // ===================================================================
  // SECCIÓN 2: MANEJAR ENVÍO DEL FORMULARIO
  // ===================================================================
  // .on("submit") = escucha cuando se intenta enviar el formulario
  // Esta es la función principal que controla todo el flujo
  $("#contactForm").on("submit", function (e) {
    // e.preventDefault() = evita que el formulario se envíe por defecto
    // Necesitamos esto para validar antes de enviar
    e.preventDefault();

    // Limpiar errores previos antes de validar nuevamente
    // Esto asegura que solo se muestren los errores actuales
    $(".error-msg").text("");
    
    // Remover la clase "error" de todos los campos
    $("input, select, textarea").removeClass("error");

    // Llamar función de validación
    // Si todos los campos son válidos, mostrar el resultado
    if (validarFormulario()) {
      // Mostrar los datos que el usuario ingresó
      mostrarResultado();
      
      // Limpiar el formulario automáticamente después de 3 segundos
      // Usa setTimeout para ejecutar código después de un tiempo específico
      setTimeout(function () {
        // [0] accede al elemento HTML real (no el objeto jQuery)
        // .reset() limpia todos los campos del formulario
        $("#contactForm")[0].reset();
        
        // Desaparecer la sección de resultado con animación de 300ms
        $("#resultado").fadeOut(300);
      }, 3000); // 3000 milisegundos = 3 segundos
    }
  });

  // ===================================================================
  // SECCIÓN 3: FUNCIÓN DE VALIDACIÓN
  // ===================================================================
  // Esta función revisa que todos los campos cumplan con los requisitos
  // Retorna "true" si todo es correcto, "false" si hay errores
  function validarFormulario() {
    let esValido = true; // Asumimos que es válido hasta encontrar un error

    // -----------------------------------------------
    // VALIDAR NOMBRE
    // -----------------------------------------------
    // .val() obtiene el valor del campo
    // .trim() elimina espacios en blanco al inicio y final
    const nombre = $("#nombre").val().trim();
    
    // Verificar si el nombre está vacío
    if (nombre === "") {
      mostrarError("nombre", "El nombre es requerido");
      esValido = false;
    }
    // Si no está vacío, verificar que tenga mínimo 3 caracteres
    else if (nombre.length < 3) {
      mostrarError("nombre", "El nombre debe tener al menos 3 caracteres");
      esValido = false;
    }

    // -----------------------------------------------
    // VALIDAR EMAIL
    // -----------------------------------------------
    const email = $("#email").val().trim();
    
    // Expresión regular para validar formato de email
    // /^[^\s@]+@[^\s@]+\.[^\s@]+$/ = debe tener formato: algo@algo.algo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === "") {
      mostrarError("email", "El email es requerido");
      esValido = false;
    }
    // .test() revisa si el email cumple con el patrón
    else if (!emailRegex.test(email)) {
      mostrarError("email", "El email no es válido");
      esValido = false;
    }

    // -----------------------------------------------
    // VALIDAR EDAD
    // -----------------------------------------------
    const edad = $("#edad").val();
    
    if (edad === "") {
      mostrarError("edad", "La edad es requerida");
      esValido = false;
    }
    // Verificar que esté en el rango permitido (18 a 120 años)
    else if (edad < 18 || edad > 120) {
      mostrarError("edad", "La edad debe estar entre 18 y 120");
      esValido = false;
    }

    // -----------------------------------------------
    // VALIDAR PAÍS
    // -----------------------------------------------
    const pais = $("#pais").val();
    
    // Debe seleccionar un país (no puede estar vacío)
    if (pais === "") {
      mostrarError("pais", "Debes seleccionar un país");
      esValido = false;
    }

    // -----------------------------------------------
    // VALIDAR MENSAJE
    // -----------------------------------------------
    const mensaje = $("#mensaje").val().trim();
    
    if (mensaje === "") {
      mostrarError("mensaje", "El mensaje es requerido");
      esValido = false;
    }
    // El mensaje debe tener mínimo 10 caracteres para ser útil
    else if (mensaje.length < 10) {
      mostrarError("mensaje", "El mensaje debe tener al menos 10 caracteres");
      esValido = false;
    }

    // Retornar true si no hay errores, false si hay alguno
    return esValido;
  }

  // ===================================================================
  // SECCIÓN 4: FUNCIÓN PARA MOSTRAR ERRORES
  // ===================================================================
  // Esta función ayuda a mostrar mensajes de error de forma consistente
  // Parámetros:
  //   - campo: nombre del campo con error (ej: "nombre")
  //   - mensaje: texto del error a mostrar (ej: "El nombre es requerido")
  function mostrarError(campo, mensaje) {
    // Agregar clase "error" al campo para ponerlo rojo (en CSS)
    // El atributo id es el mismo nombre del campo
    $(`#${campo}`).addClass("error");
    
    // Mostrar el mensaje de error debajo del campo
    // Construye el ID del elemento de error: "errorNombre", "errorEmail", etc.
    $(`#error${campo.charAt(0).toUpperCase() + campo.slice(1)}`).text(mensaje);
  }

  // ===================================================================
  // SECCIÓN 5: FUNCIÓN PARA MOSTRAR RESULTADO
  // ===================================================================
  // Esta función muestra los datos que el usuario ingresó después de validar
  function mostrarResultado() {
    // Obtener los valores de todos los campos
    const nombre = $("#nombre").val();
    const email = $("#email").val();
    const edad = $("#edad").val();
    const pais = $("#pais").val();
    const mensaje = $("#mensaje").val();
    
    // Verificar si el checkbox de suscripción está marcado
    // .is(":checked") = devuelve true si está marcado, false si no
    // Operador ternario: condición ? si es true : si es false
    const suscribir = $("#suscribir").is(":checked") ? "Sí" : "No";

    // Crear el HTML con los datos usando template literals
    // ${variable} = inserta el valor de la variable en el texto
    let html = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Edad:</strong> ${edad} años</p>
      <p><strong>País:</strong> ${pais}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
      <p><strong>Suscribirse:</strong> ${suscribir}</p>
    `;

    // .html() inserta el HTML en el elemento indicado
    $("#resultadoContenido").html(html);
    
    // .fadeIn(300) muestra el elemento con animación suave de 300ms
    $("#resultado").fadeIn(300);
  }

}); // Cierre de $(document).ready()

