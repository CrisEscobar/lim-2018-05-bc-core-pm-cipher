window.cipher = {
  encode: (offset, string) => {
    var result = "";
    for (let i = 0; i < string.length; i++) {
      let actual = string.charCodeAt(i);
      if (actual == 32) {
        result = result + String.fromCharCode(actual);
        continue
      }
      if (actual >= 65 && actual <= 90) { //MAYUSCULAS
        let codigo = (actual - 65 + offset) % 26 + 65;
        let letra = String.fromCharCode(codigo);
 
        result = result + letra;
      } else {
        if (actual >= 97 && actual <= 122) { //MINUSCULAS
          let codigo = (actual - 97 + offset) % 26 + 97;
          let letra = String.fromCharCode(codigo);
          result = result + letra
        }
      }
    }
    return result;
  },
  decode: (offset, string) => {
    var result = "";
    for (let i = 0; i < string.length; i++) {
      let actual = string.charCodeAt(i);
      if (actual == 32) {
        result = result + String.fromCharCode(actual);
        continue
      }
      if (actual >= 65 && actual <= 90) { //MAYUSCULAS
        let codigo = (actual - 90 - offset) % 26 + 90;  //cambiando 65 x90
        let letra = String.fromCharCode(codigo);
        result = result + letra;
      } else {
        if (actual >= 90 && actual <= 122) { //MINUSCULAS
          let codigo = (actual - 122 - offset) % 26 + 122;
          let letra = String.fromCharCode(codigo);
          result = result + letra //invoco a la variable result y le añado la letra
        }
      }
    }
    return result; //retorna el resultado 
  }
 }
 