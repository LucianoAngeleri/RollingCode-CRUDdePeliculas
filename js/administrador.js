import Pelicula from "./classPelicula.js";

let formularioPelicula = document.getElementById("formPelicula")
let agregarPelicula = new bootstrap.Modal(document.getElementById("modalPelicula"));
const btnAgragarPelicula = document.getElementById("btnAgragarPelicula")


formularioPelicula.addEventListener("submit",prepararFromularioPelicula)
btnAgragarPelicula.addEventListener("click",desplegarModalPelicula)

  function desplegarModalPelicula() {
    agregarPelicula.show();
  }
  function prepararFromularioPelicula(e){
    e.preventDefault();
    console.log("En el evento submit")
    crearPelicula();
  }
  function crearPelicula(){

    const peliculaEjemplo = new Pelicula(
      "0001",
      "El Padrino",
      "La familia Corleone es una de las más poderosas de Nueva York en los años 40.",
      "https://imagenes.psicologiaymente.com/wp-content/uploads/2021/02/el-padrino-1.png",
      "Drama/Crimen",
      1972,
      "2h 55min",
        "Estados Unidos",
        ["Marlon Brando", "Al Pacino", "James Caan"]
      );
    console.log(peliculaEjemplo)
  }
