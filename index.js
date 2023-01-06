var keyLower = ["a", "e", "i", "o", "u"];
var keyEncoded = ["ai", "enter", "imes", "ober", "ufat"];

var inputMsg = "";
var outputMsg = "";
var input = document.querySelector("#msgIn");
var output = document.querySelector("#msgOut");
var noMsg = document.querySelector(".noMsg");

function encode() {
    
    outputMsg = "";

    inputMsg = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (i = 0; i < input.value.length; i++) {
        
        var letra = inputMsg[i];

        if (letra == keyLower[0]) {
            outputMsg += keyEncoded[0];
        }
         else if (letra == keyLower[1]) {
            outputMsg += keyEncoded[1];
        }
         else if (letra == keyLower[2]) {
            outputMsg += keyEncoded[2];
        }
         else if (letra == keyLower[3]) {
            outputMsg += keyEncoded[3];
        }
         else if (letra == keyLower[4]) {
            outputMsg += keyEncoded[4];
        }
         else {
            outputMsg += letra;

        }
    }
    output.value = outputMsg;
    hide();
}

function decode() {
    
    outputMsg = "";

    outputMsg = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (i = 0; i <= 4; i++) {

        if (outputMsg.includes("ai")) {
            outputMsg = outputMsg.replace(/ai/g, "a");
        }
         else if (outputMsg.includes("enter")) {
            outputMsg = outputMsg.replace(/enter/g, "e");
        }
         else if (outputMsg.includes("imes")) {
            outputMsg = outputMsg.replace(/imes/g, "i");
        }
         else if (outputMsg.includes("ober")) {
            outputMsg = outputMsg.replace(/ober/g, "o");
        }
         else if (outputMsg.includes("ufat")) {
            outputMsg = outputMsg.replace(/ufat/g, "u");
        }
    }
    output.value = outputMsg;
    hide();
}


function copy() {

    output.select();
    output.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(output.value);
  
    var copyTxt = document.querySelector(".copyTxt");
    copyTxt.innerHTML = "Copiado";
  }


function copyOut() {

    var copyTxt = document.querySelector(".copyTxt");
    copyTxt.innerHTML = "Copiar para área de transferência";
}

function hide() {
    noMsg.style.display = "none";
    output.style.display = "block";
}


var bttCop = document.querySelector(".copy")
var bttEnc = document.querySelector(".encode");
var bttDec = document.querySelector(".decode");

bttCop.onclick = copy;
bttCop.onmouseout = copyOut;
bttEnc.onclick = encode;
bttDec.onclick = decode;

