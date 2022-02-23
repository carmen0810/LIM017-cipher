import cipher from './cipher.js';



function encodeCifrado() {
  let encode1 = document.getElementById("cifrado").value.toUpperCase();
  let moviendoOffset1 = parseInt(document.getElementById("movimiento-offset1").value);
  if(moviendoOffset1 == 0 || encode1 == ""){
    alert("¡seleccionar los campos!");
  }else{
    let retornaEncode = cipher.encode(moviendoOffset1, encode1);
    document.getElementById("resultadoEncode").innerHTML = "";
    document.getElementById("resultadoEncode").append(retornaEncode);
  }

}
document.getElementById("encode").addEventListener("click", encodeCifrado);

function decodeDecifrado() {
  let decode1 = document.getElementById("decifrado").value.toUpperCase();
  let moviendoOffset = parseInt(document.getElementById("movimiento-offset").value);
  if(moviendoOffset == 0 || decode1 == ""){
    alert("¡seleccionar los campos!");
  }else{
    let retornaDecode = cipher.decode(moviendoOffset, decode1);
    document.getElementById("resultadoDecode").innerHTML = "";
    document.getElementById("resultadoDecode").append(retornaDecode);
  }
  
}

document.getElementById("decode").addEventListener("click", decodeDecifrado);







function ocultarInputNombre() {
  const saludoUsuario = document.getElementById("inputSaludo");
  if (saludoUsuario.value.length > 0) {
    alert("Bienvenido(a) " + saludoUsuario.value);
    document.getElementById("input_nombre").style.display = "none"; 
    document.getElementById("PaginaPrincipal").style.display = "block"; 
  } else {
    alert("Completa tu nombre");
  }
}

document.getElementById("buttonSaludo").addEventListener("click", ocultarInputNombre);

function accionCifrar() {

  document.getElementById("PaginaPrincipal").style.display = "none"; 
  document.getElementById("pagina-cifrado").style.display = "block"; 
}


document.getElementById("button-cifrar").addEventListener("click", accionCifrar);

function accionDecifrar() {
  document.getElementById("PaginaPrincipal").style.display = "none"; 
  document.getElementById("pagina-decifrado").style.display = "block"; 
}

document.getElementById("button-decifrar").addEventListener("click", accionDecifrar);

function copiaTexto() {
  let texto = document.getElementById("resultadoEncode");
  texto.focus();
  texto.select();
  document.execCommand('copy');
}

document.getElementById("button-copiar").addEventListener("click", copiaTexto);





function paginaInicial(){
  location.reload();
  
}
document.getElementById("button-inicio").addEventListener("click", paginaInicial);


function paginaInicial2(){
  location.reload();
}

document.getElementById("button-inicio2").addEventListener("click", paginaInicial2);

