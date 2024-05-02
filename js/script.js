$(document).ready(function () { 
    $('#get-all-digimon').click(function() {
        $.ajax({
            url: 'https://digimon-api.vercel.app/api/digimon',
            type: 'GET',
            success: function(data){
                mostrarDigimones(data);
            },
            error: function(xhr, status, error){
                console.error('Error al obtener los datos:', error);
            }  
        });
    });

    //Función para mostrar los digimones en cards 1:

    function mostrarDigimones(digimones){
        var digimonList = '';
        digimones.forEach(function(digimon){
            digimonList += `
            <div class="col-lg-2 col-md-2 mb-4 col-xs-2 ">
                <div class="card">
                    <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
                    <div class=card-body">
                        <h5 class=""card-title>${digimon.name}</h5>
                        <p class=""card-text>Nivel: ${digimon.level}</p>
                        <p class=""card-texts>Tipo: ${digimon.type}</p>
                     </div>
                </div>
            </div>
            `;
        });
        $('#digimonList').html(digimonList);
    }

    /*No alcanze a copiar el codigo completo */
    /*
    //Función para mostrar los digimones en cards 2:
    function mostrarDigimones(digimones){
        var digimonList = '';
        digimones.forEach(function(digimon){
            let card= `
            <div class="col-lg-2 col-md-2 mb-4 col-xs-2 ">
                <div class="card">
                    <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
                    <div class=card-body">
                        <h5 class=""card-title>${digimon.name}</h5>
                        <p class=""card-text>Nivel: ${digimon.level}</p>
                        <p class=""card-texts>Tipo: ${digimon.type}</p>
                     </div>
                </div>
            </div>
            `;
        });
        $('#digimonList').html(digimonList);
    }
    digimonList = digimonList + card;*/

});








