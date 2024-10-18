const PokeNombre = async () => {
  const Response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await Response.json();
  return data.results;
};
async function PokeImg() {
  const Response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await Response.json();
  return data.results;
}

function PokeDescripcion() {
  return "Enviando Funcion";
}

function PokeColor() {
  return "Enviando Funcion";
}

export { PokeNombre, PokeImg };
