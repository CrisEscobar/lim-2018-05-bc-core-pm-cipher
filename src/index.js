let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
cadena.length;
for (let i =0; i < cadena.length; i++ ) {
   (cadena.charCodeAt(i))
   ((cadena.charCodeAt(i)-65+33)%26+65)
   String.fromCharCode
   console.log(String.fromCharCode(((cadena.charCodeAt(i)-65+33)%26+65)) )
}
