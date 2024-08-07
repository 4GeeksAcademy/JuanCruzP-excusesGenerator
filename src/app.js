/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarExcusa() {
  const sujeto = [
    "El perro",
    "Tu abuela",
    "Un Moro",
    "Donald Trump",
    "Pedro Sanchez"
  ];
  const verbo = [
    "se ha comido",
    "se ha robado",
    "ha escondido",
    "ha indultado",
    "ha disparado a"
  ];
  const objeto = [
    "la tarea",
    "el kebab",
    "el servidor",
    " a Messi",
    "mi pan danés"
  ];
  const tiempo = [
    "ahora mismo",
    "anoche",
    "ayer",
    "la semana pasada",
    "o eventualmente lo hará"
  ];

  const sujetoAleatorio = sujeto[Math.floor(Math.random() * sujeto.length)];
  const verboAleatorio = verbo[Math.floor(Math.random() * verbo.length)];
  const objetpAleatorio = objeto[Math.floor(Math.random() * objeto.length)];
  const tiempoAleatorio = tiempo[Math.floor(Math.random() * tiempo.length)];

  return `${sujetoAleatorio} ${verboAleatorio} ${objetpAleatorio} ${tiempoAleatorio}.`;
}
function mostrarExcusa() {
  const excusa = generarExcusa();
  document.getElementById("excusa").innerText = excusa;
}

window.onload = function() {
  //write your code here
  mostrarExcusa();

  console.log("Generador de Excusas en proceso...");
};
