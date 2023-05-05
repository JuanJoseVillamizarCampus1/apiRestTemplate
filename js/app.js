//Importando funcion metodo HTTP GET
import {getCampers,deleteCamper} from'../apiConnection/API.js'


//1. Funcion IIFE
(function () {
    const lista = document.querySelector('.lista')
    
    document.addEventListener('DOMContentLoaded',showCampers)
    lista.addEventListener('click',confirmDelete)
    async function showCampers(){
        getCampers()
        const campers = await getCampers()
        console.log(campers);
        const contenerdor = document.querySelector('tbody')
        campers.forEach((camper) => {
            const {id,nombre,imagen,edad,promedio,expertoTecnologia,especialidad}=camper
            const rows = document.createElement('tr')
            rows.innerHTML= `
            <th scope="row">${id}</th>
            <td><img src="img/${imagen}" class="cuenta"></td>
            <td>${nombre}</td> 
            <td>${promedio}</td> 
            <td>${especialidad}</td> 
            <td>${expertoTecnologia}</td>
            <td><button class="btn btn-warning">Details</button></td>
            <td><button data-camper="${id}" class="btn btn-danger delete">Borrar</button></td>                 `
            contenerdor.appendChild(rows)
        });
    }

    function confirmDelete(e) {
        if (e.target.classList.contains('delete')) {
            /* console.log('borrado'); */
            const camperId = parseInt(e.target.dataset.camper);
            const confirmar = confirm('¿Deseas Eliminar al camper para que se quede en casa')
            if (confirmar) {
                // console.log('borrando camper', camperId);
                deleteCamper(camperId)
            }
            console.log(camperId);
        }
    }

})()


