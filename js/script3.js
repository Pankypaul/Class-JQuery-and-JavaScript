const obtenerDigimonPromesas = () => {
    return new Promise ( (resolve , reject ) =>{
        fetch ('https://digimon-api.vercel.app/api/digimon')
        .then ((digimones ) => {

            if(!digimones.ok){
                throw new Error ("Error");
            }

            return digimones.json();
        })
        .then((data) =>{
            resolve(data)
        })
        .catch((data) =>{
            reject(error)

        })

    });
}

function generarSaludo(){
    console.log("hola");
}
generarSaludo();