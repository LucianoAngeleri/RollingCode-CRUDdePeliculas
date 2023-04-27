function validarCantChar(texto, min,max) {
    if (texto.length >= min && texto.length <= max ) {
        console.log("La palabra es válida")
        return true
    }else{
        console.log("La palabra es inválida")
        return false
    }
}

export function resumenValidaciones(titulo) {
    let resumen ="";
    if (! validarCantChar(titulo,2,100)) {
        //Si NO se cumple la validación
        resumen = "El título dene contener entre 2 y 100 caracteres"
    }
    return resumen
}