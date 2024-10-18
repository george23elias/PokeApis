const contenedor = document.getElementById("container");

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((Response) => Response.json())
  .then((data) => {
    data.results.forEach((element) => {
      console.log(element.name);
      InsertarValores(element.name);
    });
  });

function CardNombre(Nomnbre) {
  const InsertNombre = document.createElement("h1");
  InsertNombre.textContent = Nomnbre;
  contenedor.appendChild(InsertNombre);
}
function CardImg(Nomnbre) {
  const InsertNombre = document.createElement("h1");
  InsertNombre.textContent = Nomnbre;
  contenedor.appendChild(InsertNombre);
}

function CardDescripcion(Nomnbre) {
  const InsertNombre = document.createElement("h1");
  InsertNombre.textContent = Nomnbre;
  contenedor.appendChild(InsertNombre);
}

function CardColores(Nomnbre) {
  const InsertNombre = document.createElement("h1");
  InsertNombre.textContent = Nomnbre;
  contenedor.appendChild(InsertNombre);
}
