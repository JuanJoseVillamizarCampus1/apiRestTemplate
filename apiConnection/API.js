//URL de la API 

const url = "http://localhost:40001/campers"

//2.obtener todos los campers de la api
export  const getCampers= async()=>{
    try {
        const result = await fetch(url)
        const response = await result.json()
        return response
    } catch (error) {
        console.log(error);
    }
}
//Insertar un nuevo camper en la REST API - metodo HTTP POST

export const newCamper= async (camper)=>{
    try {
        await fetch(url,{
            method:'POST',
            body: JSON.stringify(camper),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href='index.html'
    } catch (error) {
        console.log(error);
    }
}

//Eliminar campers. Metodo HTTP DELETE   
 export const deleteCamper= async (id)=> {
        try {
            await fetch(`http://localhost:40001/campers/${id}`,{
                method:'DELETE'
            })
        } catch (error) {
            console.log(error);
        }
 }