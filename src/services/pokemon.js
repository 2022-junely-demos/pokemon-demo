export async function fetchPokemon(selectedType) {
  const params = new URLSearchParams();
  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }
  console.log(params.toString());
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}
