const contenedor = document.getElementById("container");

function CardNombre(Nomnbre, img, color) {
  const InsertNombre = document.createElement("h1");
  const InsertColor = document.createElement("h3");
  const Insertimg = document.createElement("img");
  const Agrupar = document.createElement("div");

  InsertNombre.textContent = Nomnbre;

  InsertColor.textContent = color;
  console.log(`Aqui esta el color: ${color}`);

  Insertimg.src = img;
  Insertimg.alt = Nomnbre;

  Agrupar.appendChild(Insertimg);
  Agrupar.appendChild(InsertNombre);
  Agrupar.appendChild(InsertColor);
  Agrupar.style.backgroundColor = color;
  Agrupar.style.border = "1px solid grey";
  Agrupar.style.borderRadius = "8px";

  contenedor.appendChild(Agrupar);
}

fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
  .then((Response) => Response.json())
  .then((data) => {
    data.results.forEach((element) => {
      fetch(element.url)
        .then((Response) => Response.json())
        .then((Data) => {
          fetch(`https://pokeapi.co/api/v2/pokemon-color/${Data.id}`)
            .then((response) => response.json())
            .then((colorData) => {
              // Aquí podrías hacer algo con el color, como mostrarlo en la tarjeta o cambiar el estilo
              CardNombre(
                element.name,
                Data.sprites.front_default,
                colorData.name
              );
            });
        });
    });
  });
