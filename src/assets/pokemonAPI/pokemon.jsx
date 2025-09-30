export async function getPokemonInfo(pokemonNumber) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`
  );
  const pokemonData = await response.json();
  return pokemonData;
}
