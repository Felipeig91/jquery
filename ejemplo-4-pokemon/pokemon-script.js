$(document).ready(function () {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";

  // Buscar al hacer clic en el botón
  $("#searchBtn").click(function () {
    const pokemonName = $("#pokemonInput").val().trim().toLowerCase();

    if (pokemonName === "") {
      showError("Por favor ingresa un nombre o ID de Pokémon");
      return;
    }

    searchPokemon(pokemonName);
  });

  // Buscar al presionar Enter en el input
  $("#pokemonInput").keypress(function (e) {
    if (e.which === 13) {
      $("#searchBtn").click();
    }
  });

  function searchPokemon(pokemonName) {
    // Mostrar loading
    $("#loading").show();
    $("#error").hide();
    $("#pokemonCard").hide();

    $.ajax({
      url: `${apiUrl}/${pokemonName}`,
      method: "GET",
      success: function (data) {
        displayPokemon(data);
        $("#loading").hide();
      },
      error: function () {
        showError(
          "Pokémon no encontrado. Intenta con otro nombre o ID válido."
        );
        $("#loading").hide();
      },
    });
  }

  function displayPokemon(pokemon) {
    // Información básica
    $("#pokemonId").text(pokemon.id);
    $("#pokemonName").text(pokemon.name);
    $("#pokemonImage").attr("src", pokemon.sprites.other["official-artwork"].front_default);

    // Altura y peso
    $("#pokemonHeight").text((pokemon.height / 10).toFixed(1));
    $("#pokemonWeight").text((pokemon.weight / 10).toFixed(1));

    // Tipos
    const typesHtml = pokemon.types
      .map(
        (type) =>
          `<span class="type-badge type-${type.type.name}">${type.type.name}</span>`
      )
      .join("");
    $("#pokemonTypes").html(typesHtml);

    // Habilidades
    const abilitiesHtml = pokemon.abilities
      .map((ability) => `<li>${ability.ability.name}</li>`)
      .join("");
    $("#pokemonAbilities").html(abilitiesHtml);

    // Estadísticas
    const statsHtml = pokemon.stats
      .map((stat) => {
        const maxValue = 150;
        const percentage = (stat.base_stat / maxValue) * 100;
        return `
          <div class="stat-row">
            <div class="stat-name">${stat.stat.name}</div>
            <div class="stat-bar">
              <div class="stat-value" style="width: ${percentage}%">
              </div>
            </div>
            <div class="stat-number">${stat.base_stat}</div>
          </div>
        `;
      })
      .join("");
    $("#pokemonStats").html(statsHtml);

    // Mostrar tarjeta con animación
    $("#pokemonCard").fadeIn(300);
  }

  function showError(message) {
    $("#error").text(message).slideDown(300);
    $("#pokemonCard").hide();
  }
});
