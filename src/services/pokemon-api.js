function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`All done, no pokemon named "${name}" found!`)
    );
  });
}

const api = { fetchPokemon }

export default api;