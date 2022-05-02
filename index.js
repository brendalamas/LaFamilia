//secciones
const sectionPaniales = document.querySelector("#section-paniales")
const sectionInicio = document.querySelector("#section-inicio")
const sectionJuguetes = document.querySelector("#section-juguetes")
const sectionRopa = document.querySelector("#section-ropa")
const sectionContacto = document.querySelector("#section-contacto")
const footer = document.querySelector("footer")
//seccion inicio
const combos = document.querySelector(".combos")
const ofertas = document.querySelector(".ofertas")
//botones del header
const botonPaniales = document.querySelector("#paniales")
const botonInicio = document.querySelector("#inicio")
const botonJuguetes = document.querySelector("#juguetes")
const botonRopa = document.querySelector("#ropa")
const botonContacto = document.querySelector("#contacto")
const botonPagos = document.querySelector("#pagos")
//botones de la seccion paniales
const botonPampers = document.querySelector("#pampers")
const botonHuggies = document.querySelector("#huggies")
const botonBabysec = document.querySelector("#babysec")
const botonEstrella = document.querySelector("#estrella")
const botonDuffy = document.querySelector("#duffy")
const botonCaricias = document.querySelector("#caricias")
const cardPampers = document.querySelector("#card-paniales-pampers")
const cardHuggies = document.querySelector("#card-paniales-huggies")
const cardBabysec = document.querySelector("#card-paniales-babysec")
const cardEstrella = document.querySelector("#card-paniales-estrella")
const cardDuffy = document.querySelector("#card-paniales-duffy")
const cardCaricias = document.querySelector("#card-paniales-caricias")
const botones = document.querySelector(".botones")
const botonesNav = document.querySelector(".botones")


/////// funciones auxiliares ///////
const cardDisplayNone = () => {
    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"
}

/////// botones secciones ///////
botonInicio.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionContacto.style.display="none"
    sectionRopa.style.display="none"
    sectionJuguetes.style.display="none"
    sectionInicio.style.display="flex"
}
botonPaniales.onclick =()=>{
    sectionJuguetes.style.display="none"
    sectionRopa.style.display="none"
    sectionPaniales.style.display="flex"
    sectionContacto.style.display="none"
    sectionInicio.style.display="none"
    footer.style.display="none"
    cardDisplayNone()
    botonesNav.style.flexDirection="column"
}
botonJuguetes.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionContacto.style.display="none"
    sectionRopa.style.display="none"
    sectionInicio.style.display="none"
    sectionJuguetes.style.display="flex"
    footer.style.display="none"
}
botonRopa.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionInicio.style.display="none"
    sectionContacto.style.display="none"
    sectionJuguetes.style.display="none"
    sectionRopa.style.display="flex"
    footer.style.display="none"
}
botonContacto.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionInicio.style.display="none"
    sectionJuguetes.style.display="none"
    sectionRopa.style.display="none"
    sectionContacto.style.display="flex"
}
botonPagos.onclick =()=>{
    sectionPaniales.style.display="none"
    sectionInicio.style.display="none"
    sectionJuguetes.style.display="none"
    sectionRopa.style.display="none"
    sectionContacto.style.display="none"
}

/////// botones dentro de la seccion paniales ///////
botonPampers.onclick = () =>{
    botonesNav.style.flexDirection="row"
    cardPampers.style.display="flex"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"
    
}
botonHuggies.onclick = () =>{
    botonesNav.style.flexDirection="row"
    cardPampers.style.display="none"
    cardHuggies.style.display="flex"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"

}
botonEstrella.onclick = () =>{
    botonesNav.style.flexDirection="row"
    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="flex"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"
}
botonBabysec.onclick = () =>{
    botonesNav.style.flexDirection="row"
    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="flex"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"
}
botonDuffy.onclick = () =>{
    botonesNav.style.flexDirection="row"
    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="flex"
    cardCaricias.style.display="none"
}
botonCaricias.onclick = () =>{
    botonesNav.style.flexDirection="row"
    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="flex"
}



