function validarCantChar(texto, min,max) {
    if (texto.length >= min && texto.length <= max ) {
        return true
    }else{
        return false
    }
}
function validarAnio(anio, min,max) {
    if (anio >= min && anio <= max ) {
        return true
    }else{
        return false
    }
}
function validarDuracion(duracion, min,max) {
    if (duracion >= min && duracion <= max ) {
        return true
    }else{
        return false
    }
}
function validarGenero(genero) {
    if (genero.length > 0 &&  genero === "crimen" &&  genero === "aventura" &&  genero === "drama" && genero ==="comedia") {
        return true
    }else{
        return false
    }
}
function validarURLimg(imagen) {
    const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|gif)$/;
    if (patron.test(imagen)) {
        return true
    }else{
        return false
    }
}

export function resumenValidaciones(titulo, descripcion, pais, reparto, anio, duracion, img, genero) {
    let resumen ="";
    const anioActual = new Date().getFullYear();
    if (! validarCantChar(titulo,2,100)) {
        //Si NO se cumple la validación
        resumen += "El título debe contener entre 2 y 100 caracteres.<br>"
    }
    if (! validarCantChar(descripcion,5,300)) {
        resumen +="La descripción debe contener entre 5 y 300 caracteres.<br>"
    }
    if (! validarCantChar(pais,2,100)) {
        resumen +="El pais debe contener entre 2 y 100 caracteres.<br>"
    }
    if (! validarCantChar(reparto,2,255)) {
        resumen +="El reparto debe contener entre 2 y 255 caracteres.<br>"
    }
    if (! validarAnio(anio,1990, anioActual+1) ) {
        resumen +=`El año debe contener estar entre 1990 y ${anioActual+1}.<br>` 
    }
    if (! validarDuracion(duracion,10,240) ) {
        resumen +="La duración de la película debe ser entre 10 y 240 minutos.<br>" 
    }
    if (! validarDuracion(img) ) {
        resumen +="Ingrese un URL válido con imagen(extension .jpg, .png o .gif).<br>" 
    }
    if (! validarGenero(genero) ) {
        resumen +="Selecciones algun género de la lista.<br>" 
    }
    return resumen
}