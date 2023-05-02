import Pelicula from "./classPelicula.js";
import { resumenValidaciones } from "./helpers.js";

let formularioPelicula = document.getElementById("formPelicula");
let agregarPelicula = new bootstrap.Modal(document.getElementById("modalPelicula"));
const btnAgragarPelicula = document.getElementById("btnAgragarPelicula");

let listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculas")) || [];

//Si tengo peliculas almacenadas en el array, las transformo a objeto tipo Pelicula
if (listaPeliculas.length > 0) {
  listaPeliculas = listaPeliculas.map((pelicula) => new Pelicula(pelicula.codigo,pelicula.titulo,pelicula.descripcion,pelicula.imagen,pelicula.genero,pelicula.anio,pelicula.pais,pelicula.reparto));
}
//{...pelicula}
//pelicula.codigo, pelicula.titulo, etc
cargaInicial();

function cargaInicial() {
  if (listaPeliculas.length > 0) {
    listaPeliculas = listaPeliculas.map((pelicula,posicion) => crearFila(pelicula,posicion+1));
  }
}
function crearFila(objetoPelicula,fila) {
  let tablaPelicula = document.getElementById("tablaPelicula");
  tablaPelicula.innerHTML += `<tr>
  <th scope="row">${fila}</th>
  <td>${objetoPelicula.titulo}</td>
  <td>${objetoPelicula.descripcion}</td>
  <td>${objetoPelicula.imagen}</td>
  <td>${objetoPelicula.genero}</td>
  <td>
  <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square fs-3"></i></button>
  <button type="button" class="btn btn-danger"><i class="bi bi-x-square fs-3"></i></button>
  </td>
  </tr>`;
}

let codigo = document.getElementById("codigoPelicula");
let titulo = document.getElementById("tituloPelicula");
let descripcion = document.getElementById("descripcionPelicula");
let img = document.getElementById("imgPelicula");
let genero = document.getElementById("generoPelicula");
let anio = document.getElementById("anioPelicula");
let duracion = document.getElementById("duracionPelicula");
let pais = document.getElementById("paisPelicula");
let reparto = document.getElementById("repartoPelicula");
let alerta = document.getElementById("alerta");

formularioPelicula.addEventListener("submit", prepararFromularioPelicula);
btnAgragarPelicula.addEventListener("click", desplegarModalPelicula);

function desplegarModalPelicula() {
  agregarPelicula.show();
}
function prepararFromularioPelicula(e) {
  e.preventDefault();
  crearPelicula();
}
function crearPelicula() {
  //Validar los datos
  const resumen = resumenValidaciones(
    titulo.value,
    descripcion.value,
    pais.value,
    reparto.value,
    anio.value,
    duracion.value,
    img.value,
    genero.value
  );
  //Esta funcion muestra un mensaje si no valida
  mostrarMensajeError(resumen);
  //Si los datos son validos:
  if (resumen.length === 0) {
    //Agregar la Pelicula en el arreglo de peliculas
    const peliculaNueva = new Pelicula(
      undefined,
      titulo.value,
      descripcion.value,
      img.value,
      genero.value,
      anio.value,
      duracion.value,
      pais.value,
      reparto.value
    );
    //Guardar en un array la pelicula nueva
    listaPeliculas.push(peliculaNueva);
    //Guardar el array en localStorage
    guardarEnLocalStorage();
    limpiarForm();

    console.log(peliculaNueva);
    //Mostrar un mensaje de éxito.
  }
}
function mostrarMensajeError(resumen) {
  if (resumen.length > 0) {
    alerta.className = "alert alert-danger";
    alerta.innerHTML = resumen;
  } else {
    alerta.className = "alert alert-danger d-none";
  }
}
function guardarEnLocalStorage() {
  localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
}
function limpiarForm() {
  formularioPelicula.reset();
}
