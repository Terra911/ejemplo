
function hacerAlgo() {
    let nya = prompt("Deje su nombre y apellido");
    alert("Felicidades " + nya)
}

let auto = {
    modelo: "Clio",
    anio: 2016,
    kilometros: 50000,
    patente: "AJJ515",
    arrancar: function () {
        console.log("Brooooom")
    },
}

function cambiarTitulo() {
    //toma el encabezado de la pagina
    let miVariable = document.getElementById("encabezado")
    //cambia su texto
    miVariable.innerHTML = "Mira este nuevo titulo"
}

function agregarContenido() {
    //creamos un nuevo elemnto y meterlo en una variable
    let nuevoElemento = document.createElement("h3")

    //darle contenido al nuevo elemento
    nuevoElemento.innerHTML = prompt("¿Qué querés decir?")

    //buscar donde queremos meter el elemento nuevo
    let espacioVacio = document.getElementById("vacio")

    //metemos el elemento nuevo en la zona vacia
    espacioVacio.appendChild(nuevoElemento)
}

function cambiarParrafo() {
    //creamos el elemento nuevo
    let elementoNuevo = document.createElement("img")
    //dar contenido
    elementoNuevo.src = "programar.png"
    //buscar el elemento a reemplazar
    let reemplazado = document.getElementById("parrafo1")
    //decimos al elemento padre que reemplace al otro elemento
    document.body.replaceChild(elementoNuevo, reemplazado)
}

function redireccionar(){
    window.location.href = "https://google.com"
}






