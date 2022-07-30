
    const cipher = {

        codificar: function(input, msg){
        
          let resultado = "";  

        
            for (let i = 0; i < msg.length; i++) { 
        
          let codigo = msg.charCodeAt(i);  
        
            if( codigo >= 65 && codigo <= 90 ){ 
            resultado += String.fromCharCode((codigo - 65 + input) %26 + 65); //pega o código ASCII e transformar em letra de novo
          }   

       }
      console.log(resultado);
      return resultado; 
    },

      decodificar: function(input, msg){

        let resultado = ""; 

          for (let i = 0; i < msg.length; i++){

        let codigo = msg.charCodeAt (i);

          if ( codigo >= 65 && codigo <= 90  ){
          resultado += String.fromCharCode((codigo - 90 - input) %26 + 90);}

     }
    console.log(resultado);
    return resultado; 
  }
  }
export default cipher;
