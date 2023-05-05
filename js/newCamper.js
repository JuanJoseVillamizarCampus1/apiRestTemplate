import {newCamper} from "/apiConnection/API.js";


const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',ValidateCamper);

function ValidateCamper(e) {
    e.preventDefault();
    const nombre=document.getElementById('nombre').value,
          promedio=document.getElementById('promedio').value,
          edad=document.getElementById('edad').value,
          nivelIngles=document.getElementById('nivelIngles').value,
          especialidad=document.getElementById('especialidad').value,
          nivelCampus=document.getElementById('nivelCampus').value,
          expertoTecnologia=document.getElementById('expertoTecnologia').value
         
//Literal Objets enhacement
 const camper = {
    imagen:'camper-anonimo1.jpg',
    nombre,
    promedio,
    nivelIngles,
    especialidad,
    nivelCampus,
    expertoTecnologia,
    edad
 }
 if (validate(camper)){
    alert('llena todo tont@')
    return 
 }
 newCamper(camper)

}

function validate(Objeto) {
    return !Object.values(Objeto).every(element => element!=="");
}
