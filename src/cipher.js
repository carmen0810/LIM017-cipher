const cipher = {
  encode: function (offset, string) {
    document.getElementById("resultadoEncode").innerHTML = "";
    for (let i = 0; i < string.value.length; i++) {
      let letraEnNumero = (string.value[i].charCodeAt()-65+offset)%26+65;
      document.getElementById("resultadoEncode").append(String.fromCharCode(letraEnNumero));
    }
    
  },
  decode: function (offset, string) {
    document.getElementById("resultadoDecode").innerHTML = "";
    for (let i = 0; i < string.value.length; i++) {
      let letraEnNumero = (string.value[i].charCodeAt()-65-offset+26)%26+65;
      
       
      if ((string.value[i].charCodeAt()-65-offset)%26+65 == 88 || (string.value[i].charCodeAt()-65-offset)%26+65 == 89|| (string.value[i].charCodeAt()-65-offset)%26+65 == 90){
        (string.value[i].charCodeAt()-65-offset+26)%26+65;
        document.getElementById("resultadoDecode").append(String.fromCharCode(letraEnNumero));
      }else{
        (string.value[i].charCodeAt()-65-offset)%26+65;
        document.getElementById("resultadoDecode").append(String.fromCharCode(letraEnNumero));
      }

    
    
    
    
    }
    
  }
}
export default cipher;
