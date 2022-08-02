import cipher from "./cipher.js";

const cod = document.getElementById("codificar");
const decod = document.getElementById("decodificar");
const traduzir = document.getElementById("traduzir");
const crypto = cipher.encode;
const decrypto = cipher.decode;
const resultadoArea = document.getElementById("resultadoArea");

function codificarDecodificar() {
  const inputCheck = document.querySelector(
    'input[name="radioOpcoes"]:checked'
  ).value;
  const codValue = cod.value;
  const decodValue = decod.value;

  if (inputCheck === codValue) {
    traduzir.className = "codificar";
  } else if (inputCheck === decodValue) {
    traduzir.className = "decodificar";
  }
}

function acao() {
  let chave = document.getElementById("chave").value;
  let codificaArea = document.getElementById("codificaArea").value;
  const classTrad = traduzir.className;

  if (codificaArea == "" || chave == "") {
    alert("Você deve escrever sua mensagem e escolher a chave de codificação.");
  }

  if (classTrad === "codificar") {
    resultadoArea.innerHTML = crypto(Number(chave), codificaArea);
  } else if (classTrad === "decodificar") {
    resultadoArea.innerHTML = decrypto(Number(chave), codificaArea);
  }

  if (classTrad == "decodificar" || classTrad == "codificar") {
    classTrad == ""; //reiniciar o processo pra não somar as funções
  } else {
    alert('Você precisa selecionar "codificar" ou "decodificar".');
  } 
}

traduzir.addEventListener("click", acao);
cod.addEventListener("click", codificarDecodificar);
decod.addEventListener("click", codificarDecodificar);
