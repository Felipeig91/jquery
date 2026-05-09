$(document).ready(function() {
    // Escuchar el evento click del botón
    $('#btnCargar').on('click', function() {
        const urlAPI = 'https://jsonplaceholder.typicode.com/users';

        // Agregar clase visual de carga
        $('body').addClass('loading');

        // Petición AJAX
        $.ajax({
            url: urlAPI,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Limpiar la tabla antes de agregar nuevos datos
                $('#tabla-usuarios').empty();

                // Recorrer los datos recibidos
                $.each(data, function(index, usuario) {
                    const fila = `
                        <tr>
                            <td>${usuario.id}</td>
                            <td><strong>${usuario.name}</strong></td>
                            <td>${usuario.username}</td>
                            <td>${usuario.email}</td>
                            <td>${usuario.address.city}</td>
                            <td>${usuario.address.zipcode}</td>
                        </tr>
                    `;
                    // Insertar la fila en el cuerpo de la tabla
                    $('#tabla-usuarios').append(fila);
                });
            },
            error: function(error) {
                console.error("Error al consultar la API:", error);
                alert("No se pudieron cargar los datos.");
            },
            complete: function() {
                // Quitar clase de carga al finalizar
                $('body').removeClass('loading');
            }
        });
    });
});