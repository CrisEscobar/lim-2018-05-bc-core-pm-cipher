<<<<<<< HEAD
//Primero se debe ingresar el texto en una variable, en este caso es:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//El resultado va en la siguiente variable:
var resultado = "";

//Luego debo conseguir el codigo ASCII de cada letra. Con length hago el recorrido del string
for (let i =0; i < text.length; i++ ) {

//Ahora creo una variable y obtengo el codigo ASCII con charCodeAt
//Aplico también la formula
var letra = (text.charCodeAt(i)-65+33)%26+65;

//Obtengo el caracter con fromCharCode
var letracodificada = String.fromCharCode(letra)

//Finalmente en la variable resultado obtengo el mensaje codificado
resultado= resultado+letracodificada
=======
let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var resultado = "";
for (let i =0; i < cadena.length; i++ ) {
var letra = (cadena.charCodeAt(i)-65+33)%26+65;
//console.log(letra)
var letracodificada = String.fromCharCode(letra)
  //console.log(letracodificada)
  resultado= resultado+letracodificada
>>>>>>> 717bdfeddde628af8cebf559388eeef849c4bc2d
}
console.log(resultado)