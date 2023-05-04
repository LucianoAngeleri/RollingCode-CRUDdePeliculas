import Pelicula from "./classPelicula.js";
import { resumenValidaciones } from "./helpers.js";

let formularioPelicula = document.getElementById("formPelicula");
let agregarPelicula = new bootstrap.Modal(document.getElementById("modalPelicula"));
const btnAgragarPelicula = document.getElementById("btnAgragarPelicula");

let codigo = document.getElementById("codigoPelicula");
let titulo = document.getElementById("tituloPelicula");
let descripcion = document.getElementById("descripcionPelicula");
let imagen = document.getElementById("imgPelicula");
let genero = document.getElementById("generoPelicula");
let anio = document.getElementById("anioPelicula");
let duracion = document.getElementById("duracionPelicula");
let pais = document.getElementById("paisPelicula");
let reparto = document.getElementById("repartoPelicula");
let alerta = document.getElementById("alerta");
let altaPelicula = true;

let listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculas")) || [];

//Si tengo peliculas almacenadas en el array, las transformo a objeto tipo Pelicula
if (listaPeliculas.length > 0) {
  listaPeliculas = listaPeliculas.map((pelicula) => new Pelicula(pelicula.codigo,pelicula.titulo,pelicula.descripcion,pelicula.imagen,pelicula.genero,pelicula.anio,pelicula.duracion,pelicula.pais,pelicula.reparto));
}
//{...pelicula}
//pelicula.codigo, pelicula.titulo, etc
cargaInicial();

function cargaInicial() {
  if (listaPeliculas.length > 0) {
    listaPeliculas.map((pelicula,posicion) => crearFila(pelicula,posicion+1));
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
  <button type="button" class="btn btn-warning" onclick="prepararPelicula('${objetoPelicula.codigo}')"><i class="bi bi-pencil-square fs-3"></i></button>
  <button type="button" class="btn btn-danger" onclick="borrarPelicula('${objetoPelicula.codigo}')"><i class="bi bi-x-square fs-3"></i></button>
  </td>
  </tr>`;
}

formularioPelicula.addEventListener("submit", prepararFromularioPelicula);
btnAgragarPelicula.addEventListener("click", desplegarModalPelicula);

function desplegarModalPelicula() {
  agregarPelicula.show();
}
function prepararFromularioPelicula(e) {
  e.preventDefault();
  if (altaPelicula) {
    crearPelicula();
  }else{
    editarPelicula();
  }
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
    imagen.value,
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
      imagen.value,
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
    //Renderizar la fila de la pelicula
    crearFila(peliculaNueva,listaPeliculas.length)
    //Mostrar un mensaje de éxito.
    Swal.fire(
      'Película Creada!',
      'La película fue creada con éxito',
      'success')
    //Resetear el formulario 
    limpiarForm();
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
window.borrarPelicula = (codigo)=>{
  Swal.fire({
    title: 'Estas seguro de borrar la Película?',
    text: "No podras volver atrás",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrala!',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
    //Agragar el código para eliminar la película
    //buscar del array, en donde esté el elemento que tiene ese código
    let posicionPelicula = listaPeliculas.findIndex((pelicula)=>pelicula.codigo === codigo)  
    //Borrar la pelicula del array (splice)
    listaPeliculas.splice(posicionPelicula,1)
    //Actualizar el local Storage
    guardarEnLocalStorage()
    //Borrar fila de la tabla
    let tablaPelicula = document.getElementById("tablaPelicula");
    tablaPelicula.removeChild(tablaPelicula.children[posicionPelicula])
    //muestra la ventana de éxito
      Swal.fire(
        'Película eliminada!',
        'Se ha elimnado la Película de la base de datos.',
        'success'
      )
    }
  })
 }
 window.prepararPelicula = (codigoPelicula)=>{
  console.log(codigoPelicula)
  //Tener los datos de la pelicula y cargarlo en el formulario
  const peliculaBuscada = listaPeliculas.find((pelicula) => pelicula.codigo === codigoPelicula);
  //Cargamos los datos en el modal
  codigo.value = peliculaBuscada.codigo;
  titulo.value = peliculaBuscada.titulo;
  descripcion.value = peliculaBuscada.descripcion;
  imagen.value = peliculaBuscada.imagen;
  genero.value = peliculaBuscada.genero;
  anio.value = peliculaBuscada.anio;
  duracion.value = peliculaBuscada.duracion;
  pais.value = peliculaBuscada.pais;
  reparto.value = peliculaBuscada.reparto;
  //Mostrmos el modal
  agregarPelicula.show();
  //Cambiamos el altaPelicula para editar la pelicula
  altaPelicula = false;
 }
 function editarPelicula() {
  console.log("Editar Pelicula");
    //Buscar del array, en donde esté el elemento que tiene ese código
    let posicionPelicula = listaPeliculas.findIndex((pelicula)=> pelicula.codigo === codigo.value)
    console.log(posicionPelicula);
    //Validar los datos
    const resumen = resumenValidaciones(
      titulo.value,
      descripcion.value,
      pais.value,
      reparto.value,
      anio.value,
      duracion.value,
      imagen.value,
      genero.value
    );
    //Esta funcion muestra un mensaje si no valida
    mostrarMensajeError(resumen);

    //Editar los valores de la pelicula dentro del array
    // listaPeliculas[posicionPelicula].titulo = titulo.value

    //Actaulizar el local storage

    //Actualizar la fila en la tabla

    //Mostrar mensaje de actualizacion exitosa

    //Limpiar el fomrulario
 }