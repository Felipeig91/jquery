# Manejo de Eventos en jQuery

Los eventos son acciones del usuario que se pueden detectar y manejar.

## Eventos Comunes

### Eventos del Mouse

```javascript
$("#miId").click(function () {
  // Se ejecuta al hacer clic
});

$("#miId").dblclick(function () {
  // Se ejecuta al hacer doble clic
});

$("#miId").mouseenter(function () {
  // Se ejecuta cuando el mouse entra
});

$("#miId").mouseleave(function () {
  // Se ejecuta cuando el mouse sale
});

$("#miId").hover(
  function () {
    // Mouse entra
  },
  function () {
    // Mouse sale
  },
);
```

### Eventos de Teclado

```javascript
$("#miInput").keydown(function () {
  // Se ejecuta cuando se presiona una tecla
});

$("#miInput").keyup(function () {
  // Se ejecuta cuando se suelta una tecla
});

$("#miInput").keypress(function (e) {
  // Acceder al código de tecla
  console.log(e.which);
});
```

### Eventos de Formulario

```javascript
$("#miForm").submit(function (e) {
  e.preventDefault(); // Prevenir envío del formulario
  // Tu código aquí
});

$("#miInput").change(function () {
  // Se ejecuta cuando cambia el valor
});

$("#miInput").focus(function () {
  // Se ejecuta cuando obtiene el foco
});

$("#miInput").blur(function () {
  // Se ejecuta cuando pierde el foco
});
```

### Otros Eventos

```javascript
$(window).resize(function () {
  // Se ejecuta al cambiar tamaño de la ventana
});

$(window).scroll(function () {
  // Se ejecuta al hacer scroll
});

$("#miImagen").load(function () {
  // Se ejecuta cuando la imagen carga
});

$(document).ready(function () {
  // Se ejecuta cuando el DOM está listo
});
```

## Método Genérico .on()

El método `.on()` es más flexible y moderno:

```javascript
$("#miId").on("click", function () {
  // Se ejecuta al hacer clic
});

// Con delegación (para elementos dinámicos)
$(document).on("click", ".miClase", function () {
  // Se ejecuta para todos los elementos con .miClase
  // incluso si se agregan después
});
```

## Objeto Event

Acceder a propiedades del evento:

```javascript
$("#miBoton").click(function (event) {
  event.type; // "click"
  event.target; // El elemento que dispara el evento
  event.preventDefault(); // Prevenir acción por defecto
  event.stopPropagation(); // Prevenir propagación
  event.pageX; // Posición X del mouse
  event.pageY; // Posición Y del mouse
  event.which; // Código de tecla/botón
});
```

## Desvinculación de Eventos

```javascript
// Remover un evento
$("#miId").off("click");

// Remover todos los eventos
$("#miId").off();

// Evento que se ejecuta una sola vez
$("#miId").one("click", function () {
  // Se ejecuta solo una vez
});
```

## Ejemplo Completo

```javascript
$(document).ready(function () {
  // Manejar envío de formulario
  $("#miForm").on("submit", function (e) {
    e.preventDefault();

    var valor = $("#miInput").val();

    if (valor.length > 0) {
      alert("Valor: " + valor);
    } else {
      alert("Por favor ingresa algo");
    }
  });

  // Validar en tiempo real
  $("#miInput").on("keyup", function () {
    if ($(this).val().length > 0) {
      $(this).css("border", "1px solid green");
    } else {
      $(this).css("border", "1px solid red");
    }
  });
});
```
