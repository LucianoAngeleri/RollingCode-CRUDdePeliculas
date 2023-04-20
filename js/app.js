let temaConfigurado = JSON.parse(localStorage.getItem("theme")) || "dark";
cambiarTema(temaConfigurado)
let btnThemeDark = document.getElementById("btnThemeDark")
let btnThemeLight = document.getElementById("btnThemeLight")

btnThemeDark.addEventListener("click", () => cambiarTema("dark"))
btnThemeLight.addEventListener("click", () => cambiarTema("light"))

function cambiarTema(tema) {
    document.querySelector("html").setAttribute("data-bs-theme",tema)
    localStorage.setItem("theme", JSON.stringify(tema))
}