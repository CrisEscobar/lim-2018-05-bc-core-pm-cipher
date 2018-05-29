
let cifrar = () => {
    let string = document.getElementById("valor").value;
    let offset = parseInt(document.getElementById("espacio").value);
    let result = window.cipher.encode(offset,string);
    let textoHtml = document.getElementById("cuadroresultado");
    textoHtml.value = result
   }
   
   let descifrar = () => {
    let string = document.getElementById("valordos").value;
    let offset = parseInt(document.getElementById("espaciodos").value);
    let result = window.cipher.decode(offset,string);
    let textoHtml = document.getElementById("cuadroresultadodos");
    textoHtml.value = result
   }
   