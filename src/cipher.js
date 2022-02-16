const cipher = {
  encode: function (offset, string) {
    let encodeReturn = "";
    for (let i = 0; i < string.value.length; i++) {
      let letraEnNumero = (string.value[i].charCodeAt()-65+offset)%26+65;
      let resultadoEncode = String.fromCharCode(letraEnNumero);
      encodeReturn = encodeReturn + resultadoEncode;
      //numeros i = i + 1 || i++
      //cadena  i = i + "a" || i+= "a"
      

    }
    return encodeReturn;
  },
  decode: function (offset, string) {
    document.getElementById("resultadoDecode").innerHTML = "";
    for (let i = 0; i < string.value.length; i++) {
      let letraEnNumero = (string.value[i].charCodeAt()-65-offset)%26+65;
      
     let decodeExcepcion =  (string.value[i].charCodeAt()-65-offset+26)%26+65;
      if (decodeExcepcion == 88 || decodeExcepcion == 89 || decodeExcepcion == 90){
      
        document.getElementById("resultadoDecode").append(String.fromCharCode(decodeExcepcion));
      }else{
        document.getElementById("resultadoDecode").append(String.fromCharCode(letraEnNumero));
      }

 
    }
    
  }
}
export default cipher;
