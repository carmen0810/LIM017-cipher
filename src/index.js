import cipher from './cipher.js';
let encode1 = document.getElementById("cifrado");
let decode1 = document.getElementById("decifrado");

function encodeCifrado() {
    let retornaEncode = cipher.encode(3, encode1);
    document.getElementById("resultadoEncode").innerHTML = "";
    document.getElementById("resultadoEncode").append(retornaEncode);
}
function decodeDecifrado() {
    cipher.decode(3, decode1);
}
document.getElementById("encode").addEventListener("click", encodeCifrado);
document.getElementById("decode").addEventListener("click", decodeDecifrado);







function ocultarInputNombre() {
    const saludoUsuario = document.getElementById("inputSaludo");
    if (saludoUsuario.value.length > 0) {
      alert("Bienvenido(a) " + saludoUsuario.value);
      //cambiando pantalla de inicia a cuestionario
      //document.getElementById("divInputNombre").style.display = "none"; //ocultar div
      //document.getElementById("divPrimeraPregunta").style.display = "block"; //mostrar div
    } else {
      alert("Completa tu nombre");
    }
  }

  document.getElementById("buttonSaludo").addEventListener("click", ocultarInputNombre);