document.getElementById("botoncifrar").addEventListener("click", function () {

    let string = document.getElementById("valor").value;
    let offset = parseInt(document.getElementById("espacio").value);
    let result = window.cipher.encode(offset, string);
    let textoHtml = document.getElementById("cuadroresultado");
    textoHtml.value = result
});
document.getElementById("botondescifrar").addEventListener("click", function () {
    let string = document.getElementById("valordos").value;
    let offset = parseInt(document.getElementById("espaciodos").value);
    let result = window.cipher.decode(offset, string);
    let textoHtml = document.getElementById("cuadroresultadodos");
    textoHtml.value = result
});
document.getElementById("reseteocifrar").addEventListener("click", function () {
    let textoHtml = document.getElementById("cuadroresultado");
    textoHtml.value = "" 
    let textoHtmldescifrar = document.getElementById("valor");
    textoHtmldescifrar.value = ""
    let offset = document.getElementById("espacio");
    offset.value = ""
});
document.getElementById("reseteodescifrar").addEventListener("click", function () {
    let textoHtml = document.getElementById("cuadroresultadodos");
    textoHtml.value = "" 
    let textoHtmldescifrar = document.getElementById("valordos");
    textoHtmldescifrar.value = ""
    let offset = document.getElementById("espaciodos");
    offset.value = ""
});