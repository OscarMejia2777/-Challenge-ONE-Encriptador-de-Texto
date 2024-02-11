var botonEncriptador = document.querySelector(".botonEncriptar");
var botonDesencriptador = document.querySelector(".botonDesencriptar");
var contenedorToys = document.querySelector(".contenedorToys");
var contenedor = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".TextoResultado");

botonEncriptador.onclick = encriptar;
botonDesencriptador.onclick = desencriptar;

function  encriptar(){
    ocultarAdelante();
    var cajaDeTexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajaDeTexto);
}
 
function desencriptar (){
    ocultarAdelante();
    var cajaDeTexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajaDeTexto);
}

function recuperarTexto(){
    var cajaDeTexto = document.querySelector(".cajaDeTexto")
    return cajaDeTexto.value
}


function ocultarAdelante(){
    contenedorToys.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}




function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

 function desencriptarTexto (mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0 ; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal +"e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
 }


 const btnCopiar = document.querySelector(".btnCopiar");
    btnCopiar.addEventListener("click" , copiar = () =>{
    var contenido = document.querySelector(".TextoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    })


console.log("Si ves este mensaje dele click al logo")

