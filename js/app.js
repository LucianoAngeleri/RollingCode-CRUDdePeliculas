let btnThemeDark = document.getElementById("btnThemeDark")
let btnThemeLight = document.getElementById("btnThemeLight")

btnThemeDark.addEventListener("click", () => cambiarTema("dark"))
btnThemeLight.addEventListener("click", () => cambiarTema("light"))

function cambiarTema(tema) {
    document.querySelector("html").setAttribute("data-bs-theme",tema)
}