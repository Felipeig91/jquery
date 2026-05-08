# Efectos y Animaciones en jQuery

jQuery proporciona métodos para crear efectos visuales y animaciones.

## Efectos Básicos

### Mostrar/Ocultar

```javascript
$("#miId").show(); // Mostrar elemento
$("#miId").hide(); // Ocultar elemento
$("#miId").toggle(); // Alternar entre mostrar/ocultar

// Con duración (en milisegundos)
$("#miId").show(500); // Mostrar en 500ms
$("#miId").hide("slow"); // Ocultar lentamente
$("#miId").toggle("fast"); // Alternar rápidamente
```

### Desvanecer

```javascript
$("#miId").fadeIn(); // Aparecer con efecto fade
$("#miId").fadeOut(); // Desaparecer con efecto fade
$("#miId").fadeToggle(); // Alternar fade
$("#miId").fadeTo(1000, 0.5); // Fade a opacidad 0.5 en 1s

// Con callback (función que se ejecuta al terminar)
$("#miId").fadeOut(1000, function () {
  alert("El efecto terminó");
});
```

### Deslizar

```javascript
$("#miId").slideDown(); // Deslizar hacia abajo
$("#miId").slideUp(); // Deslizar hacia arriba
$("#miId").slideToggle(); // Alternar deslizar

// Con duración
$("#miId").slideDown(500);
$("#miId").slideUp("slow");
$("#miId").slideToggle("fast");
```

## Animaciones Personalizadas

### Método .animate()

```javascript
// Animar propiedades CSS
$("#miId").animate(
  {
    left: "250px",
    top: "100px",
    opacity: 0.5,
  },
  1000,
);

// Con easing (tipo de animación)
$("#miId").animate(
  {
    width: "300px",
  },
  1000,
  "linear",
);

// Con callback
$("#miId").animate(
  {
    height: "200px",
  },
  1000,
  function () {
    console.log("Animación completada");
  },
);
```

### Encadenar Animaciones

```javascript
$("#miId")
  .animate({ opacity: 0.5 }, 500)
  .animate({ width: "300px" }, 500)
  .animate({ height: "200px" }, 500)
  .fadeOut();
```

## Control de Efectos

```javascript
// Detener animación actual
$("#miId").stop();

// Detener y saltar al final
$("#miId").stop(true, true);

// Retrasar ejecución
$("#miId").delay(2000).fadeOut();

// Ejecutar después de completarse
$("#miId").fadeOut(1000, function () {
  $("#miId").show(); // Se ejecuta después del fade out
});
```

## Efectos Personalizados

```javascript
// Crear un efecto personalizado
$.fx.speeds.miVelocidad = 1500;

$("#miId").animate({ left: "100px" }, "miVelocidad");

// Efectos personalizados complejos
$("#miId").slideDown(1000).delay(500).slideUp(1000);
```

## Opciones de Easing

```javascript
// "linear" - Velocidad constante
$("#miId").animate({ width: "300px" }, 1000, "linear");

// "swing" - Acelera en el medio y desacelera en los extremos (por defecto)
$("#miId").animate({ width: "300px" }, 1000, "swing");
```

## Ejemplo Completo

```javascript
$(document).ready(function () {
  $("#boton").click(function () {
    $("#contenedor")
      .slideDown(500)
      .delay(2000)
      .animate(
        {
          backgroundColor: "#ffff00",
          height: "300px",
        },
        1000,
      )
      .delay(1000)
      .slideUp(500, function () {
        alert("Animación completada");
      });
  });
});
```

## Velocidades Predefinidas

```javascript
"slow"; // 600ms
"fast"; // 200ms
"normal"; // 400ms (por defecto)
1000; // 1000ms (1 segundo)
```

## Parar Todas las Animaciones

```javascript
// Detener todas las animaciones del elemento
$(":animated").stop();

// Limpiar cola de efectos
$.fx.off = true; // Desactiva efectos
$.fx.off = false; // Activa efectos
```
