//Primero se debe ingresar el texto en una variable, en este caso es:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//El resultado va en la siguiente variable:
var result = "";

//Luego debo conseguir el codigo ASCII de cada letra. Con length hago el recorrido del string
for (let i =0; i < text.length; i++ ) {

//Ahora creo una variable y obtengo el codigo ASCII con charCodeAt
//Aplico también la formula
var letter = (text.charCodeAt(i)-65+33)%26+65;

//Obtengo el caracter con fromCharCode
var lettercoded = String.fromCharCode(letter)

//Finalmente en la variable resultado obtengo el mensaje codificado
result= result+lettercoded
}
console.log(result)