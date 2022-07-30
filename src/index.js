import cipher from './cipher.js';

const cod = document.getElementById('codificar');
const decod = document.getElementById('decodificar');
const traduzir = document.getElementById('traduzir');
const crypto = cipher.codificar;
const decrypto = cipher.decodificar; 

function codificarDecodificar(){ 
    const inputCheck = document.querySelector('input[name="radioOpcoes"]:checked').value;
    const codValue = cod.value;
    const decodValue = decod.value;
    
       if( inputCheck === codValue ){
        traduzir.classList.toggle("codificar");
        console.log(inputCheck);
       } 

       else if( inputCheck === decodValue ){
        traduzir.classList.toggle("decodificar");
        console.log(inputCheck);
       }
       
    //    else{
    //     traduzir.classList.add(""); 
    //     alert('Você precisa selecionar "codificar" ou "decodificar".');
    //    }
};

function acao(){
    let chave = document.getElementById('chave').value; 
    let codificaArea = document.getElementById('codificaArea').value;
    const classTrad = traduzir.className; 

    if(codificaArea == "" || chave == ""){
    alert("Você deve escrever sua mensagem e escolher a chave de codificação.")   
    
    }

    if(classTrad==="codificar"){
    crypto(chave, codificaArea);

    }
    
    else if(classTrad==="decodificar"){
    decrypto(chave, codificaArea);

    }
    console.log(classTrad);
};

traduzir.addEventListener('click', acao);
cod.addEventListener('click', codificarDecodificar);
decod.addEventListener('click', codificarDecodificar);

