import Pelicula from "./classPelicula.js";
import { resumenValidaciones } from "./helpers.js";

let formularioPelicula = document.getElementById("formPelicula")
let agregarPelicula = new bootstrap.Modal(document.getElementById("modalPelicula"));
const btnAgragarPelicula = document.getElementById("btnAgragarPelicula")
let listaPeliculas =[]

let codigo = document.getElementById("codigoPelicula")
let titulo = document.getElementById("tituloPelicula")
let descripcion = document.getElementById("descripcionPelicula")
let img = document.getElementById("imgPelicula")
let genero = document.getElementById("generoPelicula")
let anio = document.getElementById("anioPelicula")
let duracion = document.getElementById("duracionPelicula")
let reparto = document.getElementById("repartoPelicula")
let alerta = document.getElementById("alerta")



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
    //Validar los datos
    const resumen = resumenValidaciones(titulo.value)
    //Esta funcion muestra un mensaje si no valida
    mostrarMensajeError(resumen)
    //Si los datos son validos:
    if(resumen.length === 0){
       //Agregar la Pelicula en el arreglo de peliculas
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
        //Guardar el array en localStorage
        console.log(peliculaEjemplo)
    }
  }
function mostrarMensajeError(resumen) {
  if(resumen.length > 0 ){
    alerta.className = "alert alert-danger"
    alerta.innerHTML= resumen
  }else{
    alerta.className = "alert alert-danger d-none"
  }
}