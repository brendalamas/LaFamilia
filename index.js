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

const pampers = document.querySelector("#pampers")
const huggies = document.querySelector("#huggies")
const babysec = document.querySelector("#babysec")
const estrella = document.querySelector("#estrella")
const duffy = document.querySelector("#duffy")
const caricias = document.querySelector("#caricias")


const cardPampers = document.querySelector("#card-paniales-pampers")
const cardHuggies = document.querySelector("#card-paniales-huggies")
const cardBabysec = document.querySelector("#card-paniales-babysec")
const cardEstrella = document.querySelector("#card-paniales-estrella")
const cardDuffy = document.querySelector("#card-paniales-duffy")
const cardCaricias = document.querySelector("#card-paniales-caricias")

const botonVolverAtras = document.querySelectorAll(".boton-volver-atras")

//botones principales del nav
paniales.onclick =()=>{
    sectionJuguetes.style.display="none"
    sectionRopa.style.display="none"
    sectionPaniales.style.display="flex"
    sectionEnvios.style.display="none"
    sectionInicio.style.display="none"

    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"
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


// click en los botones de seccion paniales
pampers.onclick = () =>{
    cardPampers.style.display="flex"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"
}
huggies.onclick = () =>{
    cardPampers.style.display="none"
    cardHuggies.style.display="flex"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"
}
estrella.onclick = () =>{
    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="flex"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"
}
babysec.onclick = () =>{
    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="flex"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="none"
}
duffy.onclick = () =>{
    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="flex"
    cardCaricias.style.display="none"
}
caricias.onclick = () =>{
    cardPampers.style.display="none"
    cardHuggies.style.display="none"
    cardBabysec.style.display="none"
    cardEstrella.style.display="none"
    cardDuffy.style.display="none"
    cardCaricias.style.display="flex"
}

//boton volver atras de las card

botonVolverAtras.onclick = () => {
    sectionJuguetes.style.display="none"
    sectionRopa.style.display="none"
    sectionPaniales.style.display="flex"
    sectionEnvios.style.display="none"
    sectionInicio.style.display="none"
}