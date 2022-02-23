const cipher = {
  encode: function (offset, string) {
    let encodeReturn = "";
    if (typeof (offset) !== 'number' || string == "" || offset == 0 || offset == null || string == []) {
      throw new TypeError("ha ocurrio un error.")
    } else {
        for (let i = 0; i < string.length; i++) {
        if(string[i] == " "){
         encodeReturn = encodeReturn + " ";
        }else{
        let letraEnNumero = (string[i].charCodeAt() - 65 + offset) % 26 + 65;
        
        let resultadoEncode = String.fromCharCode(letraEnNumero);
        encodeReturn = encodeReturn + resultadoEncode;
      }
        //numeros i = i + 1 || i++
        //cadena  i = i + "a" || i+= "a"
      }

 }

    return encodeReturn;
  },
  decode: function (offset, string) {
    let decodeReturn = "";
    if (typeof (offset) !== 'number' || string == "" || offset == 0 || offset == null || string == []) {
      throw new TypeError("ha ocurrio un error.")
    } else {
      for (let i = 0; i < string.length; i++) {
        if(string[i] == " "){
          decodeReturn = decodeReturn + " ";
        }else{
        let decodeExcepcion = (string[i].charCodeAt() + 65 - offset) % 26 + 65;
        let resultadoDecode = String.fromCharCode(decodeExcepcion);
        decodeReturn = decodeReturn + resultadoDecode;
        }
      }
    }
    
    return decodeReturn;
  }
}
export default cipher;
