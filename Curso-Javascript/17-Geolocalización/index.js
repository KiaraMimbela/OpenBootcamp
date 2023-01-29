// definiendo las variables globales de la posición y la chincheta
let marker, map;

function initMap() {
    // funciòn para inciar el mapa
    const posicion = {
        // ubicación de un lugar en Australia
        lat: -25.363, // latitud
        lng: 131.044  // longitud
    }
    // (en que elemento del dom vamos a utilizarlo, un objeto con dos atributos)
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4, // el zoom que va a tener
        center: posicion // centrado en la posición que establecimos
    })

    // colocar chincheta en una posición
    marker = new google.maps.Marker({
        position: posicion, // ubicación de la chincheta
        map, // donde estará
        title: "Posición Inicial" // nombre de la chincheta
    })

    // obtener la geolocalización
    // marker.setPosition({ lat, lng })
    geoPosiciona() // => función
}

// geolocalización del navegador
// usando watchposition => constante seguimiento, indicará la latitud y longitud

function geoPosiciona() {
    // en un if por si no soporta la acción
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation  
        const options = {timeout: 60000} // tiempo en que volverá a realizar la función
        const wathPost = geoLoc.watchPosition(centraMapa, onError, options)
        // (nueva ubicación donde estará la chincheta, en caso de error, tiempo)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

// función de nueva posición
function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos) // colocar la chincheta en la nueva posición
    map.setCenter(nuevaPos) // centrar el mapa en la nueva posición
}

// función en caso de error
function onError(error) {
    console.log("Se ha producido un error y lo estamos gestionando")
    console.error(error)
}