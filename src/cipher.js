window.cipher = {
    encode: (offset,string) => {
      var result = "";
      for (let i = 0; i < string.length; i++) {
        var letter = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
        var lettercoded = String.fromCharCode(letter)
        result = result + lettercoded
      }
      return result;
    },
    decode: (offset,string) => {
        var result = "";
        for (let i = 0; i < string.length; i++) {
          var letter = ((string.charCodeAt(i) - 65 - offset) % 26 + 65);
          var lettercoded = String.fromCharCode(letter)
          result = result + lettercoded
        }
        return result;
       }
    }
 