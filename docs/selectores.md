# Selectores en jQuery

Los selectores son la base de jQuery. Permiten seleccionar elementos del DOM para manipularlos.

## Selectores Básicos

### Por ID

```javascript
$("#miId"); // Selecciona: <div id="miId"></div>
```

### Por Clase

```javascript
$(".miClase"); // Selecciona todos los elementos con esa clase
```

### Por Tipo de Elemento

```javascript
$("p"); // Todos los párrafos
$("div"); // Todos los divs
$("button"); // Todos los botones
```

## Selectores Combinados

```javascript
$("p.error"); // <p> con clase "error"
$("div#principal"); // <div> con id="principal"
$("p, span, a"); // p, span o a
```

## Selectores Jerárquicos

```javascript
$("div p"); // <p> dentro de <div> (descendientes)
$("div > p"); // <p> hijo directo de <div>
$("h1 + p"); // <p> inmediatamente después de <h1>
$("h1 ~ p"); // <p> hermano de <h1>
```

## Selectores por Atributo

```javascript
$("input[type='text']"); // Inputs de tipo texto
$("a[href]"); // Enlaces con atributo href
$("[data-id='5']"); // Elementos con atributo data-id="5"
```

## Selectores por Posición

```javascript
$("li:first"); // Primer elemento li
$("li:last"); // Último elemento li
$("li:eq(2)"); // El tercer elemento li (índice 2)
$("li:odd"); // Elementos li en posiciones impares
$("li:even"); // Elementos li en posiciones pares
```

## Pseudo-selectores

```javascript
$("p:empty"); // <p> vacías
$("p:not('.error')"); // <p> sin clase "error"
$("input:visible"); // Inputs visibles
$("input:hidden"); // Inputs ocultos
```

## Ejemplos Prácticos

```javascript
// Seleccionar el primer botón
$("button:first");

// Seleccionar todos los inputs con data-required
$("input[data-required]");

// Seleccionar párrafos dentro de un div específico
$("#contenedor p");

// Seleccionar elementos visibles
$("*:visible");
```

## Verificar si un Elemento Existe

```javascript
if ($("#miId").length > 0) {
  // El elemento existe
}
```
