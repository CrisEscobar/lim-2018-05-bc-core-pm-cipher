window.cipher = {
  encode: (offset, string) => {
    var result = "";
    for (let i = 0; i < string.length; i++) {              //Recorriendo el texto ingresado para encode
      let text = string.charCodeAt(i);                     //Extrayendo el código Ascii       
      if (text == 32) {                                    //Condición para los ESPACIOS de encode 
        result = result + String.fromCharCode(text);
        continue
      }
      if (text >= 65 && text <= 90) {                      //Condición para MAYÚSCULAS codificadas
        let textAscii = (text - 65 + offset) % 26 + 65;    
        let textCoded = String.fromCharCode(textAscii);    
        result = result + textCoded;                       
      } else {
        if (text >= 97 && text <= 122) {                   //Condición para MINÚSCULAS codificadas
          let textAscii = (text - 97 + offset) % 26 + 97;  
          let textCoded = String.fromCharCode(textAscii);  
          result = result + textCoded                      
        }
      }
    }
    return result;                                         //retorna el resultado encode
  },
  decode: (offset, string) => {
    var result = "";
    for (let i = 0; i < string.length; i++) {               //Recorriendo el texto ingresado para decode
      let text = string.charCodeAt(i);                      //Extrayendo el código Ascii 
      if (text == 32) {                                     //Condición para los ESPACIOS de decode
        result = result + String.fromCharCode(text);
        continue
      }
      if (text >= 65 && text <= 90) {                       //Condición para MAYÚSCULAS decodificadas
        let textAscii = (text - 90 - offset) % 26 + 90;    
        let textCoded = String.fromCharCode(textAscii);     
        result = result + textCoded;                        
      } else {
        if (text >= 90 && text <= 122) {                    //Condición para MINÚSCULAS decodificadas
          let codigo = (text - 122 - offset) % 26 + 122;
          let textCoded = String.fromCharCode(codigo);
          result = result + textCoded 
        }
      }
    }
    return result;                                          //retorna el resultado decode
  }
 }