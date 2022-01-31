const sectionPaniales = document.querySelector("#section-paniales")
const sectionInicio = document.querySelector("#section-inicio")

const paniales = document.querySelector("#paniales")
const inicio = document.querySelector("#inicio")


paniales.onclick =()=>{
    sectionPaniales.style.display="flex"
    sectionInicio.style.display="none"
}
inicio.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionInicio.style.display="flex"
}