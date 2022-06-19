//codigo encriptador

const inputTexto = document.querySelector(".entradaTexto");
const mensaje = document.querySelector(".mensajeEncontrado");

function encriptarTexto(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringParaEncriptar;
}

// codigo desencriptador

function desencriptarTexto(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado
}

function desencriptar(stringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringParaDesencriptar;
}

//codigo copiar :D

function copy() {
    let copyText = document.querySelector(".mensajeEncontrado");
    copyText.select();
    document.execCommand("copy");
  }
  
document.querySelector(".mensajeEncontrado").addEventListener("click", copy);

//codigo pegar D: no funciona :c

function paste() {
    let pasteText = document.querySelector(".entradaTexto");
    pasteText.focus();
    document.execCommand("paste");
    console.log(pasteText.textContent);
  }
  
document.querySelector(".entradaTexto").addEventListener("click", paste);
  