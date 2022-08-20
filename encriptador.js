

function Encriptar(){
    
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusc como minusc
    //g es para toda la linea u oracion
    //m es para multiples lineas
    //a partir del segundo var, paro s textEncrypt para que no me tome lo que va modificando otra vez
    var textEncrypt = texto.replace(/e/igm,"enter");
    var textEncrypt = textEncrypt.replace(/o/igm,"ober");
    var textEncrypt = textEncrypt.replace(/i/igm,"imes");
    var textEncrypt = textEncrypt.replace(/a/igm,"ai");
    var textEncrypt = textEncrypt.replace(/u/igm,"ufat");

//con esto la imagen de la derecha va a dejar de mostrarse cuando clickeo
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textEncrypt;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    
    inputTexto.value="";
    

}


function Desencriptar(){
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusc como minusc
    //g es para toda la linea u oracion
    //m es para multiples lineas
    //a partir del segundo var, paro s textEncrypt para que no me tome lo que va modificando otra vez
    var textEncrypt = texto.replace(/enter/igm,"e");
    var textEncrypt = textEncrypt.replace(/ober/igm,"o");
    var textEncrypt = textEncrypt.replace(/imes/igm,"i");
    var textEncrypt = textEncrypt.replace(/ai/igm,"a");
    var textEncrypt = textEncrypt.replace(/ufat/igm,"u");

//con esto la imagen de la derecha va a dejar de mostrarse cuando clickeo
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textEncrypt;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

    inputTexto.value="";
}


function Copiar(){
    var contenido= document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Copied to clipboard")
    
}