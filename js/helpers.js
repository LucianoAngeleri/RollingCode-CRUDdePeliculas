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

export function resumenValidaciones(titulo, descripcion, pais, reparto, anio) {
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
        resumen +=`El año debe contener estar entre 1990 y ${anioActual+1} <br>` 
    }
    return resumen
}