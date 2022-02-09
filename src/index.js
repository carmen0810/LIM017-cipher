import cipher from './cipher.js';
let encode1 = document.getElementById("cifrado");
let decode1 = document.getElementById("decifrado");
function encodeCifrado() {
    cipher.encode(3, encode1);
}
function decodeDecifrado() {
    cipher.decode(3, decode1);
}
document.getElementById("encode").addEventListener("click", encodeCifrado);
document.getElementById("decode").addEventListener("click", decodeDecifrado);