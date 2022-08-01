import cipher from './cipher.js';

const cod = document.getElementById('codificar');
const decod = document.getElementById('decodificar');
const traduzir = document.getElementById('traduzir');
const crypto = cipher.encode;
const decrypto = cipher.decode; 
const resultadoArea = document.getElementById('resultadoArea');

function codificarDecodificar(){ 
    const inputCheck = document.querySelector('input[name="radioOpcoes"]:checked').value;
    const codValue = cod.value;
    const decodValue = decod.value;
    
       if( inputCheck === codValue ){
        traduzir.className="codificar";
        console.log(inputCheck);
       } 

       else if( inputCheck === decodValue ){
        traduzir.className="decodificar";
        console.log(inputCheck);
       }
       
      
}

function acao(){
    let chave = document.getElementById('chave').value; 
    let codificaArea = document.getElementById('codificaArea').value;
    const classTrad = traduzir.className; 

    if(codificaArea == "" || chave == ""){
    alert("Você deve escrever sua mensagem e escolher a chave de codificação.")   
    
    }


    if(classTrad==="codificar"){
    resultadoArea.innerHTML = crypto(Number(chave), codificaArea);

    }
    
    else if(classTrad==="decodificar"){
    resultadoArea.innerHTML = decrypto(chave, codificaArea);

    }

    if (classTrad == "decodificar" || classTrad == "codificar"){
        classTrad == ""
    }
    
    else{
        alert('Você precisa selecionar "codificar" ou "decodificar".');
        }

    console.log(classTrad);
}

traduzir.addEventListener('click', acao);
cod.addEventListener('click', codificarDecodificar);
decod.addEventListener('click', codificarDecodificar);

