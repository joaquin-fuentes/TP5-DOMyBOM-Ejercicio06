/*
 Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. 
 Debe contener los botones, iniciar, pausar y reset. 
  */

//  let temporizador = document.querySelector("#temporizador")
//  let inputs = document.querySelector("#inputs")
//  let horas = document.querySelector("#horas")
//  let minutos = document.queryCommandIndeterm("#minutos")


 
//   function iniciar(){
//     inputs
// }

const horasInput = document.getElementById("horas");
const minutosInput = document.getElementById("minutos");
const iniciarBoton = document.getElementById("btnIniciar");
const pausarBoton = document.getElementById("btnPausar");
const resetBoton = document.getElementById("btnReiniciar");
const temporizadorDiv = document.getElementById("temporizador");
let horas;
let minutos;
let segundos = 0

let totalSegundos = 0
let temporizadorInterval;

function iniciar() {
    if(horasInput.value == 0 && minutosInput.value == 0 && totalSegundos == 0){
        temporizadorDiv.innerHTML = `
        <p id="cronometro" class="nroGrande m-0">
            00:00:00
        </p>
`
    } else{
        
  // Convertir las horas y minutos ingresados a segundos y si es se inicia despues de una pausa, le agrega los segundos tambien
          totalSegundos = (horasInput.value * 3600) + (minutosInput.value * 60) + segundos;
  // Actualizar el temporizador div
  actualizar();
  // Iniciar el intervalo del temporizador
  temporizadorInterval = setInterval(() => {
    totalSegundos-= 1;
    actualizar();
    // Si el temporizador llega a cero, detener el intervalo
    if (totalSegundos == 0) {
      pausar();
    }
  }, 1000);
  
  // Deshabilitar el botón de iniciar
  iniciarBoton.disabled = true;
  pausarBoton.disabled = false;
  resetBoton.disabled = false;
    }
}
function pausar() {
  // Detener el intervalo del temporizador
  clearInterval(temporizadorInterval);
  horasInput.value = horas;
  minutosInput.value= minutos;
  totalSegundos = segundos
  // Habilitar el botón de iniciar
  iniciarBoton.disabled = false;
  pausarBoton.disabled = true;
  resetBoton.disabled = false;

}

function resetearTemporizador() {
  // Detener el intervalo del temporizador
  pausar();
  
  // Reiniciar los inputs
  horasInput.value = 0;
  minutosInput.value= 0;
  totalSegundos = 0

  // Actualizar el temporizador div
  actualizar();

  iniciarBoton.disabled = false;
  pausarBoton.disabled = true;
  resetBoton.disabled = true;
  }
  
  function actualizar() {
  // Calcular las horas, minutos y segundos restantes
  
     horas = Math.floor(totalSegundos / 3600);
  
     minutos = Math.floor((totalSegundos % 3600) / 60);
  
     segundos = totalSegundos % 60;
  

  
  // Actualizar el temporizador div
  temporizadorDiv.innerHTML = `
                   <p id="cronometro" class="nroGrande m-0">
                       ${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}
                   </p>
  `
  }
  
  // Agregar los event listeners a los botones
  iniciarBoton.addEventListener("click", iniciar);
  pausarBoton.addEventListener("click", pausar);
  resetBoton.addEventListener("click", resetearTemporizador);
