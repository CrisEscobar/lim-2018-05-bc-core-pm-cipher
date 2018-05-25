let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var resultado = "";
for (let i =0; i < cadena.length; i++ ) {
var letra = (cadena.charCodeAt(i)-65+33)%26+65;
//console.log(letra)
var letracodificada = String.fromCharCode(letra)
  //console.log(letracodificada)
  resultado= resultado+letracodificada
}
console.log(resultado)