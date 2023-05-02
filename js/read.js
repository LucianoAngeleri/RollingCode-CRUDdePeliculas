let listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculas")) || [];
console.log(listaPeliculas)
cargaInicial()

function cargaInicial() {
    if (listaPeliculas.length > 0) {
      listaPeliculas = listaPeliculas.map((pelicula) => crearCardPelicula(pelicula));
    }
  }

function crearCardPelicula(objetoPelicula) {
    let contenedorCardPelicula = document.getElementById("contenedorCardPelicula")
    contenedorCardPelicula.innerHTML += `
    <div class="col">
    <div class="card h-100">
      <img class="card-img-top" src="${objetoPelicula.imagen}" alt="${objetoPelicula.titulo}" />
      <div class="card-body">
        <h4 class="card-title">${objetoPelicula.titulo}</h4>
      </div>
      <div class="card-footer text-muted">
        <div class="d-grid gap-2">
          <a class="btn btn-primary" href="./pages/detalle.html" role="button">Ver Detalle</a>
        </div>
      </div>
    </div>
  </div>
    `
}