# Guía Básica de jQuery

## ¿Qué es jQuery?

jQuery es una librería de JavaScript que simplifica la manipulación del DOM, manejo de eventos y efectos visuales.

## Sintaxis Básica

```javascript
$(selector).action();
```

- `$` - Acceso a jQuery
- `selector` - Selecciona elementos HTML
- `action()` - Realiza una acción en los elementos seleccionados

## Ejemplos de Selectores

| Selector | Ejemplo           | Descripción                                        |
| -------- | ----------------- | -------------------------------------------------- |
| ID       | `$("#miId")`      | Selecciona elemento con id="miId"                  |
| Clase    | `$(".miClase")`   | Selecciona todos los elementos con class="miClase" |
| Elemento | `$("p")`          | Selecciona todos los párrafos                      |
| Múltiple | `$("h1, p, div")` | Selecciona h1, p y div                             |

## Documento Listo

Siempre espera a que el DOM esté listo:

```javascript
$(document).ready(function () {
  // Tu código aquí
});
```

O versión abreviada:

```javascript
$(function () {
  // Tu código aquí
});
```

## Métodos Comunes

### Manipulación de Texto y HTML

```javascript
$("#miId").text("Nuevo texto"); // Establece texto
$("#miId").html("<strong>HTML</strong>"); // Establece HTML
$("#miId").val("Nuevo valor"); // Para inputs
```

### Manipulación de CSS

```javascript
$("#miId").css("color", "red"); // Cambiar propiedad CSS
$("#miId").css({ color: "red", background: "yellow" }); // Múltiples propiedades
$("#miId").addClass("miClase"); // Agregar clase
$("#miId").removeClass("miClase"); // Remover clase
$("#miId").toggleClass("miClase"); // Alternar clase
```

## Próximos Pasos

Consulta los otros archivos de documentación para aprender más sobre:

- Selectores avanzados
- Manejo de eventos
- Efectos y animaciones
