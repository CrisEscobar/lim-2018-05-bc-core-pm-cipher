document.getElementById("buttomEncode").addEventListener("click", function () {  //EVENTOS PARA ENCODE
    let string = document.getElementById("textEncode").value;
    let offset = parseInt(document.getElementById("Encodeoffset").value);
    let result = window.cipher.encode(offset, string);
    let textoHtml = document.getElementById("EncodeResult");
    textoHtml.value = result
   });
   document.getElementById("buttomDecode").addEventListener("click", function () { //EVENTOS PARA DECODE
    let string = document.getElementById("textDecode").value;
    let offset = parseInt(document.getElementById("Decodeeoffset").value);
    let result = window.cipher.decode(offset, string);
    let textoHtml = document.getElementById("DecodeResult");
    textoHtml.value = result
   });
   document.getElementById("ResetEncode").addEventListener("click", function () {  //RESETEO ENCODE
    let textoHtml = document.getElementById("EncodeResult");
    textoHtml.value = ""
    let textoHtmldescifrar = document.getElementById("textEncode");
    textoHtmldescifrar.value = ""
    let offset = document.getElementById("Encodeoffset");
    offset.value = ""
   });
   document.getElementById("ResetDecode").addEventListener("click", function () { //RESETEO DECODE
    let textoHtml = document.getElementById("DecodeResult");
    textoHtml.value = ""
    let textoHtmldescifrar = document.getElementById("textDecode");
    textoHtmldescifrar.value = ""
    let offset = document.getElementById("Decodeeoffset");
    offset.value = ""
   });
   