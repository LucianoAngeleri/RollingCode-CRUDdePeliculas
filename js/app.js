let temaConfigurado = JSON.parse(localStorage.getItem("theme")) || "dark";
cambiarTema(temaConfigurado)
cambiarIconoTema(temaConfigurado)
console.log(themeIcon)
let btnThemeDark = document.getElementById("btnThemeDark")
let btnThemeLight = document.getElementById("btnThemeLight")

btnThemeDark.addEventListener("click", () => cambiarTema("dark"))
btnThemeLight.addEventListener("click", () => cambiarTema("light"))

function cambiarTema(tema) {
    document.querySelector("html").setAttribute("data-bs-theme",tema)
    cambiarIconoTema(tema)
    localStorage.setItem("theme", JSON.stringify(tema))
}
function cambiarIconoTema(tema) {
    let themeIcon = document.getElementById("themeIcon")
    if (tema === "light") {
        themeIcon.className = "bi bi-moon-stars pe-1"
        
    }else{
        themeIcon.className = "bi bi-moon-stars-fill pe-1"
    }
}