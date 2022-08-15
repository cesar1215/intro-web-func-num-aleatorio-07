
let bird = document.querySelector(".bird")
let gravedad = 2
let birdBottom;


/* Ejercicio 1.
Crea una función aleatorio() que tenga dos parámetros: min y max. 
La función debe DEVOLVER (return) un valor aleatorio entre los valores de min y max.
*/


/* Ejercicio 2.
Crea una función dibujarBird(). Al llamar a la función:
- Asigna a birdBottom el resultado obtenido al llamar a la función aleatorio con parametros 10 (como min) y 570 (como max)
- El valor de la propiedad bottom de bird debe ser el nuevo valor de birdBottom + 'px'
- El valor de la propiedad left de bird debe ser '250px'
*/


/* Ejercicio 3.
Crea una función iniciar(). Al llamar a la función iniciar():
- Se debe de llamar a la función dibujarBird()
*/



/* Ejercicio 4. 
Llama a la función iniciar()
*/



// Parar el setInterval que llama a la función loop cada 2 segundos
function terminar() {
    clearInterval(timerId)
}


// Si birdBottom toca el suelo, llamar a la función terminar
function verificarColision() {
    if(birdBottom < 0) {
        terminar()
    }
}


// llamar a la función efectoGravedad y verificarColision
function loop() {
    efectoGravedad() 
    verificarColision() 
}



// Funcionalidad para que bird se mueva hacia abajo si no se pulsa una tecla
function efectoGravedad() {
    birdBottom -= gravedad;
    bird.style.bottom = birdBottom + "px";
}


// repetir funcion loop cada 2 segundos
let timerId = setInterval(loop, 20)


// funcion para que bird se mueva hacia arriba
function birdMueveArriba() {
    birdBottom += 40
    bird.style.bottom = birdBottom + "px"
}

// event listener para llamar a la funcion birdMueveArrbia al pulsar una tecla
document.addEventListener("keyup", birdMueveArriba)
