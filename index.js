const sectionPaniales = document.querySelector("#section-paniales")
const sectionInicio = document.querySelector("#section-inicio")
const sectionJuguetes = document.querySelector("#section-juguetes")
const sectionRopa = document.querySelector("#section-ropa")
const sectionEnvios = document.querySelector("#section-envios")



const paniales = document.querySelector("#paniales")
const inicio = document.querySelector("#inicio")
const juguetes = document.querySelector("#juguetes")
const ropa = document.querySelector("#ropa")
const envios = document.querySelector("#envios")




paniales.onclick =()=>{
    sectionJuguetes.style.display="none"
    sectionRopa.style.display="none"
    sectionPaniales.style.display="flex"
    sectionEnvios.style.display="none"
    sectionInicio.style.display="none"
}
inicio.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionEnvios.style.display="none"
    sectionRopa.style.display="none"
    sectionJuguetes.style.display="none"
    sectionInicio.style.display="flex"
}
juguetes.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionEnvios.style.display="none"
    sectionRopa.style.display="none"
    sectionInicio.style.display="none"
    sectionJuguetes.style.display="flex"
}
ropa.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionInicio.style.display="none"
    sectionEnvios.style.display="none"
    sectionJuguetes.style.display="none"
    sectionRopa.style.display="flex"
}
envios.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionInicio.style.display="none"
    sectionJuguetes.style.display="none"
    sectionRopa.style.display="none"
    sectionEnvios.style.display="flex"
}