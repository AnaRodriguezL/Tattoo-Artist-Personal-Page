const dataName = document.querySelector("#name");
const dataSize = document.querySelector("#size");
const dataPart = document.querySelector("#part");
const dataMessage = document.querySelector("#message");

const btnSumbit = document.querySelector("#btnSubmit");

var message, url;

function enviar() {
    message = `👋 Hola, mi nombre es *${dataName.value}*%0AMe gustaría saber cuánto me cuesta un tatuaje ✨%0AEstás son las características:%0A%0A*Tamaño:* ${dataSize.value}cm%0A*Parte del cuerpo:* ${dataPart.value}%0A%0A*Descripción*%0A${dataMessage.value}`;
    
    url = `https://api.whatsapp.com/send?phone=573145674662&text=${message}`;

    btnSumbit.href = url;
}